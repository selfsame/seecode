(ns deck.core
  (:require
    [goog.events :as events]
    [cljs.reader :as reader]
    [cljs.pprint :as pprint]
    [cognitect.transit :as transit]
    [hyper.js :as j][hyper.tools :as t]
    [dollar.bill :as $ :refer [$]]
    [pdfn.core :refer [and* or* not* is*] :refer-macros [defpdfn pdfn inspect]])
  (:import
    [goog.events EventType]))

(enable-console-print!)

(defn ->edn [o] (transit/write (transit/writer :json) o))
(defn edn-> [s] (transit/read (transit/reader :json) s))
(defn raw-edn-> [s] (reader/read-string s))

(defn element-dimensions [el]
  [(.-offsetWidth el) (.-offsetHeight el)])

(defn bounding-client-rect [el]
  (js->clj (.getBoundingClientRect el)))


(defonce screen (atom []))
(defn get-screen [] (reset! screen 
  [(.. js/window -innerWidth)
   (.. js/window -innerHeight)]))



(defonce state (atom {
  :deck []
  :cursor []}))

(defn -grid 
  ([x]   [(get-in @state [:deck x]) (first ($ (str "#col" x)))])
  ([x y] [(get-in @state [:deck x y]) (first ($/find ($ (str "#col" x)) (str "#row" y)))]))

(defn inject-css [id s]
  (let [el (or (first ($ (str "#" id)))
               (first ($ (str "<style id='" id "'></style>"))))]
    (aset el "innerHTML" s)
    (.appendChild (first ($ "head")) el)))

(defn mount-row [root x y]
  (let [[data _] (-grid x y)
        [_ column] (-grid x)]

    (cond 
      (:iframe data)
      ($/append (first root) ($ (str "<slide id='row" y "'><iframe src='" (:iframe data) "'></iframe></slide>")))
      (:code data)
      (js/request (:code data) 
        #(let [slide ($ (str "<slide class='code' id='row" y "'><pre></pre></slide>"))]
          (js/mount % (first ($/find (first slide) "pre")))
          (.appendChild  (first ($ (str "#col" x)))  (first slide))))
      (:md data)
      (let [slide ($ (str "<slide class='frame markdown' id='row" y "'>" 
              (.toHTML js/markdown (:md data)) "</slide>"))]
          ($/append  (first root)  (first slide)))
      :else
      (let [frame ($ (str "<slide class='frame' id='row" y "'></slide>"))]
        (cond 
          (:header data) 
          ($/append (first frame) (first ($ (str "<h1>" (:header data) "</h1>")))))
        ($/append (first root) (first frame))))))

(defn mount-column [x]
  (let [id (str "col" x) 
        [data _] (-grid x)
        gradient (or (:gradient (first data)) ["gray" "black"])
        root ($ (str "<background id='" id"'></background>"))]
    (mapv #(mount-row root x %) (range (count data)))
    (inject-css (str "skin-" id)
      (str "#" id  
      " {left: " (* x 100) "% ;"
      "background-image:
        linear-gradient(" 
        (apply str (interpose ", " gradient)) ");}"))
    ($/append (first ($ "#main")) (first root))))

(defn mount [idx]
  ($/detach ($ "background"))
  (mapv #(mount-column %) (range (count (:deck @state)))))

(defn on-resize [e]
  (get-screen))

(def dirmap {:left [-1 0] :right [1 0] :up [0 -1] :down [0 1]})

(defn navigate! [k]
  (swap! state update :cursor #(mapv - % (dirmap k) ))
  (set! (.. (first ($ "#main")) -style -transform) 
    (apply str (flatten ["translate(" (interpose "," (map #(str (* % 100) "%") (:cursor @state)))")"]))))



(def keymap {37 :left 39 :right 38 :up 40 :down})

(defn on-keydown [e]
  (j/log (.-keyCode e))
  (when-let [k (keymap (.-keyCode e))]
    (navigate! k)))

(defonce -init (do
  (get-screen)
  (events/listen js/window EventType.RESIZE on-resize)
  (events/listen js/window EventType.KEYDOWN on-keydown)))

(defn on-js-reload []
  (print (with-out-str (pprint/pprint @state)))
  (when (t/multiple? (:deck @state))
    (mount 0)))

(j/ajax "data/deck.edn" 
  (fn [s] 
    (swap! state assoc :deck (raw-edn-> s))
    (swap! state assoc :cursor [0 0])
    (mount 0)) 
  #(.error js/console %))


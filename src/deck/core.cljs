(ns deck.core
  (:require
    [goog.events :as events]
    [clojure.string :as string]
    [cljs.reader :as reader]
    [cljs.pprint :as pprint]
    [cognitect.transit :as transit]
    [hyper.js :as j][hyper.tools :as t]
    [dollar.bill :as $ :refer [$]]
    [pdfn.core :refer [and* or* not* is*] :refer-macros [defpdfn pdfn inspect]]
    [deck.data])
  (:import
    [goog.events EventType]))

(declare DECK)

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
  :graph {}
  :deck []
  :cache {}
  :cursor [0 0]
  :scale 1.0}))

(defn inject-css [id s]
  (let [el (or (first ($ (str "#" id)))
               (first ($ (str "<style id='" id "'></style>"))))]
    (aset el "innerHTML" s)
    (.appendChild (first ($ "head")) el)))

(defn slide-dsl [s]
  (string/replace
    (string/replace s #"(\★)([0-9]+)" 
      #(str "<div class='column' style='width:" (last %1) "%'>"))
    #"(\★)/" "</div>"))

(defn style! [el k v] (when el (aset (.-style el) (clj->js k) v)))

(defn image-ratio [el]
  (when el 
    (let [screen-ratio (apply / (reverse @screen))
          dims [(.-width el)(.-height el)]
          ratio (apply / (reverse dims))
          h-ratio (/ screen-ratio ratio)]
      (style! el "width" (str (* h-ratio 100) "%"))
      (style! el "height" (str (* h-ratio 100) "%")))))


(defn class! [el k] (when (.-classList el) (.add (.-classList el) (clj->js k) )))
(defn -class! [el k] (when (.-classList el) (.remove (.-classList el) (clj->js k) )))

(defn ->slide [k & more] (get-in @state (vec (concat [:graph k] more))))
(defn ->slide! [k & more] (swap! state update-in [:graph k] 
  #(apply (first more) (cons % (rest more)))))

(defn mount [[[x y] m]]
  (let [main (first ($ "#main"))
        slide (:dom m)]
    (mapv #(style! slide %1 (str (* %2 100) "%")) [:left :top] [x y])
    (when (:zoom m) (style! slide :zoom (str (:zoom m))))
    (.appendChild main slide)))

(defn unmount [])

(def slide-mount 
  (fn [k]
    (when (and (->slide k :dom)(->slide k :cache))
      (set! (.-innerHTML (->slide k :dom)) "")
      (.appendChild (->slide k :dom) (->slide k :cache)))))

(defn slide-unmount-fn [m]
  (fn [k]
    (when-not (= k (:cursor @state))
      (set! (.-innerHTML (->slide k :dom)) 
        (str "<h1>" (or (:name m)(:code m)(:md m)) "</h1>")))))

(defn load-resource [[k m]]
  (cond 
    (:img m)
    (do (class! (->slide k :dom) :img)
        (class! (->slide k :dom) (or (last (re-find #"\.(.+)$" (:img m))) ""))
        (.appendChild (->slide k :dom) (first ($ (str "<div><img src='" (:img m) "'></div>"))))
        (mount [k m]))
    (:code m)
    (js/request (str "data/" (:code m))
      (fn [s]
        (swap! state update-in [:graph k] conj 
          {:text s
           :cache (first ($ "<div class='cache'></div>"))
           :mount slide-mount 
           :unmount (slide-unmount-fn m)})
        (class! (->slide k :dom) :code)
        (js/mount s (->slide k :cache))
        (mount [k m])))
    (:md m)
    (let [s (get (:markdown @state) (:md m) "#:nf")]
      (swap! state update-in [:graph k] conj 
        {:text s
         :cache (first ($ "<div class='cache'></div>"))
         :mount slide-mount 
         :unmount #() #_(slide-unmount-fn m) })
      (class! (->slide k :dom) :markdown)
      (set! (.-innerHTML (->slide k :cache))
        (slide-dsl (.toHTML js/markdown (or (:value m) s))))
      (mapv #(set! (.-innerHTML %) (js/cljhtml (j/html-decode (.-innerHTML %)))) ($/find (->slide k :cache) "code"))
      (.appendChild (->slide k :dom) (first ($ (str "<h1>" (or (:name m)(:md m)) "</h1>"))))
      (mount [k m]))
    (:slideshow m)
    ((get-in [@state :cache] (:slideshow m)
      (partial js/request (str "data/" (:slideshow m))))
      (fn [s]
        (swap! state update-in [:cache] conj {(:slideshow m) s})
        (swap! state update-in [:graph k] conj {
          :idx 0 
          :slides (.parse js/JSON s)
          :image-cache {}
          :show (fn [] 
            (style! (first ($/find (->slide k :dom) "img")) :opacity 0.0)
            (js/setTimeout (fn []  
              (let [data (get (->slide k :slides) (->slide k :idx))
                    mime (if data (.substr data 11, 3) "none")
                    el (or (->slide k :image-cache (->slide k :slides))
                           (do (let [newimg (first ($ (str "<div><img class='" mime "''></div>")))]
                                  (.setAttribute (first ($/find newimg "img")) "src" data)
                                  (->slide! k update :image-cache conj {(->slide k :idx) newimg}) newimg)))]
              (set! (.-innerHTML (->slide k :dom)) 
                (str "<span class='nav'>" 
                  (apply str (map #(if (= % (->slide k :idx)) "[x]\n" "[ ]\n") (range (count (->slide k :slides)))))
                  "</span>"))
              (.appendChild (->slide k :dom) el)
              (js/setTimeout (fn []
                (style! (first ($/find (->slide k :dom) "img")) :opacity 1.0)
                (image-ratio (first ($/find (->slide k :dom) "img"))) 50))))
            200))
          :onkeydown 
          (fn [keyk] 
            (->slide! k update :idx 
              #(if (< % (dec (count (->slide k :slides)))) (inc %) 0))
            ((->slide k :show)))})
        (class! (->slide k :dom) :img)
        (class! (->slide k :dom) :slideshow)
        (mount [k m])
        ((->slide k :show))))))



(defn populate! []
  (vec (for 
    [x (range (count (:deck @state)))]
      (vec (for [y (range (count (get (:deck @state) x)))
                 :let [m (get-in @state [:deck x y])]]
        (swap! state update :graph 
          #(conj % {[x y] (conj {} m {:dom (first ($ "<slide></slide>"))})}))))))
  (mapv load-resource (-> @state :graph)))

(defn on-resize [e]
  (let [[sx sy] (get-screen)
        desired (/ sx 1400)
        ratio (/ sy sx)]
    (when (< desired 1.0)
      (style! (first ($ "html")) :zoom (str desired)))
    (inject-css "view-ratio"
      (str "slide{padding:0em " (- (* ( - 1 ratio) 50) 10) "%;}"))
    [desired ratio (- (* ( - 1 ratio) 50) 10)]))

(def dirmap {
  :left [1 0] :right [-1 0] :up [0 -1] :down [0 1] 
  :- 0.12 :+ 1.0 :z- -0.03 :z+ 0.03})

(defn neighbors [[a b]]
  (for [v [[0 0][-1 0][1 0][0 1][0 -1]]] 
    (mapv + [a b] v)))

(defn update-neighbors [k f]
  (mapv #(when-let [slide (->slide % :dom)] (f slide)) (neighbors k)))

(defn navigate! [k]
  (let []
    (cond 
      (#{:- :+} k)
      (do (js/setTimeout #(({:- class! :+ -class!} k) (first ($ "#main")) "overview") 20)
          (swap! state update :scale #(dirmap k)))
      (#{:z- :z+} k)
      (let [zoom (.. (->slide (:cursor @state) :dom) -style -zoom)]
        (style! (->slide (:cursor @state) :dom) :zoom 
          (str (+ (js/parseFloat (get {"" 1} zoom zoom)) (dirmap k)))))
      (#{:left :right :up :down :?} k)
      (do (update-neighbors (:cursor @state) #(-class! % :near))
      		(swap! state update :cursor 
            #(let [pos (mapv - % (dirmap k))]
              (if (->slide pos) 
                (do (-class! (->slide % :dom) :cursor)
                    (class! (->slide pos :dom) :cursor)
                    ((or (->slide pos :mount) (fn [_])) pos)
                    (js/setTimeout (fn [] ((or (->slide % :unmount) (fn [_])) %)) 400)
                    pos) %)))
          (update-neighbors (:cursor @state) #(class! % :near)))
      :else
      ((or (->slide (:cursor @state) :onkeydown) #()) k))
    (when (= :? k)
      ((or (->slide (:cursor @state) :mount) (fn [_])) (:cursor @state)))
    (when (#{:left :right :up :down :- :+ :?} k)
      (style! (first ($ "#main")) :transform 
      (str "scale(" (:scale @state) ") "
           "translate(" (apply str (interpose "," (map #(str (* % 100) "%") 
            (mapv * (:cursor @state) [-1 -1])))) ")")))))



(def keymap {
  37 :left 39 :right 40 :up 38 :down 
  33 :- 34 :+ 13 :+ 27 :-
  107 :z+ 109 :z-
  32 :space})

(defn on-keydown [e]
  (j/log (.-keyCode e))
  (when-let [k (keymap (.-keyCode e))]
    (navigate! k)))

(defonce -init (do
  (get-screen)
  (events/listen js/window EventType.RESIZE on-resize)
  (events/listen js/window EventType.KEYDOWN on-keydown)))

(defn markdown-map [s]
  (apply merge (map (fn [m] {(last (butlast m)) (last m)}) 
    (re-seq #"([\r\n \t]*\¶[ \t]*([^\r\n]+)[\r\n]*([^\¶]+))" 
      s))))

(defn init []
  (prn 'on-js-reload)
  (js/request "data/markdown.html" 
    (fn [s]     
      (swap! state assoc :markdown (or (markdown-map s) deck.data/markdown-map))
      (swap! state assoc :deck DECK)
      (swap! state assoc :graph {})
      ($/detach ($ "slide"))
      (populate!)
      (navigate! :?))))


(def DECK [
[ {:md "title"}
  {:md "why-clojure"}]

[ {:md "onlyone"}
  {:code "code/onlyone/data.cljs"}]

[ {:md "libgdx" :zoom 0.8}
  {:md "libgdx2" :zoom 0.8}
  {:md "libgdx-games"}]

[ {:md "arcadia"}
  {:md "arcadia2"}
  {:slideshow "arcadia.json"}
  {:code "code/hard_core.clj"}]

[	{:md "parade-route" :zoom 0.8}
	{:code "code/parade.clj"}]

[	{:md "whale"}
	{:md "whale2"}
	{:md "whale3"}]

[ {:md "tween" :zoom 1}
  {:md "tween1" :zoom 0.9}
  {:md "tween2" :zoom 1}
  {:code "code/tween_core.clj"}]

[ {:md "dual-snake" :zoom 0.7}
  {:md "dual-snake2" :zoom 1}
  {:code "code/dual-snake.clj"}]

[ {:md "wacky" :zoom 0.8}
	{:md "wacky2"}]

[	{:md "night-farm" :zoom 1.5}
  {:slideshow "lonely.json"}]

[ {:md "squid" :zoom 0.8}
  {:md "squid2" :zoom 0.8}
  {:md "squid3"}]

[ {:md "ec"}
	{:code "code/pong.clj"}
	{:md "ec1"}
  {:img "data/img/ec-code.png"}
  {:code "code/ec/core.cljs"}]

[ {:md "modern-dance"}
  {:md "modern-dance2"}]

[ {:md "predicate"}
  {:img "data/img/inform.png"}
  {:md "mud"}
  {:md "pdfn1"}
  {:md "pdfn3"}
  {:md "pdfn2"}
  {:code "code/pdfn_core.clj"}]

[	{:md "monster"}
	{:slideshow "monster.json"}]

[ {:md "infinity-coaster" :zoom 0.7}
	{:md "infinity-coaster1"}
  {:md "infinity-coaster2"}
  {:slideshow "img/infinity-human.json"}
  {:md "infinity-coaster3"}
  {:slideshow "world.json"}
  {:code "code/hard/seed.clj"}]

[ {:md "the-dims"}
  {:code "code/the-dims/data.clj"}
  {:code "code/the-dims/play.clj"}] ])


(init)
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
  :cursor [0 0]
  :scale 1.0}))

(defn inject-css [id s]
  (let [el (or (first ($ (str "#" id)))
               (first ($ (str "<style id='" id "'></style>"))))]
    (aset el "innerHTML" s)
    (.appendChild (first ($ "head")) el)))



(defn style! [el k v]
  (aset (.-style el) (clj->js k) v))

(defn image-ratio [el]
  (prn 'image-ratio)
  (let [screen-ratio (apply / (reverse @screen))
        dims [(.-width el)(.-height el)]
        ratio (apply / (reverse dims))
        h-ratio (/ screen-ratio ratio)]
    (style! el "width" (str (* h-ratio 100) "%"))
    (style! el "height" (str (* h-ratio 100) "%"))))




(defn class! [el k] (when (.-classList el) (.add (.-classList el) (clj->js k) )))
(defn -class! [el k] (when (.-classList el) (.remove (.-classList el) (clj->js k) )))

(defn ->slide [k & more] (get-in @state (vec (concat [:graph k] more))))

(defn mount [[[x y] m]]
  (let [main (first ($ "#main"))
        slide (:dom m)]
    (mapv #(style! slide %1 (str (* %2 100) "%")) [:left :top] [x y])
    (.appendChild main slide)))

(defn unmount [])

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
        (swap! state update-in [:graph k] assoc :text s)
        (class! (->slide k :dom) :code)
        (js/mount s (->slide k :dom))
        (mount [k m])))
    (:md m)
    (js/request (str "data/" (:md m)) 
      (fn [s]
        (swap! state update-in [:graph k] assoc :text s)
        (class! (->slide k :dom) :markdown)
        (set! (.-innerHTML (->slide k :dom))
          (.toHTML js/markdown (or (:value m) s)))
        (mount [k m])))))



#_(js/request "data/img/world.json"
  (fn [s]
    (mapv 
      #(let [img (first ($ "<img>"))]
        (.setAttribute img "src" %) (.appendChild (first ($ "slide.img")) img))     
      (.parse js/JSON s))))



(defn populate! []
  (vec (for 
    [x (range (count (:deck @state)))]
      (vec (for [y (range (count (get (:deck @state) x)))
                 :let [m (get-in @state [:deck x y])]]
        (swap! state update :graph 
          #(conj % {[x y] (conj {} m {:dom (first ($ "<slide></slide>"))})}))))))
  (mapv load-resource (-> @state :graph)))

(defn on-resize [e]
  (get-screen))

(def dirmap {:left [1 0] :right [-1 0] :up [0 -1] :down [0 1] :- 0.075 :+ 1.0})

(defn neighbors [[a b]]
  (for [v [[0 0][-1 0][1 0][0 1][0 -1]]] (mapv + [a b] v)))

(defn update-neighbors [k f]
  (mapv #(when-let [slide (->slide % :dom)] (f slide)) (neighbors k)))

(defn navigate! [k]
  (update-neighbors (:cursor @state) #(-class! % :near))
  (if (#{:- :+} k)
    (swap! state update :scale #(dirmap k))
    (swap! state update :cursor 
      #(let [pos (mapv - % (dirmap k))]
        (if (->slide pos) 
          (do (-class! (->slide % :dom) :cursor)
              (class! (->slide pos :dom) :cursor)
              pos) %))))
  (update-neighbors (:cursor @state) #(class! % :near) )

  (if (->slide (:cursor @state) :img) 
    (image-ratio (first ($/find (->slide (:cursor @state) :dom) "img"))))

  (style! (first ($ "#main")) :transform 
    (str  "scale(" (:scale @state)") "
      "translate(" (apply str (interpose "," (map #(str (* % 100) "%") (mapv * (:cursor @state) [-1 -1]))))")")))



(def keymap {37 :left 39 :right 40 :up 38 :down 33 :- 34 :+})

(defn on-keydown [e]
  (j/log (.-keyCode e))
  (when-let [k (keymap (.-keyCode e))]
    (navigate! k)))

(defonce -init (do
  (get-screen)
  (events/listen js/window EventType.RESIZE on-resize)
  (events/listen js/window EventType.KEYDOWN on-keydown)))




(defn on-js-reload []
  (j/ajax "data/deck.edn" 
    (fn [s]     
      (swap! state assoc :deck DECK)
      (swap! state assoc :graph {})
      ($/detach ($ "slide"))
      (populate!)
      (navigate! :?)) 
    #(.error js/console %)))





(def DECK [
[ { :md "title.md"}]

[{ :value "#cljs" :md "ec.md"}
 { :value "#onlyone" :md "ec.md"}]

[{ :value "#libGDX" :md "ec.md"}]

[{ :md "arcadia.md"}
 {:code "code/hard_core.clj"}]

[{:md "arcadia2.md"}
{:img "data/img/arcadia/center-stairs.jpg"}
{:img "data/img/arcadia/dubble-primitives.jpg"}
{:img "data/img/arcadia/dungeon.jpg"}
{:img "data/img/arcadia/spire.jpg"}
{:img "data/img/arcadia/wolfram.jpg"}]

[
{:md "ec.md":value "#first week"}
{:img "data/img/arcadia/cljunity01.png"}
{:img "data/img/arcadia/compart.png"}
{:img "data/img/arcadia/floaty miami.png"}
{:img "data/img/arcadia/perlin-islands.jpg"}
{:img "data/img/arcadia/treegen.jpg"}
{:img "data/img/arcadia/Untitled-12.png"}
{:img "data/img/arcadia/Untitled-2.png"}]

[{ :value "#Parade Route" :md "ec.md"}

{ :value "#whale" :md "ec.md"}]

[{ :value "#tween.core" :md "ec.md"}]

[{ :value "#dual-snake" :md "ec.md"}
  { :img "data/html/gifs/1.gif"}
  { :value "#wacky-waving" :md "ec.md"}
  { :value "#night-farm" :md "ec.md"}
  { :value "#wacky-waving" :md "ec.md"}
  {:value "#lonely-dungeon" :md "ec.md"}]

[{:md "ec.md"}]

[{:value "#An Evening of Modern Dance" :md "ec.md"}]

[{ :value "#pdfn" :md "ec.md"}]

[
 { :value "#adventure" :md "ec.md"}
 { :value "#monster" :md "ec.md"}
  { :img "data/img/kids.png"}
  { :img "data/img/showoff.png"}]


[{:value "#infinity-coaster" :md "ec.md"}]

[{:value "#The Dims" :md "ec.md"}]])



(on-js-reload)
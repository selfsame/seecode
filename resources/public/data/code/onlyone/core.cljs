(ns onlyone.core
  ;(:require-macros [onlyone.macro :refer [defmapstack also fresh funct filt]] )
  (:require
    [clojure.string :as string]
    [clojure.set :as sets]
    [domina :as dom]
    [domina.events :as dom-events]
    [onlyone.tween :as tween]

    [onlyone.act :as act]
    [onlyone.canvas :as canvas]
    [onlyone.dungeon :as dungeon])
  (:use [onlyone.data :only [PLAYER DUNGEON HASHES monster-data tiles tile-lookup]]
        [onlyone.common :only [abs v+ v- v* vdiv X Y half to-tile from-tile clog state uid-map
                               set-state ppprint note-hash make-hash entities-in-around]]))

(enable-console-print!)

(declare init-game $static $dynamic)

(def view-width 900)
(def view-height 600)
(def game-width 1600)
(def game-height 1600)
(def tile-size 32)

(defn position-view [x y]
  (domina/set-styles! (domina/by-id "scroller") {:left (str x "px") :top (str y "px")}))


(defn center-view [x y]
  (let [tx (+ (- (half view-width) x))
        ty (+ (- (half view-height) y))
        bx (- game-width view-width )
        by (- game-height view-height )
        xx (cond (< tx 0) 0 (> tx bx) bx :else tx)
        yy (cond (< ty 0) 0 (> tx bx) by :else tx)]
  (position-view tx ty )))

(def GAMESTATE (atom :loading))

(def KEYS-DOWN (atom #{}))

(defn handle-keydown [e]
  (let [code (.-keyCode e)]
    (swap! KEYS-DOWN conj code)))

(defn handle-keyup [e]
  (let [code (.-keyCode e)]
    (swap! KEYS-DOWN disj code)))


(defn pmove [e offset]
  ;probably tell everybody to move
  (act/move e offset))

(defn route-keys []
  (defn- down? [code]
    (contains? @KEYS-DOWN code))
  (when (= @GAMESTATE :dungeon)
    (when (state @PLAYER :idle)
      (cond (down?  36) (pmove @PLAYER [-1 -1]) ;nw
            (down?  33) (pmove @PLAYER [1 -1]) ;ne
            (down?  38) (pmove @PLAYER [0 -1]) ;n
            (down?  39) (pmove @PLAYER [1 0]) ;e
            (down?  34) (pmove @PLAYER [1 1]) ;se
            (down?  40) (pmove @PLAYER [0 1]) ;s
            (down?  35) (pmove @PLAYER [-1 1]) ;sw
            (down?  37) (pmove @PLAYER [-1 0]) ;w
            (down?  87) (act/wield @PLAYER)) )))

(defn draw-tile [kw gx gy]
  (let [tile-data (get tiles kw)
        sprite (:sprite tile-data)
        x (* gx tile-size)
        y (* gy tile-size)
        sx (* (first sprite) 16)
        sy (* (last sprite) 16)]
    (canvas/draw-image (dom/by-id "tiles") sx sy 16 16 x y tile-size tile-size)))


(defn draw-dungeon [data]
  (canvas/set-target $static)
  (canvas/clear-rect 0 0 1600 1600)
  (let [height (:height data)
        width (:width data) ]
    (for [y (range 0 height)
          x (range 0 width)
          :let [local (dungeon/get-local-tiles x y)
                coo (tile-lookup local)]]
        (canvas/draw-image (dom/by-id "tiles")  
          (* (Y coo)  16) (* (X coo) 16) 
          16 16 
          (*  x tile-size) (* y tile-size) 
          tile-size tile-size))))

(defn inside?
  [x y w h px py]
    (if (and (< x px (+ x w))
             (< y py (+ y h))) true false))


(defn in-view [col]
  (let [scroll (domina/by-id "scroller")
        scrollx (aget scroll "offsetLeft")
        scrolly (aget scroll "offsetTop")
        vx (- scrollx)
        vy (- scrolly)]
  (filter (fn[e]
            (inside? vx vy view-width view-height (* (state e :x) 32) (* (state e :y) 32) ))   col)))

(defn entities-in-view [all]
  (let [vx (int (* (X @PLAYER) .125))
        vy (int (* (Y @PLAYER)  .125))
        subset (entities-in-around :8 [vx vy] @HASHES)]
    (vals (select-keys all subset))))


(defn draw-entities [dung]
  (let [entities (cons @(:player dung) (vals @(:entities dung)))
        items (vals @(:items dung))]
    (mapv (fn[e] 
      (let [typ (:type e)
            dx (* tile-size (state e :x))
            dy (* tile-size (state e :y))
            sprite (:sprite e)
            sx (* (first sprite) 16)
            sy (* (last sprite) 16)]
      (canvas/draw-image (dom/by-id "tiles") sx sy 16 16 dx dy tile-size tile-size) )) items)
    (mapv (fn[e] 
      (let [species (:species e)
            dx (state e :dx) dy (state e :dy)
            sprite (:sprite (get monster-data species))
            h (abs (state e :health))
            health (int (* h 2.5))
            rgb (str "rgb(" (- 255 health)"," health ",0" ")")
            sx (* (first sprite) 16)
            sy (* (last sprite) 16)]
        (canvas/draw-image (dom/by-id "tiles") sx sy 16 16 dx dy tile-size tile-size)
        (when (< h 100)
          (canvas/begin-path)
          (canvas/fill-style rgb)
          (canvas/rect dx (+ dy 33) (* 32 h .01) 3)
          (canvas/fill)))) entities)))


(defn load-level []
  (reset! GAMESTATE :loading)
  (reset! DUNGEON (dungeon/new-rand-dungeon 40 40))
  (dungeon/place-player @DUNGEON @PLAYER)
  (center-view (from-tile (state @PLAYER :x))  (from-tile (state @PLAYER :y)))
  (dorun (draw-dungeon @DUNGEON))
  (reset! GAMESTATE :dungeon))

(defn update! [delta]
  (if (<= (state @PLAYER :health) 0)
    (dom/set-html! (dom/by-id "main") "<h1>you dead</h1>")
    (do
      (canvas/set-target $dynamic)
      (canvas/clear-rect 0 0 1600 1600)
      (js/requestAnimationFrame update!)
      (tween/update! delta)
      (act/regenerate @PLAYER)
      (dorun (map act/live (vals @(:entities @DUNGEON))))

      ;thread {:actors [] :tweens @tween/NT} through the various updates, apply the tweens, and render
      (-> {:actors (vals (act/get-actors)) :tweens @tween/NT :delta delta}
          (comment 
            (act/-update- )
            (act/update-actors)
            (act/use-tweens)
            (act/store-rendered)))

      ;update the entity map with delta
      ;this returns the altered entities with tween changes applied, and the current tween map
      ;this is passed to a render function, and then swaped into memory

      (draw-entities @DUNGEON)
      (tween/update-fx delta)
      (center-view (state @PLAYER :dx)  (state @PLAYER :dy))
      (route-keys)
      ;(act/update-sidebar @PLAYER)
      (set! (.-innerHTML (dom/by-id "debug")) (ppprint @KEYS-DOWN)))))



(defn init-game []
  (reset! HASHES {
    :32 (make-hash 32)
    :16 (make-hash 16)
    :8 (make-hash 8)
    :4 (make-hash 4)})

  (reset! PLAYER {
    :species :player :uid -1
    :state (atom {
      :uid -1 
      :player true 
      :idle true 
      :speed 200
      :health 100
      :t 0 
      :lefthand false 
      :righthand false
      :head false 
      :feet false 
      :body false
      :mind false})})

  (act/update-sidebar @PLAYER)
  (load-level)
  (mapv #(note-hash % @HASHES) (vals (act/get-actors)))
  (update! [0]))

(defn env-ready []
  (def $static (dom/by-id "static"))
  (def $dynamic (dom/by-id "dynamic"))
  (dom-events/listen! :keydown (fn [e] (handle-keydown (aget e "evt"))) )
  (dom-events/listen! :keyup (fn [e] (handle-keyup (aget e "evt"))) )
  (init-game))

(env-ready)
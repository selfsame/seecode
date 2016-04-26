(ns game.play
  (:require
    hard.life)
	(:use
    hard.rules
    pdf.core
    hard.core
    hard.sound
    game.data
    ;game.scene
    [tween.core :as tween]))


(defn wall? [o] (= (.name (->go o)) "wall"))
(defn entity? [o] (= (.name (->go o)) "entity"))
(defn data? [o] (data (->go o)))
(defn player? [o] (:player (data o)))
(def cooled-down? #(neg? (:damage-cooldown (data %))))


(defn >colorize [o col]
  (mapv
    #((tween/material-color col 0.1
       (fn [o] ((tween/material-color (color 1 1 1) 0.1) o))) 
      (->go %))
    (child-components o UnityEngine.MeshRenderer)))

(defpdf collide)
(defpdf damage)
(defpdf trigger)
(defpdf remove-health)

(def >squish (tween/scale (->v3 1.5 0.5 1.5) 0.1 :pow3))
(link! >squish (tween/scale (->v3 1 1 1) 0.3 :pow2))

(defn name= [s] (fn [o] (if (= (.name o) s) true false)))
(def falling? (fn [d] (pos? (or (:fallstate d) 0))))

(pdf collide [a b])
(pdf collide [a ^wall? b ad bd])
(pdf collide [a ^entity? b ad bd])
(pdf collide [a b ad bd]
  {ad (and* :player falling?)}
  ((:damage @FN) a (:fallstate ad))
  ((assoc >squish :target (->v3 (v* (:target >squish) (:fallstate ad)))) a)
  (data! a (assoc (data a) :fallstate 0)))

(pdf trigger [a b ad ^:trap bd]
  ((:damage @FN) a 1))

(pdf trigger [a b ^:player ad ^:torch-item bd]
  {}
  (log (main-thread?))
  (play-clip! "pickup" {:volume 0.3})
  (swap! PLAYER update-in [:torches] inc)
  (set! (.text (component (the ui-torches) UnityEngine.UI.Text)) (str (:torches @PLAYER)))
  (defer! (destroy! b)))

(pdf trigger [a b ^:player ad ^:health-item bd]
  {}
  (play-clip! "pickup" {:volume 0.3})
  (swap! PLAYER update-in [:health] #(min (inc %) (:max-health @PLAYER)))
  (set! (.text (component (the ui-health) UnityEngine.UI.Text))(str (:health @PLAYER)))
  (defer! (destroy! b)))


(pdf trigger [a b ad ^:door bd]
  (let [dir (:direction bd)
        offset (key-offset dir)
        room-offset (->xyz (v* (key-offset dir) [room-w room-h]))]
    (set! (.enabled (.* b>BoxCollider)) false)
    (swap! game.data/ROOM #(v+ % (key-offset dir)))
    ((tween/position (->v3 0) 0.01 
      (fn [_] 
        (game.data/scene :room (v+ (->xyz (key-offset dir)) (exit-locs (reverse-dir dir)))) ))
      (the :room))))



(rule hard.life/collision-enter [a b tag id]
  (collide a (.gameObject b) (data a) (data (.gameObject b))))

(rule hard.life/trigger-enter [a b tag id]
  (trigger a (.gameObject b) (data a) (data (.gameObject b))))

(rule hard.life/trigger-stay [a b tag id]
  {a (name= "player")}
  (data! (->go (parent a))
    (assoc (data (->go (parent a))) :floor 0.2)))

(rule hard.life/collision-enter [a b tag id]
  {a (name= "faller")}
  ((tween/euler (->v3 (v- [(rand-int 10) 0 (rand-int 10)] 5)) :+ (rand)
    #((tween/position (->v3 0 -10 0) 1.0 {:in :pow2}) %)) a))


(def >up (tween/position (->v3 0 0.8 0) 0.3 :+ :pow3 {:delay 1}))
(def >down (tween/position (->v3 0 -0.8 0) 1.2 :+  {:delay 5}))
(link! >up >down >up)
(link! >up (fn [_] (play-clip! "spikes" {:volume 0.3})))

(rule hard.life/start [o tag id]
  {o (name= "spikes")}
  (data! o {:trap true})
  ((assoc >up :delay (+ 1 (rand-int 8))) (child-named o "spikes")))



(defn >damage [o]
  (if (pos? (:damage-cooldown (data o))) 
    (do (>colorize o (color 1 0 0))
        ((tween/scale (->v3 1) 0.2 >damage) o))
    (>colorize o (color 1 1 1))))




(rule hard.life/destroy [^player? o tag id]
  {})

(pdf damage [^cooled-down? o n] 
  (data! o (assoc (data o) :damage-cooldown 1.2))
  (>damage o)
  (remove-health o n))

(pdf remove-health [^player? o n] 
  (let [health (swap! PLAYER update-in [:health] dec)]
    (play-clip! "hurt2" {:volume 0.7})
    (when (neg? (:health @PLAYER))
      (game.data/scene :death))))


(swap! FN #(conj % {:damage damage}))

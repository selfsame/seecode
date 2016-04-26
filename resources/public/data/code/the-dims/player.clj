(ns game.player
  (:require hard.life)
	(:use 
    hard.core
    hard.input
    hard.physics
    hard.sound
    hard.rules
    pdf.core
    game.data
    game.play
    game.world
    [clojure.pprint :only [pprint]]
    [tween.core :as tween]))

(defn pitfall [o]
  (data! o (assoc (data o) :fallstate (inc (:fallstate (data o)))))
  (play-clip! "fall" (->v3 o))
  (game.data/scene :new-level)
  (game.data/scene :room (v+ (->xyz (rand-room-xy)) [0 5 0])))

(defn >tc [o] 
  ((tween/light-color (color (rand-vec [0.6 0.8] [0.5 0.7][0.2 0.4]))  (* (rand) 0.5)) o)
  ((tween/light-range (float  (+ (* (:torch @PLAYER) 0.1) (rand)(rand) 2.0 ) ) (* (rand) 0.3) >tc) o))

(defn check-lantern []
  (if (pos? (:torch @PLAYER))
    (if-let [lantern (the lantern)]
      '(have it)
      (>tc (parent! (clone! :lantern (v+ (->v3 (the player)) [0 1.3 0])) (the player))))
    (destroy! (the lantern))))

(defn light-torch []
  (if ((and* number? pos?) (:torches @PLAYER))
    (do (swap! PLAYER update-in [:torches] dec)
        (swap! PLAYER update-in [:torch] (fn [_] 58))
        (play-clip! "torch-light"))))

(def max-speed 3.0)

(defn move-player [o x z]
  (let [body (->rigidbody o)
        input (v* [x 0 z] 2)
        [vx vy vz] (->vec (->velocity o))
        mov  (->v3 (v+ (v* [vx 0 vz] 0.8) input ))
        ratio (/ max-speed (max (.magnitude mov) 0.0001))
        mov (if (< ratio 1.5) (V* mov ratio) mov)]
  (set! (.velocity body) (->v3 (X mov) vy (Z mov)))))

(defn grounded? [o] (pos? (:floor (data o))))

(defn text! [o s] (try (set! (.text (component o UnityEngine.UI.Text)) s) (catch Exception e)))


(rule hard.life/-update [o tag id]
  {id (is* "player")}
  (let [[x z] (joy)]
    ;(text! (the doormap) (with-out-str (pprint {'PLAYER @PLAYER data (data o) '_CACHE @_CACHE})))
    (data! o (update-in (data o) [:damage-cooldown] #(if (pos? %) (- % UnityEngine.Time/deltaTime) -1)))
    (data! o (update-in (data o) [:floor] #(if (pos? %) (- % UnityEngine.Time/deltaTime) -1)))
    (cond (key-down? "t") (light-torch)
      (key-down? "q") (quit))
    (if (grounded? o)
        (move-player o x z))
    (if (< (Y (->v3 o)) -5) (pitfall o))
    (swap! PLAYER update-in [:torch] #(- (or % 0) UnityEngine.Time/deltaTime))
    (check-lantern)
    (do-deferred)))


(defn make-player [pos]
  (let [o (clone! :entity)]
    (parent! (clone! :player) o)
    (data! o (or @_CACHE {:player true :entity true :damage-cooldown -1 :fallstate 0 :floor 1}))
    (position! o pos) o))

(swap! FN #(conj % {:make-player make-player}))


(rule hard.life/-update [o tag id]
  {tag (is* "camera")
   id  (is* "death")}

  (lerp-look! o (the corpse) (∆ 10)))
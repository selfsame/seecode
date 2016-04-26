(ns game.scene
  (:import [UnityEngine RenderSettings])
	(:require arcadia.core
    [game.player :refer [make-player]])
	(:use 
		hard.core
    tween.core
    hard.rules
    pdf.core
    hard.mesh
    game.data
    game.world))




(defn draw-ui []
  (let [lvl (str "LVL " @LEVEL)
        health (apply str (repeat (:health @PLAYER) (:heart icons)))
        max-health (apply str (repeat (:max-health @PLAYER) (:heart icons)))]
    (mapv #(try (set! (.text (component %1 UnityEngine.UI.Text)) %2)
             (catch Exception e)) 
      [(the ui-level)(the ui-health)(the ui-max-health)
      (the ui-global-points)(the ui-level-points)(the ui-torches)]
      [lvl health max-health (str @POINTS)(str (:level-points @PLAYER))
      (str (:torches @PLAYER))])
    true))

(defn explore []
  (if-not ((:visited @PLAYER) @ROOM)
    (let [points (+ 1 (max (+ 10 @LEVEL) (count (:visited @PLAYER))))
          vtd (conj (:visited @PLAYER) @ROOM)]
    (swap! PLAYER #(conj % {:level-points (+ (:level-points @PLAYER) points) 
      :visited vtd})))))



(rule game.data/scene [k] 
  {k (is* :intro)}
  (clear-cloned!)
  (clone! :iso-camera)
  (clone! :sun)
  (clone! :Plane)
  (parent! (the Plane) (the iso-camera)))

(rule game.data/scene [k]
  {k (is* :new-game)}
  (reset! SEED (rand))
  (reset! LEVEL 0)
  (reset! POINTS 0)
  (reset! PLAYER {
    :max-health 4
    :health 4
    :torches 4
    :visited #{}
    :level-points 0
    :torch 0})
  (game.data/scene :new-level)
  (game.data/scene :room [7 0 4]))

(rule game.data/scene [k]
  {k (is* :new-level)}
  (swap! POINTS #(+ % (:level-points @PLAYER)))
  (swap! LEVEL inc)
  (set! RenderSettings/ambientIntensity (float (max 0 (* (- 5.0 (* @LEVEL 0.3)) 0.1))))
  (draw-ui)
  (reset! DUNG (game.world/gen-dungeon (+ 10 @LEVEL)))
  (reset! ROOM [0 0])
  (swap! PLAYER #(conj % {:visited #{}})))

(rule game.data/scene [k loc]
  {k (is* :room)}
  (when-let [player (the entity)] (reset! _CACHE (data player)))
  (clear-cloned!)
  (clone! :game-camera)
  (clone! :underplane) 
  (game.world/build-room @ROOM)
  (game.world/build-floor @ROOM)
  (game.world/fill-room @ROOM)
  ((:make-player @FN) loc)
  (explore)
  (draw-ui)
  (build-map))

(rule game.data/scene [k] 
  {k (is* :death)}
  ;(clear-cloned!)
  (clone! :corpse (->v3 (the entity)))
  (mapv destroy! [(the entity)(the game-camera)])
  (clone! :death-camera)
  (vec (for [i (range 70)]
    (local-scale! (clone! :column (rand-vec [-30 30] [-70  -10] [-30 30])) [1 1 10])))
  ((tween.core/position (->v3 5 -7 0) {:out :pow2} 12.0 :+ (fn [_] (game.data/scene :new-game))) (the death-camera)))

(swap! FN #(conj % {:scene game.data/scene}))
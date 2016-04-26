(ns game.core
  (:import [UnityEngine RenderSettings])
	(:require arcadia.core)
	(:use 
		hard.core
    pdf.core
    game.data
    game.scene
    game.world
    game.play
    game.player
    hard.sound))

(add-watch PLAYER :ui-watcher
  (fn [k a old new]
    (if (or (not= (:health old) (:health new))
            (not= (:torches old) (:torches new)))
      (draw-ui))))

(defn start-game [_]
  (hard.sound/setup!)
  (game.data/scene :new-game))

;(game.data/scene :death)
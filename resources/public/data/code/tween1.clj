(ns test.core
  (:require [tween.core :as tween]))

;construct with target value and
(def my-move (tween/position (Vector3. -4 0 0) 2.5 :+))

;invoke
(my-move (GameObject.))
(map my-move gobs)

;semi associative
(def z (tween/euler (Vector3. 45 0 100) 0.5))
(def y (assoc z :duration 1.2))
(= z y) ;false


;callbacks on game object
(def cb 
  (tween/position 
    (Vector3. 0 0 0) 0.5 
    (fn [go] (log (str "done")))))

;tween callbacks
(def b (tween/position (Vector3. 0 0 0) 0.5))
(def a (tween/position (Vector3. 0 -2 0) 0.5 b))

;mutation for cyclical refs
(link! a b a) ;a - b - a - CYCLE
(link! b z y) ;     \  z - y


;constructor macro
(deftween text-color [^Color value ^Color target]
  (-add [a b] (Color/op_Addition a b))
  (-get [this] (.color (.GetComponent this "TextMesh")))
  (-value [this] (Color/Lerp (.value this) (.target this) (.ratio this))))
## other

	'[assoc returns new tween]

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
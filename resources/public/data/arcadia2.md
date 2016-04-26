# first day

## positioning cubes

	(defn train [parent]
	  "sweeps the contents of the parent and records state patterns"
	  (reset! DB {})
	  (let [gobs (child-links parent)
	    locs (mapv #(symbolize % DB) gobs)
	    searched (atom #{})
	    cursor (rand-nth locs)]
	    (goto start cursor [] searched D)))

> capsule named markov would walk around placing blocks

	(defn perform [parent]
	  "create a pattern based on your training"
	  (reset! DB {}) (destroy! "trash")
	  (let [trash (or (find-name "Trash") (GameObject. "trash"))
	    markov (or (find-name "Markov") (clone! (resource "Markov")))
	    gobs (child-links parent)
	    locs (mapv #(symbolize % DB) gobs)
	    cursor (rand-nth locs)]
	    (position! markov [(rand 10) 1.5 (rand 10)])
	    (stroll markov (mapv float cursor)
	      (fn [e] (think cursor [] (atom #{}) D)))))
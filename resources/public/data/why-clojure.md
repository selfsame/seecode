# clojure is creative

______

## rich core library 

## functional composition

-------

	(swap! VIEW (comp vec flatten (juxt rest first)))
	(partition 3 (take 9 (cycle ["," "and"])))

 -------

	(interpose 'and
	  ((juxt (comp reverse take) drop) 2	
	  '[Fish Chips Vinegar]))

	((Chips Fish) and (Vinegar))



______

# data creation

# macros

______


> no junk syntax, paredit/parinfer 

	(when (< (count (every apple)) 5)
	  (place-apple 
	    (v+ (->v3 (rand-nth (every block)))
	        (->v3 0 1 0))))

_______  
  
	;TODO reagent style    
	'((/) rewrite css with ratoms)
	  '((/) std interface styles)
	  '((x) thi.ng/color #{:background :forground :active} 
	        reacted into UI variations)
	  '(( ) #{:alpha :contrast :saturation :layout-spacing})





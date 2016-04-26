
> `tween.core/deftween` macro defs a `fn` that configure a `fn` that takes a `GameObejct` and installs a `component`

	(require '[tween.core :as tween])

	(tween.core/deftween text-color [^Color value ^Color target]
	  (-add [a b] (Color/op_Addition a b))
	  (-get [this] (.color (.GetComponent this "TextMesh")))
	  (-value [this] (Color/Lerp (.value this) (.target this) (.ratio this))))

	(def greenify (tween/text-color (Color. 0 1 0 1) 2.5 :pow2))

	(greenify (object-named "new game"))








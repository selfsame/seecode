(ns show.off
  (:use 
    [arcadia.core]
    [hard.core]
    [hard.tween]
    [pdf.core]
    [cljs.pprint :only [pprint]]))

;rainbow
((((((((((((()))))))))))))

;TODO something
(map 
  (comp 
    #(re-find #"rgb$\(" (str %))
    #(* % %) 
  (get {:foo.core/thing [1 2/7 3 4.6]} ::thing)))

(defn ^:private sub-int [n & more] 
  "[int & more]
   converts integers into strings using
   uicode subscript characters"
  (symbol (apply str 
    (concat 
      #_(if (neg? n) ['₋] []) 
      (mapv (comp #(get subscript % '?) int str) 
      (seq (str (int n))))))))

(defmacro sub-list [s] 
  `(symbol ~(apply str (concat ['₍] [s] ['₎]))))

;literals
12 2.9 3/6 0xBADA55 9r8012 07123 -1.2e-5 4.2M 18N 
:keyword ::qualified :foo.core/resolved \c "hello \"world\""  #"rgb$[\(]" 
#<GameObject Foo (UnityEngine.GameObject)>

(->>  (-> @(:state data/app)
        :interface :left :width)
      (filter #(<= 2 % 8))
      (reduce +))

(def subscript {0 '₀ 1 '₁ 2 '₂ 3 '₃ 4 '₄ 5 '₅ 6 '₆ 7 '₇ 8 '₈ 9 '₉})

(mapv + [1 2 3]
  (reverse (range 10))
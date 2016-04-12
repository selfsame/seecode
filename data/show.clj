(ns show.off
  (:use 
    [arcadia.core]
    [pdf.core]
    [cljs.pprint :only [pprint]]))

;TODO fix
(map 
  (comp ;ridic
    #(re-find #"rgb$\(" (str %))
    #(* % %) 
  (get {:foo.core/thing [1 2/7 3 4.6]}
    ::thing)))

(def subscript 
  {0 '₀ 1 '₁ 2 '₂ 3 '₃ 4 '₄ 5 '₅ 6 '₆ 7 '₇ 8 '₈ 9 '₉ '+ '₊ '- '₋ '= '₌ :open '₍ :close '₎ })

(defn sub-int [n] 
  (symbol (apply str 
    (concat 
      (if (neg? n) ['₋] []) 
      (mapv (comp 
        #(get subscript % '?) 
        int 
        str) 
      (seq (str (int n))))))))

(defn sub-list [s] 
  (symbol (apply str (concat ['₍] [s] ['₎]))))

;literals
12 2.9 3/6 0xBADA55 9r8012 07123 -1.2e-5 4.2M 18N 
:keyword ::qualified :foo.core/resolved
"hello \"world\""  #"rgb$[\(]" 
#<GameObject Foo (UnityEngine.GameObject)>
{0 '₀ 1 '₁ 2 '₂ 3 '₃ 4 '₄}
(ns learnnext.core
  (:require
    [om.next :as om :refer-macros [defui]]
    [om.next.protocols :as p]
    [om.dom :as dom]
    [pdf.core :refer [and* or* not*] :refer-macros [defpdf pdf]]
    [heh.core :as heh :refer-macros [html]]
    [dollar.bill :as $ :refer [$]]
    [learnnext.data :as data])

  (:use [cljs.pprint :only [pprint]])) (foo) sdf 

lsdfk.cheese/*foo*
   cat
foo
foo.core/*baz*
 '[foo `(bar )]asdf [foo ]
*foo*
*
@(enable-console-print!)
 thing.core/asdlfkj
($/append ($ "head") 
  ($ "<style>#chart{font-size:.7em; font-family:courier;} 
      .column{display:inline-block; width:150px; border-right:1px solid black; padding:.2em .5em; border-bottom:1px dotted silver;}</style>"))
@sdgf '(@( 'foo)) asfg sdf dfg

'(ts.core/foo (:sldjf 37 )) asdf

@( '( @(+ 1 '(* 3 1) ) ))


(ns rainbow.sexpress)
(quote 
  ((((((((((((((((()))))))))))))))))
  {{{{{{{{{{{}}}}}}}}}}}
  [[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]
  ({[({[({[({[({[({})]})]})]})]})]}))

fo.bazo/core

(def app-state (atom {
  :app/title "Main Sequence Stars"
  :stars (into {} 
    (map 
      (fn [[class rgb]] {class {:color/rgb rgb}})
    data/stellar-colors))}))
  
(def stars? #{:stars})
(def rgb? #(re-find #"rgb$" (str %)))

(comment foo (sdlfkj))


(defn read [data k] ;hello world
  (if-let [#_ foo local (get (:state data) k) ]
    (comment {:value local})
    {:value :not-found}))
*fart* 
@atom 
(defpdf read)
*fart*
(pdf read [data k]
  (get @(:state data) k :not-found ) )

(pdf read [data k _]
  (get @(:state data) k :not-found))

(pdf read [data k props]
  {props (and* :start :end)}
     (let [local (get  @(:state data) k)
        {:keys [start end]} props]
    {:value (take (- end start) (drop start local))}))

(pdf read [data k _]
  {k #{:app/title}}
  {:value (reverse (get @(:state data) k))})


(defn mutate [_ _ _] {})


(defui Star
  static om/IQuery
  (query [this] '[:class :color/rgb :color/hex])
  Object
  (render [this]
    (let [props (om/props this)]
      (html
        (<div.star 
          (<span.class.column (:class props))
          (<span.rgb.column 
            (style {:background (:color/hex props)})
            (str "rgb" (into '() (:color/rgb props))))
          (<span.class.column 
            (style {:background (:color/hex props)})
            (:color/hex props)) )))))
[[[[[[[]]]]]]]

;TODO
; [x] #_ ignore pair
; [x] fix newlines breaking basic forms
; [x] hashmap capture
;     [ ] sexpr pairs
; [x] special form scoping
; [x] illegalize nested lambdas, naked lambda args
; [x] scope for clojure.core fns


;rainbows
(quote 
  ((((((((((((((((()))))))))))))))))
  {{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}
  [[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]
  ({[({[({[({[({[({})]})]})]})]})]}))

;symbols
methods userland foo.core/qualified

;literals
12 2.9 3/6 0xBADA55 9r8012 07123 -1.2e-5 4.2M 18N 
:keyword ::qualified :foo.core/resolved
"hello \"world\""  #"rgb$[\(]" 
#<GameObject Foo (UnityEngine.GameObject)>
{0 '₀ 1 '₁ 2 '₂ 3 '₃ 4 '₄}

;specials
@(atomic) @foo
#(re-find #"rgb$\(" (str %3))

'(reader [quoted @(form) `(~@[1 2 3])])

;macro-specials
(defmacro fun [sym args & code] 
  `(do #_'(prn ~[sym args]) 
      '~@[sym args]
       (comment (def ~'foo 7))
       (def ~sym [~'a b] 
          ~@code)))

;TODO illegalize
[foo/ /baz %1 ::foo.bar/quaz .67 #(#()) {1 2 3}]

;TODO legalize
[:./d :. :./. ]

;TODO scope
[clojure.pprint/*thing* #'foo foo#
 #?(:cljs reader-conditional) ^{:meta 'form }]


(map 
  (comp ;ridic
    #(re-find (str %)) 
    #(* % %))
  (get {:foo.core/thing [1 2/7 3 4.6]}
    ::thing))

;TODO fix
(map 
  (comp ;ridic
  #(re-find 
    #_ #"rgb$\("
   (str %) 
      #(* % %)) 
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

(defn baz [a b c]
  #_(map 
    (comp ;ridic
      #(re-find #"rgb$\(" (str %))
      #(* % %)) 
    (get {:foo.core/thing [1 2/7 3 4.6]}
      ::thing)))

clojure.string/lowercase

(comment) 
#_  asdf adf 

gii
#_ (defui Widget
  static om/IQueryParams
  (params [this]
    {:start 0 :end 5})
  static om/IQuery
  (query [this] '[:app/title (:stars {:start ?start :end ?end})])
  Object
  (render [this]
    (comment )(let [props (om/props this)
          stars (:stars props)]
      (html
        (<h1#title (:app/title props) ) (<hr)
        (map 
          (fn [[k v]]
            (<label (clj->js k) 
            (<input 
              (value (str v))
              (onChange (fn [e] 
                (om/set-params! this 
                  (conj (om/params this) 
                    {k (int (.. e -target -value))}))
                (prn (om/params this)))))))
          (om/params this))
        (<div#chart
          (map #(<span.column %) (clj->js (keys (last (last stars)))))
          (map #(star (assoc (last %) :om-index (gensym))) stars)))))) 
  
 
 

(def reconciler (om/reconciler {:state app-state :parser (om/parser {:read read :mutate mutate})}))

(om/add-root! reconciler Widget (first ($ "#app")))
 
 (ns pdfn.core 
  (:require [clojure.walk :as walk]))

(def ^:private DISPATCHMAP (atom {}))
(def ^:private METAMAP (atom {}))
(def ^:private argsyms (mapv (comp symbol str) "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOZ"))

(def and* every-pred)
(def not* (fn [& args] (complement (apply and* args))))
(def or* (fn [& args] (fn [v] (not (empty? (filter #(% v) args))))))
(defn is* [v] #(= v %))

(defn- opt [sym kw] (get (meta sym) kw (get-in @METAMAP [sym kw])))

(def ^:private HOST (atom {
  :clj {:re-def-sym 'def :qualify-here (fn [usym env] (symbol (str (.name *ns*) '/ usym)))}
  :cljs {:re-def-sym 'set! :qualify-here (fn [usym env] (symbol (str (:name (:ns env)) '/ usym)))}}))

(defn- hosted [kw env] (get-in @HOST [(if (boolean (:ns env)) :cljs :clj) kw]))

(defn- grid-get [col & more] (get-in col (vec (cons :cols more))))

(defn- make-grid [data]
  (let [[ks vs cnt] ((juxt keys vals (comp count ffirst)) (reverse data))]
    {:leafs (vec vs)
     :args (take cnt argsyms)
     :cols (mapv #(conj (mapv (fn [c] (get c %)) ks) (get argsyms %)) 
                  (range cnt))}))

(defn- score [col]
  (let [head (first col)   
        colp (remove nil? (butlast col))]
    (if-not head 0                                                    ;constructor-prefix (Q)
      (- (* 10 (- (dec (get (frequencies colp) head)) (count colp)))  ;small-branching (B)
         (count (take-while (not* nil?) col))))))

(defn- sort-grid [grid f] (assoc grid :cols (vec (sort-by f (:cols grid)))))

(defn- update-idxs [col idxs f] (reduce #(update-in %1 [%2] f) col idxs))

(defn- duplicate-idxs [col]
  (let [res (remove nil? (map-indexed #(if (= %2 (first col)) %1 nil) col))] 
    (if (empty? res) nil res)))

(defn- drop-idxs [col idxs]
  (vec (remove #{::drop} (map-indexed #(if ((set idxs) %1) ::drop %2) col))))

(defn- grid-drop-idxs [g idxs]
  (-> g (assoc :leafs (drop-idxs (:leafs g) idxs))
        (assoc :cols (mapv #(drop-idxs % idxs) (:cols g)))))
 
(defn- grid->ast [-g]
  (if (empty? (butlast (grid-get -g 0))) ::nf
    (let [g (sort-grid -g score)
          -leaf (get (:leafs g) 0)
          leaf (if (#{::body} (first -leaf)) 
                   (vec (cons (last -leaf) (:args g)))
                   (if (empty? (rest -leaf))
                       (list (first -leaf))
                       (cons 'do -leaf)))
          dups (duplicate-idxs (grid-get g 0))]
      (cond (nil? (grid-get g 0 0)) leaf
            (empty? (rest dups))
            (let [conds (take-while #(not (nil? (first %))) 
                                     (map (comp seq (juxt first last)) (:cols g)))
                  fconds (if (= 1 (count conds)) (first conds) (cons 'and conds))]
              (if (empty? conds) leaf
                  ['if fconds leaf (grid->ast (grid-drop-idxs g [0]))]))
            :else ['if ((juxt (comp list first) last) (first (:cols g)))                       ;[(p?) b]
                       (grid->ast (update-in g [:cols 0] #(update-idxs % dups (fn [_] nil))))  ;success - rewrite p as nil
                       (grid->ast (grid-drop-idxs g dups))]))))                                ;failure - discard rows with p

(defn- ast->code [form] 
  (cond (vector? form) (seq (clojure.walk/walk ast->code identity (vec (remove #{::nf} form))))
        (list? form)   (first form) 
        :else form))

(defn- datatype? [v] (or (sequential? v) (set? v) (map? v)))

(defn- symbol-walk [form xform]
  (cond (symbol? form)   (get xform form form)
        (datatype? form) (clojure.walk/walk #(symbol-walk % xform) identity form)
        :else form))

(defn- user-meta [v env]
  (or (:tag v)
    (let [res (apply dissoc v [:file :line :column :end-line :end-column :source])]
      (get {[] nil [true] (ffirst res)} (mapv last res) res))))

(defn- before-last [col v] (if (first (rest col)) (flatten ((juxt butlast (fn [_] v) last) col)) (cons v col)))

(defn- pdfn-sort [m] (sort-by (comp :idx meta first) m))

(defmacro defpdfn [sym & more]
  (swap! DISPATCHMAP dissoc (symbol sym))
  (swap! METAMAP assoc (symbol sym) (meta sym)) 
 `(def ~sym nil))

(defmacro pdfn [sym & more] 
  `~(cons 'do (mapcat (fn [[args & more]]
    (let [[args variadic] (mapv vec ((juxt remove filter) (is* '&) args))
          inline      (opt sym :inline)
          build-code  (if (opt sym :defer-compile) 'true (list 'pdfn.core/compile! sym))
          [spec code] (if (and (map? (first more)) (not (empty? (rest more))))
                          [(first more)(rest more)] 
                          [{} more])  
          -preds      (mapv #(user-meta (meta %) &env) args)
          unmeta-args (mapv #(with-meta % nil) args)
          preds       (mapv #(or %1 %2) (map #(get spec % nil) args) -preds)
          usym        (symbol (str sym (count args) '_ (hash `(quote ~preds))))
          stack       (or (get-in @DISPATCHMAP [sym (count args)]) {})
          method-idx  (cond-> (count stack) (contains? stack preds) inc)]
    (swap! DISPATCHMAP update-in [sym (count args)] merge 
      {(with-meta preds {:idx method-idx :variadic (first variadic)}) 
       (if-not inline [::body usym] (symbol-walk code (zipmap unmeta-args argsyms)))})
    (if inline 
      `(~build-code)
      `((~'declare ~usym)
        [~(before-last [:a] :&)]
        (~(hosted :re-def-sym &env) ~usym (~'fn ~unmeta-args ~@code))
           ~build-code))))
    (if (list? (first more)) more (list more)))))

(defmacro compile! [sym]
  (let [variants   (get @DISPATCHMAP sym)
        stub-arity (if (opt sym :stub-arity) (inc (apply max (keys variants))) 0)
        variants   (sort (conj (zipmap (range stub-arity) (repeat ::stub)) variants))]
  `(~(hosted :re-def-sym &env) ~sym 
    ~(cons 'fn 
      (map-indexed
        (fn [idx [cnt data]]
          (concat 
            [(vec (cond-> (take cnt argsyms)
                          (or (= (inc idx) stub-arity)
                              (and (not= ::stub data)
                                   ((comp :variadic meta ffirst) data))) (before-last '&)))] 
            (if-not (= ::stub data)
              [(ast->code (grid->ast (make-grid (pdfn-sort data))))]))) 
        variants)))))

(defmacro benchmark [n & code] `(time (dotimes [i# ~n] ~@code)))

(defmacro ppexpand [code] `(~'pprint/write (macroexpand-1 (quote ~code)) :dispatch ~'pprint/code-dispatch))

(defmacro inspect [sym & k]
  (case (first k) 
    :methods `(ppexpand ~(into {} (map (fn [v] (update-in v [1] #(into [] (pdfn-sort %))))) (get @DISPATCHMAP sym)))
    :ast     `(ppexpand ~(map (comp grid->ast make-grid) (vals (get @DISPATCHMAP sym))) )
             `(ppexpand (pdfn.core/compile! ~sym))))
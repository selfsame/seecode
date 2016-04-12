(ns dollar.bill
  (:refer-clojure :exclude [find]))
 
(defn- el? [o] (instance? js/Element o))
(defn- doc? [o] (.-querySelectorAll o))
(defn- ar? [o] (instance? js/Array o))
(defn- aseq [b] (if (or (sequential? b) (ar? b)) b (list b)))
(defn as-array [a] (.call (.. js/Array -prototype -slice) a))

(defn- >dom [s]
  (let [d (.createElement js/document "div")]
    (set! (.-innerHTML d) s)
    (as-array (.-children d))))
 
(defn $ [q] 
  (if (re-find #"^\W*<" q)
      (>dom q)
      (as-array (.querySelectorAll js/document q))))

(defn- op 
  ([f f2 a]
    (cond 
      (el? a) (f2 a) 
      (seq? a) (flatten (map #(f %) a))
      (vector? a) (vec (flatten (map #(f %) a)))
      (ar? a) (.map a #(f %))))
  ([f f2 a b]
    (cond 
      (el? a) 
      (cond 
        (seq? b) (map #(f2 a %) b)
        (vector? b) (mapv #(f2 a %) b)
        (ar? b) (.apply (.-concat (array)) (array) (.map b #(f2 a %)))
        :else (f2 a b))
      (seq? a) (flatten (map #(f % b) a))
      (vector? a) (mapv (flatten #(f % b)) a)
      (ar? a) (.apply (.-concat (array)) (array) (.map a #(f2 % b))))))
  
(defn html 
  ([a] (op html #(.-innerHTML %) a))
  ([a b] (op html #(when (el? %1) (set! (.-innerHTML %1) %2)) a b)))

(defn contents [a] (op contents #(.-contentDocument %) a))

(defn find [a b] (op contents #(when (.-querySelectorAll %1) 
  (as-array (.querySelectorAll %1 (str %2)))) (if (doc? a) #js [a] a) b))

(defn copy [a] (first (op copy #($ (.-outerHTML a)) a)))

(defn parent [a] (op parent #(.-parentElement %1) a))

(defn append [a b] (op append #(.appendChild %1 (copy %2)) a b))

(defn before [a b] (op before #(.insertBefore (parent %1) (copy %2) %1) a b))

(defn nxt [a] (op nxt #(.-nextSibling %) a))

(defn prv [a] (op prv #(.-previousSibling %) a))

(defn after [a b] 
  (op after #(if-let [n (nxt %1)] (before n %2) (append (parent %1) %2)) a b))

(defn prepend [a b] 
  (op prepend #(.insertBefore %1 (copy %2) (.-firstChild %1)) a b))

(defn detach [a] (op detach #(.removeChild (parent %) %) a))

(defn wrap [a b] (op wrap #(.replaceChild (parent %1) (parent (append (copy %2) %1)) %1) a b)) 









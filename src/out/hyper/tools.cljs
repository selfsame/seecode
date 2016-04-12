(ns ^:figwheel-always hyper.tools)

'(predicates)

(defn _count [v]
  (if (array? v) (.-length v)
      (try (count v) (catch js/Error e 0))))

(defn solo?     [col] (= 1 (_count col)))
(defn duo?      [col] (= 2 (_count col)))
(defn triplet?  [col] (= 3 (_count col)))
(defn quartet?  [col] (= 4 (_count col)))
(defn quintet?  [col] (= 5 (_count col)))
(defn multiple? [col] (< 1 (_count col)))

'(composition)

(def  <* comp)
(defn into* [col & more] (into col (apply juxt more)))
(def  and* every-pred)
(def  not* (fn [& args] (complement (apply and* args))))
(def  or* (fn [& args] (fn [v] (not (empty? (filter #(% v) args))))))
(defn is* [v] #(= v %))

'(data tricks)

'maps

(defn combine [& maps] (apply merge-with combine maps))

(defn map-by [k col] (into {} (map (juxt k identity) col)))

(defn dissoc-in [m [k & ks]]
  (when m
    (if-let [res (and ks (dissoc-in (m k) ks))]
      (assoc m k res)
      (let [res (dissoc m k)]
        (when-not (empty? res) res)))))

(defn dissoc-all [d col-ks] (reduce dissoc-in d col-ks))

(defn dissoc-keys [d ks] (reduce dissoc d ks))

 'vectors

(defn insert [vc idx & more]
  (let [p (subvec vc 0 idx)
        n (subvec vc idx (count vc))]
    (vec (concat p more n))))

(defn slice
  ([a b] (subvec a 0 b))
  ([a b c] (vec (concat (subvec a 0 b) (subvec a c (count a))))))

(defn vec-dissoc [col & idxs]
  (vec (for [i (range (count col)) :when (not ((set idxs) i))] (get col i))))

(defn valid-idx [col n] (min (max 0 n) (dec (count col))))

;shifts value at idx with offset
(defn vec-move [col idx offset]
  (let [res (vec-dissoc col idx)
        target (valid-idx col (+ idx offset))]
    (vec (concat (subvec res 0 target) [(get col idx)] (subvec res target (count res))))))


'(iteration)

(defn indexed-iterate [col f]
  (let [c (count col)]
    (loop [i 0]
      (when (< i c)
        (f i (aget col i))
        (recur (inc i))))))


'(fancy)

(defn format-bytes [n]
  (let [ns (str n)
        ord (.ceil js/Math (/ (count ns) 3))
        res (* n (get {1 1 2 .001 3 .000001 4 .000000001 5 .000000000001} ord))
        suff (get {1 "b" 2 "Kb" 3 "Mb" 4 "gb" 5 "tb"} ord)]
    (str (/ (int (* res 10)) 10) "" suff)))

(ns onlyone.common
   (:use [clojure.set :only [union difference intersection]])
  (:require [clojure.string :as string]))

(def UID (atom -1))
(defn GET-UID []
  (swap! UID inc))



(defn rand-range
  ([ub] (int (rand (inc ub))) )
  ([lb ub] (int (+ lb (rand (- (inc ub) lb)))) ))


(defn half [n]
  (int (/ n 2)))

(defn to-tile [n]
  (int (/ n 16)))
(defn from-tile [n]
  (int (* n 16)))

(defn clog [thing]
  (.log js/console thing ))

(defn atom? [x] (= (type x)(type (atom []))))


(defn state [n k]
  (when (and (:state n)(atom? (:state n)) )
  (get @(:state n) k)))

(defn set-state [t k v]
  (if (:state t)
    (do (swap! (:state t) assoc-in  [k] v))))

(defn update-state [t k f]
  (if (:state t)
    (do (swap! (:state t) update-in  [k] f))))

(defn X [thing]
  (or (state thing :x)
      (get thing :x)
      (if (and (vector? thing)
        (> (count thing) 1)
        (number? (first thing))
        (number? (first (rest thing))) ) (first thing) )))

(defn uid-map [col]
  (into {} (map (fn [v] {(:uid v) v}) col)))



(defn Y [thing]
  (or (state thing :y)
      (get thing :y)
      (if (and (vector? thing)
        (> (count thing) 1)
        (number? (first thing))
        (number? (first (rest thing))) ) (last thing) )))

(defn x-y-apply [op & more]
  (reduce (fn[a b] {:x (op (X a) (X b)) :y (op (Y a) (Y b))}) more))

(defn v+
  ([v] v)
  ([v & more] (apply x-y-apply (concat [+ v] more))))

(defn v-
  ([v] v)
  ([v & more] (apply x-y-apply (concat [- v] more))))

(defn v*
  ([v] v)
  ([v & more] (apply x-y-apply (concat [* v] more))))

(defn vdiv
  ([v] v)
  ([v & more] (apply x-y-apply (concat [/ v] more))))



(defn pprint [thing &[ind]]
  (let [indent (or ind "")]
  (cond
    (map? thing)
    (str "{"  (string/join (str "\n" indent " ") (map (fn[p] (str (key p) "  " (pprint (val p) (str indent "  "))) ) thing) )"}")
    (vector? thing) (str "[" (string/join (str "\n" indent " ") (map (fn[a] (pprint a (str indent "  "))) thing) )"]")
   (fn? thing) :function
    (atom? thing) (pprint @thing (str indent "  "))
    :else thing)))

(defn ppprint [thing &[ind]]
  (let [indent (or ind "")]
  (cond
    (map? thing)
    (str "<div class='left'>{"  (string/join (str "\n") (map (fn[p] (str (key p) "  " (ppprint (val p))) ) thing) ) "}</div>")
    (vector? thing) (str "[" (string/join (str ",") (map (fn[a] (ppprint a )) thing) )"]")
   (fn? thing) :function
    (atom? thing) (ppprint @thing)
    :else thing)))



(defn ^:private quick-rect-vect [thing kvec]
  (when (map? thing)
    (let [mutable (or (:rect thing) (:state thing))]
    (let [return (if (and mutable
                          (atom? mutable))
                   (mapv #(float (% @mutable)) kvec)
                   (mapv #(float (% thing)) kvec))]
      (if (= (count return) 1) (first return) return )))))

(defn x- [r] (quick-rect-vect r [:x]))
(defn y- [r] (quick-rect-vect r [:y]))
(defn w- [r] (quick-rect-vect r [:w]))
(defn h- [r] (quick-rect-vect r [:h]))
(defn xy- [r] (quick-rect-vect r [:x :y]))
(defn wh- [r] (quick-rect-vect r [:w :h]))
(defn xywh- [r] (quick-rect-vect r [:x :y :w :h]))


(defn to-grid [from to v]
  (cond (number? v) (int (/ (* v from) to))
        (vector? v) (mapv #(to-grid from to %) v)
        (sequential? v) (map #(to-grid from to %) v)
        (map? v) (into {} (map (fn [[k vv]] {k (to-grid from to vv)})
                               (select-keys v [:x :y :w :h]) ))))



(defn xywh->buckets [[x y w h]]
  "all vec coords that are described by xywh"
  (let [xrange (if (= w 0) [x] (range x (+ x w)))
        yrange (if (= h 0) [y] (range y (+ y h)))]
 (vec
    (for [gx xrange
         gy yrange]
    [gx gy]))))

(defn xywh->neighbors [xywh]
  "all vec coords that surround the xywh"
  (let [[x y w h] (mapv + xywh [-1 -1 2 2])
        xrange (if (= w 0) [x] (range x (+ x w)))
        yrange (if (= h 0) [y] (range y (+ y h)))]
 (vec
    (for [gx xrange
         gy yrange
          :when (or (or (= gx x) (= gx (+ x w -1)))
                    (or (= gy y) (= gy (+ y h -1))))]
    [gx gy]))))

(xywh->neighbors [5 7 1 1])

(defn make-hash [size]
  {:size size
   :data (atom {})
   :membership (atom {})} )



(defn hash-store [thing H]
  (when (:uid thing)
  (let [members @(:membership H)
        data @(:data H)
        size (:size H)
        uid (:uid thing)
        [x y w h] [(X thing) (Y thing) 1 1]
        bucket (to-grid 1 size [x y])
        bucket-set (set (xywh->buckets (to-grid 1 size [x y w h])))
        member-record (or (get members uid) #{})]

      (when (not= member-record bucket-set)
        (let [diff-old (difference member-record bucket-set)
              diff-new (difference bucket-set member-record)]
          (do
            (dorun (for [new-bucket diff-new]
              (if (nil? (get data bucket))
                ;add the bucket key with uid set
                (swap! (:data H) conj {new-bucket (atom #{uid})})
                ;otherwise just add to existant atomic bucket
                (swap! (get data new-bucket) conj uid))))
            (dorun (for [old-bucket diff-old]
              (do (swap! (get data old-bucket) disj uid)
                (when (empty? @(get data old-bucket))
                  (swap! (:data H) dissoc old-bucket)))))
            (swap! (:membership H) conj {uid bucket-set} )))))))



(defn hash-remove [thing H]
    (let [uid (or (:uid thing) thing)
          members @(:membership H)
          data @(:data H)
          member-record (get members uid)]
      (when member-record
        (do
          (swap! (get data member-record) disj uid)
          (when (empty? @(get data member-record))
            (swap! (:data H) dissoc member-record))
          (swap! (:membership H) dissoc uid)))))


(defn abs [n]
  (when (number? n)
    (if (pos? n) n (* n -1))))


(defn angle->radians [n]
  (* n (/ (aget js/Math "PI") 180)))

(defn radians->angle [n]
  (* n (/ 180 (aget js/Math "PI") )))


(defn note-hash [e hashmaps]
  (when (:uid e)
    (dorun (for [h (vals hashmaps)]
             (hash-store e h)))))



(defn entities-in-around [sizek posv hashmaps]
  (when-let [H (get hashmaps sizek)]
    (let [buckets (conj (xywh->neighbors (concat posv [1 1])) posv)
          results (apply concat
                          (mapv (fn [b]
                                  (let [res (get @(:data H) b) ]
                                    (if res @res #{})))
                                buckets))]
      (when results
        results))))

(defn to-string [k]
  (apply str (rest (str k) )) )

(defn ks->colorspan [ks colormap]
  (mapv
   (fn [k]
    (str "<span style='color:" (get colormap k) ";'>"
         (to-string k)
         "</span>" ))
   ks))

(defn degrees-between [one two]
  (let [[x y] (mapv - two one)]
    (radians->angle (.atan2 js/Math x y))))

(ns onlyone.macro)

"defmapstack creates functions that take a map as first argument which is merged
with any maps in the body and returned.

Why? Because I want to thread a data map through a rather linear chain of functions to alter
various parts of the data without having to de/re structure the map inside of every function


"


(defn ^:private meta-f [pre nex]
  (let [mf (:fn (meta nex))
        f (cond mf mf
                (and (map? pre) (map? nex)) merge
                (and (sequential? pre) (sequential? nex)) concat
                (sequential? pre) conj
                (and (number? pre) (number? nex)) #(identity nex)
                :else #(identity nex)
                )]

    (f pre nex)))

(defmacro defmapstack
 "Map in, map out.  The first arg is the map"
 [title args & body]
  `(defn ~title
  ~args
  (apply merge-with meta-f
         (concat [~(first args)]

               [~@body]  ))))

(defmacro also
  "merge with concat the body to the stack's k val"
 [k & body]
   `{~k ~@body})

(defmacro fresh
 "disregards previous k val for it's own body"
 [k & body]
  `{~k (with-meta ~@body {:fn (fn [_# k#] k#)})})

(defmacro funct [k f & body]
  `{~k (with-meta ~@body {:fn ~f})})

(defmacro filt
 "uses f to filter the stack val for k"
 [k f]
  `{~k (with-meta [] {:fn (fn [j# k#] (filter ~f j#))})})



(defn inside?
  [[x y w h] px py]
    (if (and (< x px (+ x w))
             (< y py (+ y h))) true false))

(defmapstack move [m x y]
  (also :e {:7 {:x -5 :y 5}})
  (also :g [99 -88 77])
  (funct :view #(mapv + %1 %2) [x y 0 0])
  )

(defmapstack draw [m]
  (filt :e #(inside? (:view m) (:x (last %)) (:y (last %)))))
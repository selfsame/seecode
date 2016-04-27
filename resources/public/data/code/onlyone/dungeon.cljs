(ns onlyone.dungeon
  (:require

       [clojure.string :as string])
 (:use [onlyone.data :only [DUNGEON item-data monster-data]]
       [onlyone.common :only [rand-range half to-tile from-tile UID GET-UID]]))

(defn abs
  ([n]
    (if (pos? n) n (- n)))
  ([n & more]
    (map abs (cons n more))))


(def ROOMS (atom {}))
(def RUID (atom -1))
(defn GET-RUID []
  (swap! RUID inc))


(declare set-grid-rect draw-line connect-divide new-rand-dungeon get-grid)


(defn make-grid [width height v]
  (vec (take height (repeatedly #(atom (vec (take width (repeat v))))))  ))



;(def DUNGEON (new-rand-dungeon 56 37))

;(def section {:width 56 :height 37 :left 0 :top 0})


(defn rand-mid [x]
  (let [fourth (int (/ x 3))] (rand-range (- fourth) fourth)))



(select-keys {:a 5 :c 8 :d 8} [:a :f])

(defn random-empties [dung n]
  (let [grid (:terrain dung)
        w (:width dung)
        h (:height dung)
        pluck (fn [] (let [x (rand-range 1 w)
                           y (rand-range 1 h)]
                   (if (= (get-grid grid x y) ".") [x y] nil)))]
   (take n (distinct (filter vector? (repeatedly pluck))))))





(defn make-monster [dung species x y]
  (let [uid (GET-UID)
        data (species monster-data)
        sleep (< .5 (rand ))
        monster {:species species
                 :uid uid
                 :state (atom {:uid uid :t 0
                               :x x :y y :dx (* x 32) :dy (* y 32)
                               :old-x nil :old-y nil
                               :health 100 :enemies {}
                               :idle true :speed (:speed data)
                               :sleeping sleep})}]
    (swap! (:entities dung) conj {uid monster})))


(defn make-item [dung typ x y]
  (let [uid (GET-UID)
        data (typ item-data)
        mat-idx (rand-int (count (:material data)))
        sprite (:sprite data)
        stats (select-keys data [:slot :DAM :AC :LB])
        boni (zipmap
              (set (take (rand-nth [0 0 0 0 0 0 1 1 1 1 2 2 3])
                   (repeatedly #(rand-nth (:boni data)))))
              (repeat true))
        item (conj {:type typ
                    :uid uid
              :material (get (:material data) mat-idx)
              :sprite [(+ mat-idx (first sprite)) (last sprite)]
              :state (atom {:x x :y y})} stats boni)]
    (swap! (:items dung) conj {uid item})))



(defn populate [dung]
  (dorun (for [pos (random-empties dung 20)]
    (let [species (keys monster-data)]
    (make-monster dung (rand-nth species) (first pos) (last pos)))))
 (dorun  (for [pos (random-empties dung 10)]
    (let [typ (rand-nth (keys item-data))]
    (make-item dung typ (first pos) (last pos))))))


(defn place-player [dung player]
  (let [pos (first (random-empties dung 1))]
    (swap! (:state player) conj {:x (first pos) :y (last pos)
                                 :dx (* (first pos) 32) :dy (* (last pos) 32)})
    (reset! (:player dung) player)))

(defn recurse-divide [dung section]
  (let [width (:width section)
        height (:height section)
        left (:left section)
        top  (:top section)
        axis (if (> width height) :h :v)
        parent (or (:uid section) (GET-RUID))
        v-mid (+ (int (/ height 2)) (rand-mid height) )
        h-mid (+ (int (/ width 2)) (rand-mid height) ) ]
    ;(if (and (> 12 width) (> 12 height) (> 7 (rand-range 0 10)) )
    ;  [(conj section {:final true})]
    (if (and (< 6 width) (< 6 height) (not (:final section)))
      (let [bro  (GET-RUID)
            sis  (GET-RUID)]
      (cond (= axis :v)
            (let [ s {:width width :height h-mid :left left :top top :parent parent :sibling bro :uid sis}
                   b {:width width :height (- height h-mid) :left left :top (+ top h-mid)  :parent parent :sibling bro :uid sis}]
              (connect-divide dung s b)
              [s b])
            (= axis :h)
            (let [s {:width v-mid :height height :left left :top top  :parent parent :sibling sis :uid bro}
                  b   {:width (- width v-mid) :height height  :left (+ left v-mid) :top top  :parent parent :sibling sis :uid bro}]
              (connect-divide dung s b)
              [s b])))
        ;else return the section as finalized
      [(conj section {:final true})]
      )))

(defn insert-room [dung section]
  (let [width (:width section)
        height (:height section)
        left (:left section)
        top  (:top section)
        r1 (rand-range 0 2) r2 (rand-range 0 2) r3 (rand-range 0 2) r4 (rand-range 0 2)]
        (when (> 8 (rand-range 0 10))
          (set-grid-rect (:terrain dung) (+ left r1) (+ top r2) (- width r3) (- height r4) "."))))

(defn connect-divide [dung section sibling]
  (let [width (:width section)
        height (:height section)
        left (:left section)
        top  (:top section)
        swidth (:width sibling)
        sheight (:height sibling)
        sleft (:left sibling)
        stop  (:top sibling)
        mid {:x (+ left (/ width 2)) :y (+ top (/ height 2))}
        smid {:x (+ sleft (/ swidth 2)) :y (+ stop (/ sheight 2))}]
        (draw-line dung (:x mid) (:y mid) (:x smid) (:y smid) ".")))

(defn subdivide [dung section]
  (let [f (fn[a] (recurse-divide dung a))
        subdivided (mapcat f
                   (mapcat f
                   (mapcat f
                   (mapcat f (mapcat f
                   (mapcat f (mapcat f
                   (mapcat f (mapcat f
                                   (recurse-divide dung section))))))))))]
    (map (fn[s] (insert-room dung s) ) subdivided)
    ))





(defn new-rand-dungeon [width height]
  (let [terrain (make-grid width height "#")
        dung {:terrain terrain
              :width width
              :height height
              :player (atom {})
              :entities (atom {})
              :items (atom {})}]
  ;(dorun (make-rooms dung))
   (dorun (subdivide dung {:width (dec width) :height (dec height) :left 1 :top 2 :uid (GET-RUID)}))
   (dorun (populate dung))
   dung))


(defn check-wall [dung x y]
  (let [grid (:terrain dung)
        tile (get-grid grid x y)]
    (cond (= tile "#") true
          :else false)
    ))

(defn within-grid [grid x y]
  (every? true? [(> y 0)(< y (count grid))
                 (> x 0)(< x (count @(first grid) ))]))

(defn get-grid [grid x y]
  (if (within-grid grid x y)
    (get @(get grid y) x)
    nil))

(defn set-grid [grid x y value]
  (if (within-grid grid x y)
    (let [row-atom (get grid y)]
      (reset! row-atom (assoc @row-atom x value))
      true)
    nil))


(defn get-local-tiles [x y]
  (let [grid (:terrain @DUNGEON)]

  (mapv
   (fn [pair] (let [xx (first pair) yy (last pair)]  (or (get-grid grid (+ x xx) (+ y yy)) "#") ))

   [[-1 -1][0 -1][1 -1]
    [-1  0][0  0][1  0]
    [-1  1][0  1][1  1]])))

(defn set-grid-rect [grid x y w h value]
  (if (and (within-grid grid x y)
           (within-grid grid (+ x w) (+ y h)))
    (dorun (for [iy (range y (+ y h))]
          (let [row-atom (get grid iy)
                before (subvec @row-atom 0 x)
                after (subvec @row-atom (+ x w) (count @row-atom))
                fill (take w (repeat value))]
         (reset! row-atom (vec (concat before fill after))))))
    nil))


(defn draw-line [dung x1 y1 x2 y2 value]
  (let [grid (:terrain dung)
        dist-x (abs (- x1 x2))
        dist-y (abs (- y1 y2))
        steep (> dist-y dist-x)]
    (let [[x1 y1 x2 y2] (if steep [y1 x1 y2 x2] [x1 y1 x2 y2])]
      (let [[x1 y1 x2 y2] (if (> x1 x2) [x2 y2 x1 y1] [x1 y1 x2 y2])]
        (let  [delta-x (- x2 x1)
               delta-y (abs (- y1 y2))
               y-step (if (< y1 y2) 1 -1)]

    (let [plot (if steep
       #(set-grid grid (int %2) (int %1) value)
       #(set-grid grid (int %1) (int %2) value)) ]

      (loop [x x1 y y1 error (int (max delta-x 2)) ]
        (plot x y)
        (if (< x x2)
    ; Rather then rebind error, test that it is less than delta-y rather than zero
    (if (< error delta-y)
      (recur (inc x) (+ y y-step) (+ error (- delta-x delta-y)))
      (recur (inc x) y            (- error delta-y)))))))))))














(ns onlyone.tween
  (:require [domina :as dom]
            [onlyone.canvas :as canvas])
  (:use [onlyone.common :only [clog angle->radians v+ v- v* vdiv X Y half  rand-range half
                               to-tile from-tile clog state set-state update-state ppprint]]))



(def TWEENS (atom {}))
(def TUID (atom 0))

(def LAST-DELTA (atom 0))

(def NT (atom []))

(defn tween-to
  ([now entity k target duration opts]
   (tween-to now entity {k target} duration opts))
  ([now entity kv duration opts]
          (conj
            {:uid (:uid entity)
             :props kv
             :given (select-keys @(:state entity) (keys kv))
             :duration duration
             :start now} opts)))


(defn interpolate [k value target ratio]
  "returns [key, interpolated value]"
  (let [span (- target value)]
    [k (+ value (* span ratio))]))

(defn cap-ratio [n]
  (if (> n 1.0) 1.0 n))

(defn apply-tween [now entity tween]
  "return a vect of the entity with tweened props applied and the tween or nil if it's finished"
  (let [{:keys [props duration given start]} tween
        pks (keys props)
        delta (- now start)
        ratio (cap-ratio (/ (- duration (- duration delta)) duration))
        i-props (into {} (map #(interpolate % (% given) (% props) ratio) pks))]

    (into {} (map #(interpolate % (% given) (% props) ratio) pks))

    (swap! (:state entity) conj i-props)
    [entity (if (< delta duration) tween nil)]))


;; (def tes {:1 {:uid :1 :state (atom {:x 0})}
;;            :2 {:uid :2 :state (atom {:x -9 :y 100})}})


;; (tween-to (:1 tes) {:x 50} 100 {})

;; (apply-tween 120 (:1 tes) (:1 @NT))

;; (tween-to (:2 tes) {:x -5 :y 20} 10 {})
;; (apply-tween 5 (:2 tes) (:2 @NT))





(defn add [state prop value duration & {:keys [flag flagval que override callback]
                                        :or   {flag false flagval true que false override false callback false}}]

  (let [
        package {[state prop] {:state state
                               :flag flag
                               :flagval flagval
                               :callback callback
                               :que que
                               :prop prop
                               :startval (prop @state)
                               :endval value
                               :duration duration
                               :timer duration}}]



  (if (nil? (get @TWEENS [state prop]))
    (swap! TWEENS conj package)
    (cond
     ;(que) ;(reset! chain '())
     ;    (do (clog "que should happen")(swap! TWEENS conj package))
     override (swap! TWEENS conj package)
     :else nil

      ))))



(defn update! [d]
  (let [delta (or (int (- d @LAST-DELTA)) 0)
        updated  (dorun (map
                 (fn[entry]
                     (let [uid (key entry)
                           tween (val entry)
                           timer (:timer tween)
                           duration (:duration tween)
                           ratio (/ (- duration timer) duration)
                           startval (:startval tween)
                           v-span  (- (:endval tween) startval)
                           new-val (+ startval (* v-span ratio))
                           -update (conj tween {:timer (- timer delta)})]
                         ;(clog (ppprint  new-val))

                         (if (< (- timer delta) 0)
                           (do
                             ;set any user flags for finished tween
                             (when (:flag tween)
                               (swap! (:state tween) conj {(:flag tween) (:flagval tween)}))
                             ;make sure we give the specified final value to the finished tween
                             (swap! (:state tween) assoc (:prop tween) (:endval tween))

                             (swap! TWEENS dissoc uid)
                             (when (:callback tween) ((:callback tween) (:state tween)) ))


                           (do  ;when still ticking down
                             (swap! (:state tween) assoc (:prop tween) new-val)
                             (swap! TWEENS conj {uid -update})))

                  ))  @TWEENS))]))



(def FX  (atom {}))

(def fx-sprites { :smoke [1 0] :ink [2 0] :sleep [3 0] :blood [4 0] :floor-blood [4 1]
                  :frost [3 1] :sparks [4 2] :noise [1 2] :exclamation [1 1]
                  :poison [2 2] :swoosh [2 3] :magic [3 2]
                 })

(defn new-fx
  ([tag opts]
   (let [effect {(swap! TUID inc)
                  {:sprite (tag fx-sprites)
                   :state (atom (conj {:x 0 :y 0 :w 32 :h 32 :life 800 :angle 0 :opacity 1.0} opts))} }]
  (swap! FX conj effect)
   (last (last effect)) ))
  ([tag x y]
     (new-fx tag {:x x :y y :angle 0}))
  ([tag x y angle]
   (new-fx tag {:x x :y y :angle 0})
  ))


(defn cull-old-fx []
  (into {} (take 500 (filter (fn[fx] (pos? (state (last fx) :life))) @FX))))

(count (vals @TWEENS))
(count (vals @FX))

(map #(:life @(:state %)) (vals @FX))

;(frequencies (map :sprite (vals @FX)))

(defn inside?
  [x y w h px py]
    (if (and (< x px (+ x w))
             (< y py (+ y h))) true false))


(defn pos-in-view? [x y]
  (let [scroll (domina/by-id "scroller")
        scrollx (aget scroll "offsetLeft")
        scrolly (aget scroll "offsetTop")
        vx (- scrollx)
        vy (- scrolly)]
            (inside? vx vy 900 600 x y)))


(defn update-fx [d]
   (swap! FX cull-old-fx)

  (let [delta (or (- d @LAST-DELTA) 2)
        ;scroll (domina/by-id "scroller")
        ;[vx vy vw vh] [(aget scroll "offsetLeft") (aget scroll "offsetTop") (- scrollx) (- scrolly)]
        ]

   (dorun (map (fn [effect] (let [dx (state effect :x)
                          dy (state effect :y)
                          rotation (angle->radians (state effect :angle))
                          sprite (:sprite effect)
                          sy (* (first sprite) 16)
                          sx (* (last sprite) 16)
                          [w h] [(state effect :w) (state effect :h)]
                          [ox oy] (mapv * [(half w)(half h)] [-1 -1])
                          alpha (state effect :opacity)]
           (update-state effect :life #(- % delta))
             (canvas/opacity alpha)
             (canvas/save)
             (canvas/translate dx dy)
             (canvas/rotate rotation)
             (canvas/draw-image (dom/by-id "tiles")
                                sx sy 16 16 ox oy w h)
             (canvas/restore)
                             ))    ; (filter (fn [e] (pos-in-view? (X e) (Y e)))
               (vals @FX)))
  (canvas/opacity 1.0)
  (reset! LAST-DELTA d)))





(defn fx-splat
  ([tag x y]
   (fx-splat tag x y 1000))
  ([tag x y duration]
   (when (pos-in-view? x y)
   (let [
         r1 (rand-range -30 30) r2 (rand-range -30 30) r4 (rand-int 360)
         r3 (rand-range -30 30)
         effect (new-fx tag {:x (+ x 16) :y (+ y 11) :angle r4 :life (* duration 1.5)} )]

            (add (:state effect) :y (+ (Y effect) r1) duration)
            (add (:state effect) :x (+ (X effect) r2) duration)
            (add (:state effect) :angle (+ r4 r3) duration)
             (add (:state effect) :opacity 0 (* duration 0.8))))))

(ns snake.core
  (:use 
    [arcadia.core] 
    [hard.core] 
    [hard.input]
    [hard.mesh]
    [hard.sound]
    [tween.core :as tween])
  (:import [UnityEngine Debug]))

(declare get-input make-level)


(def TIMER (atom 0))
(defonce A (atom {}))
(defonce B (atom {}))
(def APPLES (atom {}))
(defonce VIEW (atom ["view2" "view3" "view1"]))


(def MAP (atom [
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 1 1 1 0 0 0 0 0 0 1 0 0 0 0]
  [0 0 0 0 1 0 0 0 0 0 0 0 1 1 1 0 0 0]
  [0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0]
  [0 0 0 0 0 0 1 1 0 0 1 1 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 1 1 1 1 0 0 0 0 0 0 0]
  [0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0]
  [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0]
  [0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0]]))

(def STUFF (atom {}))

(defn tile->pos [x z] (->v3 [x 0 z]))

(defn pos->tile [pos] (let [[x y z] (->vec pos)] (mapv int [x z])))

(defn get-tile [o] 
  (let [v (->vec o)
        x (first v)
        z (last v)]
    (or (get-in @MAP [z x]) 1)))
 
(defn text [go]
  (if-let [T (.* go>TextMesh)] (.text T)))

(defn text! [go v]
  (if-let [T (.* go>TextMesh)] (set! (.text T) v)))

(defn wait [n & fns]
  (let [o (GameObject. "___")]
    ((tween/position (->v3 0) n 
      (fn [_] (destroy! o)
        (mapv #(%) fns))) o)))

(defn morph [ob target & opts]
  ((apply (partial tween/position (->v3 target) 0.5 :pow3) opts) ob)
  ((apply (partial tween/euler (rotation target) 0.5 :pow3) opts) ob))

(defn cc-tween [go]
  (let [[x y z] (->vec (->v3 go))
        start (tween/euler (->v3 0 0 0) {:delay (* x 0.2)})
        t1 (tween/euler (->v3 90 0 0) 0.6 :+ :pow2 {:delay 0.5})
        t2 (tween/euler (->v3 0 90 0) 0.6 :+ :pow2 {:delay 0.5})
        t3 (tween/euler (->v3 0 0 90) 0.6 :+ :pow2 {:delay 0.5})]
    (link! start t1)
    (link! t1 t2 t3 t1)
    (start go)))

(defn direction [k] (get {:u [0 1] :d [0 -1] :l [-1 0] :r [1 0]} k))

(defn snake-bones [snake]
  (reverse (child-named snake "back" "front")))

(defn make-snake [tag [x y z] dir path style]
  (let [me (clone! (resource "snake") [x y z])
        head (clone! (resource (str "head" style)))
        tail (clone! (resource (str "tail" style)))
        rigged (GameObject. "snakeA");(clone! (resource "snakeA") [x (+ y 0.22) z])
        offsets (cons [x z] (mapv direction path))
        parts 
        (for [i (range (count offsets))
          :let [[px pz] (reduce v+ (take (inc i) offsets))
                part (clone! (resource (str "segment" style)) [px 0 pz])]]
          (do (parent! part me) part))
        headbone (last (snake-bones (first parts)))
        tailbone (first (snake-bones (last parts)))]

        (position! head (v- (->v3 headbone) [0 0 0.5]))
        (parent! head headbone)
        (position! tail (v+ (->v3 tailbone) [0 0 0.5]))
        (parent! tail tailbone)
    (parent! rigged me)
    {:tag tag :go me :rigged rigged :x x :z z :parts parts :path path :dir dir :score 0}))

(defn add-section [S]
  (let [lastpart (last (:parts @S))
        part (clone! lastpart)]
    (destroy! 
      (or (child-named lastpart "tail")
          (child-named lastpart "tail2")))
    (parent! part (:go @S))
    (swap! S update-in [:parts] #(concat % [part]))))

(defn animate-part [go loc idx]
  (position! go (->v3 loc) ))

(defn animate-steak [go loc idx]
  (let [[back front] (vec (snake-bones go))] ))

(defn collide [s]
  (let [wither (tween/scale (->v3 1.2 0.4 1.2) 0.5 {:in :pow3})
        parts (:parts @s)
        pcount (count (:parts @s))]
    (mapv 
      (fn [go idx]
        ;TODO (dec idx) for last bone's delay
        (let [roll (tween/euler (->v3 0 0 180) 0.4 :+ {:delay (* idx 0.05)})
              bones (snake-bones go)]
          (mapv roll bones)))
      parts
      (range pcount))
    (play-clip! "explode")
    (play-clip! "death")
    (swap! s conj {:dead true})))


(defn euler-look [pos]
  (.eulerAngles (Quaternion/LookRotation (->v3 pos))))

(defn animate-joints [col next]
  (if (last col)
    (let [mid (v+ (v* (v- (last col) next) 0.5) (last col))
      ang1 (euler-look (v- (last col) mid))
      ang2 (euler-look (v- mid next))]
      (concat col [{:mid mid :ang [ang1 ang2]} next]))
    (conj col next)))



(defn snake-joints [snake]
  (let [parts (:parts snake)
        bones (mapcat snake-bones parts)
        locs (map ->v3 parts)
        res (filter map? (reduce animate-joints [] (map ->v3 (:parts @A))))
        bone-pairs (partition 2 (drop 1 bones))]
        (mapv 
          (fn [{:keys [mid ang]} [front back]]
            (let [m-m (tween/position (->v3 mid) 0.2)
                  rf (tween/euler (first ang) 0.2)
                  rb (tween/euler (last ang) 0.2)]
              (mapv m-m [front back])
              (rf front) (rb back)))
         res bone-pairs)))

(defn steak-soup [part idx locs]
  (let [[front back] (vec (snake-bones part))
        b (or (get locs idx) [0 0 0])
        a (or (get locs (dec idx)) (v+ b (v* (v- b (get locs (inc idx))) 0.001)))
        c (or (get locs (inc idx)) b)
        d (get locs (inc idx))
        part-offset  (v- c a)
        delay (* idx 0.01)
        delay2 (* (dec idx) 0.04)
        t1 (tween/euler (->v3 (->vec (euler-look part-offset))) 0.2 {:delay delay})
        ft (tween/position (->v3 (v+ (v* (v- c b) 0.5) b)) 0.4 :pow2  {:delay delay})
        bt (tween/position (->v3 (v+ (v* (v- a b) 0.5) b)) 0.4 :pow2  {:delay (* (dec idx) 0.01)})
        bo (tween/quaternion (look-quat b c ) 0.4 :pow2  {:delay delay})
        fo (tween/quaternion (look-quat a b ) 0.4 :pow2  {:delay (* (dec idx) 0.01)})]
    (ft front)
    (bt back)
    (fo back)(bo front)))

(defn ->tile [[x y z]] (mapv int [x z]))



(defn award [S n]
  (text! (object-named (str (:tag @S) "-score")) (-> S 
    (swap! update :score #(+ % n)) :score str)))

(defn eat [s item]
  (when (= (.name item) "apple")
    (destroy! item)
    (play-clip! "powerup")
    (award s 100)
    (add-section s)))

(defn check-collide [snake x z]
  (let [tile (get-tile [x z])
        item (get @STUFF [x z])]
    (cond (#{1 nil} tile) true
          item
          (cond (gameobject? item) 
            (do (eat snake item) false)
            :else true ))))

(defn place-apple [pos]
  (let [[x _ z] (mapv int pos)
    model (if (< (rand 40) 0) "eaten_apple" "apple")
    apple (clone! (resource model) (v+ pos [0 40 0]))
    fall (tween/position (->v3 pos) 0.7 :pow2)]
    (parent! apple (find-name "game-map"))
    (rotate! apple (v+ [(rand 50) (rand 50) (rand 360)] [-10 -10 0]))
    (fall apple)
    (play-clip! "place2")
    (swap! STUFF conj {[x z] apple}) true))

(defn advance-snake [s]
  (when-not (:dead @s)
  (let [{:keys [:x :z :parts :path :dir :rigged]} @s
        [dx dz] (v+ [x z] (direction dir))
        locs (cons (->v3 [dx 0 dz]) (map ->v3 parts))]
      (if (check-collide s dx dz) (collide s)
        (do
          (swap! STUFF conj {[dx dz] s}) 
          (swap! STUFF dissoc (->tile (->vec (last locs))))
          (mapv #(steak-soup %1 %2 (vec locs)) parts (range (count locs)))
          (mapv animate-part parts locs (range (count locs)))
          (swap! s conj {:x dx :z dz}) )))))

(def >fall (tween/position (->v3 0 -200 0) 4.0 :+ {:in :pow2 :out :pow2}))
(def >blank (tween/position (->v3 0) :+ >fall))

(defn fall! [o delay]
  ((tween/position (->v3 0 -80 0) 1.0 {:delay delay} :+ {:out :pow2})
   (position! o (->v3 (X o) (+ (Y o) 80) (Z o)))))

(defn deconstruct [ & fns]
  (mapv #((assoc >blank :duration (rand)) (->go %)) 
      (concat (every snake)
        [(the UI)]
        (every block)
        (every apple))))

(defn advance [_]
  (swap! TIMER inc)
  (advance-snake A) 
  (advance-snake B)
  (if (every? :dead [@A @B])
    (when-not (the game-over)
      (set! (.name (clone! :apple (->v3 0 -1000 0))) "game-over")
      (deconstruct)
      (wait 2 make-level))
    (when (< (count (every apple)) 5)
      (place-apple 
        (v+ (->v3 (rand-nth (every block)))
            (->v3 0 1 0))))))

(defn reverse? [a b] 
  (if (= a b) false
    (case #{a b} #{:u :d} true #{:l :r} true false)))

(defn steer [S d] 
  (let [od (:dir @S)
        [dx dz] (direction d)]
    (if (and (not= d od) (not (reverse? d od)))
      (swap! S conj {:dir d}))))

(defn update-level [_]
  (when (and (key-down? :tab) (not (the game-over)))
    (swap! VIEW (comp vec flatten (juxt rest first)))
    (morph (the cam) (find-name (first @VIEW))))
  (when-not (null? (:go @B))
    (mapv 
      (fn [[k d S]] 
        (if (key-down? k) (steer S d)))
      [[:a :l A][:d :r A][:w :u A][:s :d A] 
       [:left :l B][:right :r B][:up :u B][:down :d B]])))


 

(defn rand-axis-rot []
  (vec (take 3 (repeatedly #(rand-nth [270 360 -90 -180 0 90 180])))))


(defn make-level [& _]
  (if (playing?) (do
    (clear-cloned!)
    (clone! :environment)
    (clone! :clouds)
    (reset! STUFF {})
    (morph (the cam) (find-name (first @VIEW)))
    (let [field (clone! :game-map)
          ui (clone! :UI)
          timer (tween/position (->v3) :+ 0.4 advance)
          block-rot (rand-nth [[0 270 270][0 -90 0][0 180 0][0 180 270] (rand-axis-rot)])]

      (mapv #(parent! % field)
        (for [y (range (count @MAP))
              x (range (count (first @MAP)))
              :let [tile (get-in @MAP [y x])]
              :when (= 0 tile)]
            (-> (clone! :block (v* [x -0.8 y] 1)) 
                (rotate! block-rot)
                (fall! (rand)))))

      ((tween/position (->v3 90 0 30) :+ 120) (find-name "clouds"))
      (link! timer timer)
      (wait 1.0 #(do 
        (reset! A (make-snake "a" [1 0 15] :d [:u] ""))
        (reset! B (make-snake "b" [16 0 15] :d [:u] "2"))
        (mapv fall! (every snake) [0.1 0.1])))
      (wait 2.0 #(timer field))))))

(defn init [_]
  (setup!)
  (clone! :environment)
  (clone! :clouds)
  ((tween/position (->v3 -25 3 -20) 5.0) (the title))
  (wait 5 #(make-level)))
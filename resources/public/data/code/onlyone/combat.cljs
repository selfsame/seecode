(ns onlyone.combat
(:require
 [onlyone.tween :as tween])
  (:use [onlyone.common :only [v+ v- v* vdiv X Y xy- to-grid half to-tile from-tile clog state
                               update-state entities-in-around note-hash
                               set-state ppprint degrees-between
                               rand-range half to-tile from-tile UID GET-UID]]
        [onlyone.data :only [PLAYER DUNGEON HASHES  monster-data describe-item]]))

(defn living-state? [state]
   (if (< 0 (:health @state)) true false ))




(defn wakeup [me]
  (set-state me :sleeping false)
  (let [fx (tween/new-fx :exclamation {:x (state me :dx) :y (- (state me :dy) 32)
                                       :life 1200})]
    (tween/add (:state fx) :opacity 0.0 1000)))

(defn get-player-attack [me]
  #{})

(defn get-attack [me]
  (let [mydata (get monster-data (:species me))
        attacks (:offense mydata)]
    (if attacks (rand-nth attacks) #{})))

(defn player? [me] (if (state me :player) true false))

(defn combat-report [me you result]
  (cond (= :dodge (:event result)) (clog (str (:species you) " dodges!"))
        (= :parry (:event result)) (clog (str (:species me) " fumbles at " (:species you) " for " (:damage result)))
        (= :hit (:event result)) (clog (str (:species me) " hits " (:species you) " for " (:damage result)))
        :else (clog (str (:species me) " strikes hard " (:species you) " for " (:damage result)))))

(defn form-offense [me]
  (let [data (get monster-data (:species me))
        attacks (:offense data)
        flags (if attacks (rand-nth attacks) #{})
        magical (flags :magic)
        mass (:mass data)
        speed (:speed data)
        contact-area 0.5
        random-force (* (rand-range -20 20) .1)
        ]
    {:skill (rand)
     :speed speed
     :force (+ (if magical .4 (* mass .1)) random-force)
     :flags flags}))

(defn form-defense [me]
  (let [data (get monster-data (:species me))
        mass (:mass data)
        speed (:speed data)
        random-force (* (rand-range -20 20) .1)]
    {:skill (rand)
     :mass mass
     :speed speed}))

(defn enact [offense defense]
  (let [gap  (- (:skill offense) (:skill defense))]
    (cond
     (< gap -0.5) {:event :dodge :damage 0}
     (< gap 0) {:event :parry :damage (+ (:force offense) gap)}
     (< gap 0.5) {:event :hit :damage (:force offense)}
     :else {:event :critical :damage (+ (:force offense) gap)})))

(defn damage! [me you amount]
  (let [health (state you :health)
        ratio (/ amount 100)
        fx-count (int (* 10 ratio))]

    (doall (for [i (range 0 fx-count)] (tween/fx-splat :blood (state you :dx) (state you :dy) 600)))
    (when (state you :sleeping) (wakeup you))
    (update-state you :enemies #(merge-with + % {(:uid me) 15}))
    (update-state you :health #(- % amount))))


(defn warmup [st]
  (tween/add st :speed (- (:speed @st) 300) 2000 :flag :chilled :flagval false))

 (defn freeze [st]
   (when (:chilled @st)
     (when (living-state? st)
       (do
         (swap! st update-in [:health] #(- % 1))
         (tween/fx-splat :frost (:dx @st) (:dy @st))
         (tween/add st :t 0 600 :callback freeze)
         ))))

 (defn poison [st]
   (when (:poisoned @st)
     (when (living-state? st)
       (do
         (swap! st update-in [:health] #(- % 1))
         (tween/fx-splat :poison (:dx @st) (:dy @st) 600)
         (tween/fx-splat :poison (:dx @st) (:dy @st) 800)

         (tween/add st :p 0 1000 :callback poison)
         ))))

(defn debuf! [you offense result]
  (let [flags (or (:flags offense) #{})
        damage (:damage result)
        st (:state you)]

    (cond (contains? flags :cold) (do (set-state you :chilled true)
                          (tween/add st :speed (+ (:speed @st) 300) 2000 :callback warmup)
                          (tween/add st :t 0 300 :callback freeze)
                                    )
          ( contains? flags :poison) (do (set-state you :poisoned true)
                            (tween/add st :t 0 17000 :flag :poisoned :flagval false)
                          (tween/add st :p 0 1000 :callback poison)
                                       ))))

(defn explode [st]
  (when st
    (let [[x y] (mapv - [(:x @st) (:y @st)] [16 16])]
      (tween/fx-splat :sparks x y 800)
      (tween/fx-splat :smoke x y 3000)
      (tween/fx-splat :sparks x y 900)
      (tween/fx-splat :smoke x y 1500)
      (tween/fx-splat :sparks x y 500))))

(defn animate-missile [[sx sy] [tx ty] sprite duration onhit]
  (let [callback (or onhit #())
        angle (degrees-between [sx sy] [tx ty])
        missile (tween/new-fx sprite {:x sx :y sy :w 16 :h 16 :life (* duration 1.4) :angle angle })]
  (tween/add (:state missile) :x tx duration :callback callback)
  (tween/add (:state missile) :opacity .0 duration )
  (tween/add (:state missile) :y ty duration )))

(defn touches? [result]
  (if (= :dodge (:event result)) false true))

(defn apply-combat [me you offense defense result]
  (when (touches? result) (debuf! you offense result))
  (when (pos? (:damage result))
    (damage! me you (:damage result)))
    (set-state me :idle false)
    (tween/add (:state me) :dx (state me :dx) (* 1.5 (state me :speed)) :flag :idle))

(defn px-cen [me]
  (mapv + (to-grid 32 1 (xy- me)) [16 16]))

(defn attack [me you]
  (let [offense (form-offense me)
        defense (form-defense me)
        result (enact offense defense)]
    (when (or (player? me) (player? you)) (combat-report me you result))
    (when (contains? (:flags offense) :magic)
      (animate-missile (px-cen me) (px-cen you) :magic 500 explode))
    (apply-combat me you offense defense result)))





(ns onlyone.act
  ;(:require-macros [onlyone.macro :refer [defmapstack also fresh funct filt]] )
(:require
 [onlyone.tween :as tween]
 [onlyone.dungeon :as dungeon]
 [onlyone.combat :as combat]

 [domina :as dom])
  (:use [onlyone.common :only [v+ v- v* vdiv X Y half to-tile from-tile clog state
                               update-state entities-in-around note-hash uid-map
                               set-state ppprint ks->colorspan
                               rand-range half to-tile from-tile UID GET-UID]]
        [onlyone.data :only [PLAYER DUNGEON HASHES monster-data describe-item]]))



(defn get-actors []
  (conj @(:entities @DUNGEON) {-1 @PLAYER}))


(defn normalize [n]
  (cond (pos? n) 1
        (neg? n) -1
        :else 0))


(defn handle-sleep [me]
  (when (< (rand) .001)
        (let [effect (tween/new-fx :sleep (state me :dx) (- (state me :dy) 32) 300)]
            (tween/add (:state effect) :y (- (Y effect) 20) 300)
             (tween/add (:state effect) :opacity 0 300))))







(defn unhop [state]
  (tween/add state :dy (+ (:dy @state) 6) 80))

;; (defn old-attack [me you]
;;   (let [mydata (get monster-data (:species me))
;;         yourdata (get monster-data (:species you))
;;         roll (combat/calc-damage me you)]
;;   (when (state you :sleeping) (wakeup you))
;;   (tween/add (:state me) :dy (- (state me :dy) 6) 80 :callback unhop)
;;   (when (pos? roll)

;;     (if (contains? (:class mydata ) :magic)
;;       (do (fx-splat :frost (state you :dx) (state you :dy))
;;         (fx-splat :frost (state you :dx) (state you :dy)))
;;       (do (fx-splat :blood (state you :dx) (state you :dy))
;;         (fx-splat :blood (state you :dx) (state you :dy)))))

;;    (damage me you roll)
;;    (set-state me :idle false)
;;    (tween/add (:state me) :dx (state me :dx) (* 1.5 (state me :speed)) :flag :idle)))




(defn items-at [me x y]
  (let [items (vals @(:items @DUNGEON))]
    (first (filter (fn[e]
                        (= [x y] [(state e :x) (state e :y)] ))
              items))))


(defn entities-at [me x y]
  (let [entities (conj (vals @(:entities @DUNGEON)) @PLAYER)]
    (first (filter (fn[e] (and (not= e me)
                        (or
                         (= [x y] [(state e :old-x) (state e :old-y)] )
                        (= [x y] [(state e :x) (state e :y)] ))))
              entities))))



(defn equipable? [item player]
  (if (= :hand (:slot item))
         (if (and (state player :lefthand)
                 (state player :righthand)) false true)
         (if (state player (:slot item)) false true)))

(defn check-floor [me]
  (let [stuff (items-at me (X me) (Y me) )
        note  (dom/by-id "note")
        note-title  (dom/by-id "note-title")
        note-text  (dom/by-id "note-text")]
       (if stuff
         (do
           (let [equip (if (equipable? stuff me)
                         "<span class='green'>\n[press 'w' to equip!]</span>"
                         "\n[you're already committed to an item]")]
           (dom/set-style! note :top "500px")
           (dom/set-html! note-title "You see:")
           (dom/set-html! note-text (str (describe-item stuff) equip) )))
         (dom/set-style! note :top "900px"))
    ))

(defn show-eqip [eq-map]
  (apply str (map
              (fn [[k v]]
                (str "<span class='item' id='"k"'>"
                     k "\n" (describe-item v) "</span>\n\n"))
                  eq-map)))

(defn update-sidebar [me]
         (let [span-health (dom/by-id "health")
               span-eq (dom/by-id "eq")
               span-class (dom/by-id "class")
               span-ac (dom/by-id "ac")
               span-damage (dom/by-id "damage")
               span-speed (dom/by-id "speed")
               span-stealth (dom/by-id "stealth")
               span-status (dom/by-id "status")
               span-eq (dom/by-id "eq")
               equipment (select-keys @(:state me) [:lefthand :righthand :head :body :feet :mind])
               ac (str (or (apply + (map :AC (vals equipment) )) 0))
               speed (str (int (state me :speed)))
               stealth (str 0)
               status-ks (keys (filter (fn [[k v]] (not (false? v)))
                                         (select-keys @(:state me) [:poisoned :chilled :wounded])))
               ]
           (dom/set-html! span-health (str (int (state me :health))))
           (dom/set-html! span-class "nudist")
           (dom/set-html! span-ac ac)
           (dom/set-html! span-speed speed)
           (dom/set-html! span-stealth stealth)
           (dom/set-html! span-status (apply str (interpose ", "
                                             (ks->colorspan status-ks {:poisoned "green" :chilled "cyan"}))))

           (dom/set-html! span-eq (show-eqip equipment))
           ))




(defn wield [me]
  (let [stuff (items-at me (X me) (Y me) )]
    (when (equipable? stuff me)
      (let [slot (:slot stuff)
            myslot (if (= :hand slot)
                     (if (not (state me :lefthand)) :lefthand :righthand)
                     slot)]
      (swap! (:items @DUNGEON) dissoc (:uid stuff))
      (set-state me myslot stuff)
      (check-floor me)
      (update-sidebar me) ))))

(defn dying? [me]
  (if (<= (state me :health) 30) true false))


(defn move-callback [state]
  (let [uid (:uid @state)
        me (get (get-actors) uid)]
  (swap! state update-in [:old-x] #(identity nil))
  (swap! state update-in [:old-y] #(identity nil))
  (when me
    (note-hash me @HASHES))

    (when (dying? me)
      (do
        (when (= :musclepus (:species me))
          (do (tween/fx-splat :smoke (:dx @state) (:dy @state) 3600)
            (tween/fx-splat :smoke (:dx @state) (:dy @state) 2300)
            (tween/fx-splat :smoke (:dx @state) (:dy @state) 3000)
            (tween/fx-splat :smoke (:dx @state) (:dy @state) 2000)))))

  (when (:player @state)
    (check-floor @PLAYER))))

(defn blocked? [[x y]]
  (if (dungeon/check-wall @DUNGEON x y) true false))

(defn score-move [me [x y]]
  (if (blocked? [x y]) 10000
  (let [found (entities-at me x y)]
    (if found
      (let [enemies (state me :enemies)
            uid (:uid found)
            health (state found :health)
            foe (if ((set (keys enemies)) uid) 1 2)]

        (* health foe))
      0))))


(defn flow [me target]
   (let [mpos [(X me) (Y me)]
         [dx dy] (mapv normalize (mapv - target mpos))
         possible (distinct
                   (cons [dx dy]
                         [[-1 0] [1 0] [-1 -1] [1 -1] [-1 1] [1 1] [0 -1] [0 1]]))


         score (score-move me target)]
  (first (reverse (sort-by #(score-move me %) possible)))))

(defn move [entity offset]
  (let [target (v+ entity offset)

        speed (state entity :speed)
        ox (X offset)
        oy (Y offset)
        dx (state entity :dx)
        dy (state entity :dy)
        occ (or (entities-at entity (X target) (Y target)) false)]
  ;(flow entity [(X target) (Y target)])
  (if (state entity :idle)
    (cond (dungeon/check-wall @DUNGEON (X target) (Y target)) false
          occ (combat/attack entity occ)
          :else (do
                  (set-state entity :x (+ (X entity) ox))
                  (set-state entity :y (+ (Y entity) oy))
                  (set-state entity :old-x (X entity) )
                  (set-state entity :old-y (Y entity) )
                  (set-state entity :idle false)
;;                   (tween/tween-to entity {:dx (+ dx (* ox 32))
;;                                           :dy (+ dy (* oy 32))}
;;                                   speed {:callback move-callback})
                  (tween/add (:state entity) :dx (+ dx (* ox 32)) speed :flag :idle :callback move-callback)
                  (tween/add (:state entity) :dy (+ dy (* oy 32)) speed :flag :idle)

                  true))
     false)))



(defn rand-offset []
  {:x (rand-range -2 1)
   :y (rand-range -2 1)})



(defn offset-towards-uid [me uid]
  (when uid
  (let [you (get (get-actors) uid)
        mpos [(X me) (Y me)]
        ypos [(X you) (Y you)]
        [dx dy] (mapv normalize (mapv - ypos mpos))]
    [dx dy])))

(defn clean-enemies [me]
  (let [entity-uids (set (keys (get-actors)))
        alive (filter (fn [u] (entity-uids u)) (keys (state me :enemies)))]
    (update-state me :enemies #(select-keys % alive))))


(defn most-hated-enemy [me]
  (let [enemies (state me :enemies)
        vk-vec (flatten (map (fn [[k v]] [v k]) enemies))
        sorted (sorted-map vk-vec)
        hated (last sorted)]
    (if hated (last hated) nil)))

(defn die [me]
  (let [mydata (get monster-data (:species me))
        fx (if (contains? (:class mydata ) :magic) :sparks :blood)]
    (do (tween/fx-splat fx (state me :dx) (state me :dy) 800)
      (tween/fx-splat fx (state me :dx) (state me :dy) 800))
    (let [uid (:uid me)]
      (swap! (:entities @DUNGEON) dissoc uid))))



(defn regenerate [me]
  (when (< (state me :health) 100)
          (update-state me :health #(+ % .01))))

(defn live [me]
  (let [health (state me :health)
        enemies (state me :enemies)]
    (if (<= (state me :health) 0)
      (die me)

      (do
        (regenerate me)
        (when-not (nil? me)
          (if (state me :sleeping)
            (handle-sleep me)
            (when (state me :idle)
              (do
                (clean-enemies me)
                (let [hated (first (first (state me :enemies)));(most-hated-enemy me)
                      target (cond hated (offset-towards-uid me hated)
                            :else (rand-offset))
                      tpos (v+ me target)]

                  (move me (if (dying? me)

                               (mapv * target [-1 -1])
                             target))

                )))))))))


(defn walk [actor delta]
  "returns the altered actor and any new tweens"
  ;(move actor (rand-offset))
  (if-not (state actor :idle)
    {:actors [actor] :tweens []}
    (do
      (set-state actor :idle false)
      {:actors [actor]
       :tweens [(tween/tween-to delta actor {:dx (+ (state actor :dx) (rand-range -30 30))} 500 {})]})))

(defn update-actors [{:keys [actors tweens delta]}]
  (merge-with concat {:tweens tweens :delta delta}
         (apply merge-with concat
         (map #(walk % delta) actors))))

;; (defmapstack -update- [m]
;;   (let [{:keys [actors tweens delta]} m]
;;     (fresh :actors (funct :actors #(walk % delta) {}))))

(defn report-actwee [{:keys [actors tweens delta]}]
  (clog (str (map :uid tweens)))
  {:actors actors :tweens tweens :delta delta})

(defn use-tweens [{:keys [actors tweens delta]}]
  (let [tmap (uid-map tweens)]
        (apply merge-with concat
          (dorun (map
            (fn [e] (let [uid (:uid e)
                          tws (get tmap uid)
                         [as ts] (if tws
                                        (tween/apply-tween delta e (get tmap uid))
                                        [[e] []])]
                   {:actors as :tweens ts}))
            actors)))))

(defn store-rendered [{:keys [actors tweens]}]
  (reset! tween/NT tweens))

;(swap! (:entities @DUNGEON) dissoc 0)

;(use-tweens {:actors [{:uid 5}{:uid 6}] :tweens [] :delta 10})


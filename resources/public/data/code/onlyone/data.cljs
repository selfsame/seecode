(ns onlyone.data
  (:require [clojure.string :as string]))

(def DUNGEON (atom {}))
(def PLAYER (atom{}))
(def HASHES (atom {}))


(def tiles
  {:wall {:sprite [0 0]}
   :floor {:sprite [1 0]}
   :tree {:sprite [2 1]}
   })

(def monster-data
  {:player {:sprite [0 6]
            :speed 300
            :mass 80
            :offense [#{:hit}]
            :class #{:good :tool-user :dumb :solitary}}
   :musclepus {:sprite [0 8]
               :speed 700
               :mass 70
               :offense [#{:hit} #{:strangle}]
               :class #{:cephalapod :invertebrate :tool-user :dumb :defensive :solitary}}
   :slime {:sprite [1 8]
           :speed 1200
               :mass 20
               :offense [#{:poison} #{:hit} #{:magic :missile :cold}]
               :class #{:invertebrate :dumb :territorial :hive :poison}}
   :beholder {:sprite [2 8]
              :speed 700
               :mass 20
               :offense [#{:magic :missile :cold} #{:magic :touch :poison}]
               :defensive [#{:magic :blink}]
               :class #{:evil :invertebrate :flier :smart :ambusher
                       :magic :skirmisher}}
   :redbat {:sprite [3 8]
            :speed 300
               :mass 10
            :offense [#{:hit} #{:magic :missile :cold}]
               :class #{:flier :dumb :defensive :random}}
   :goblin {:sprite [4 8]
            :speed 500
               :mass 40
            :offense [#{:hit}]
               :class #{:evil :tool-user :tribal :ambusher :smeller}}
   :jelly {:sprite [5 8]
           :speed 300
               :mass 40
           :offense [#{:hit :poison}]
               :class #{:invertebrate :poison :dumb :aggresive :solitary}}
   :skelly {:sprite [6 8]
            :speed 500
               :mass 60
            :offense [#{:hit}]
               :class #{:evil :tool-user :dumb :aggresive :solitary}}
   :squatch {:sprite [4 10]
             :speed 600
               :mass 110
             :offense [#{:hit}]
               :class #{:good :tool-user :strong :territorial :solitary}}
   :snake {:sprite [6 10]
           :speed 900
               :mass 30
           :offense [#{:hit}]
               :class #{:dumb :defensive :solitary :poison}}

   :spider {:sprite [3 10]
             :speed 340
               :mass 50
             :offense [#{:hit}#{:poison}]
               :class #{:good :tool-user :strong :territorial :solitary}}
   :wizard {:sprite [5 10]
             :speed 400
               :mass 70
             :offense [#{:magic :missile :cold}]
               :class #{:good :tool-user :strong :territorial :solitary}}

   })





(def equip-slots
  [:head :feet :body :hand :finger :neck :waist :mind])

(def item-data
  {:shield {:slot :hand
          :sprite [0 11]
          :AC 3 :LB 3
          :material [:leather :bronze :steel]
          :boni [:resistance :strength :slow :noise :instability :elemental]}
   :helm {:slot :head
          :sprite [0 12]
          :AC 2 :LB 3
          :material [:leather :iron :steel]
          :boni [:resistance :strength :slow]}
  :boots {:slot :feet
          :sprite [0 13]
          :AC 1 :LB 2
          :material [:leather :iron :steel]
          :boni [:resistance :speed :slow :noise :damage]}
  :armor {:slot :body
          :sprite [0 14]
          :AC 5 :LB 7
          :material [:leather :iron :steel]
          :boni [:resistance :noise :protection :avoid-sharp]}
  :mace {:slot :hand
          :sprite [3 12]
          :DAM [2 6] :LB 6
          :material [:bronze :iron :steel]
          :boni [:impact :sturdy :shoddy :slow :striking :balanced :cold :shock]}
  :bow {:slot :hand
          :sprite [3 13]
          :DAM [3 3] :LB 3
          :material [:wood :bronze :steel]
          :boni [:impact :speed :accuracy :striking :poison :flame :stealth]}
   :axe {:slot :hand
          :sprite [3 14]
          :DAM [2 5] :LB 5
          :material [:bronze :iron :steel]
          :boni [:speed :wounding :striking :poison :shock :slow :noise]}
    :dagger {:slot :hand
          :sprite [3 15]
          :DAM [1 4] :LB 1
          :material [:bronze :iron :steel]
          :boni [:speed :wounding :striking :poison :stealth :shoddy]}

   :wizard-hat {:slot :head
          :sprite [6 12]
          :AC 1 :LB 1
          :material [:wool :silk :paper]
          :boni [:fire :shock :cold :mana :noise :slow]}
   :spellbook {:slot :mind
          :sprite [6 13]
          :LB 0
          :material [:leather :parchment :papyrus]
          :boni [:power :instability :backfiring :efficiency :elemental :noise]}
   :wand {:slot :hand
          :sprite [9 13]
          :DAM [1 3] :LB 1
          :material [:gold :aluminum :wood]
          :boni [:fire :shock :cold :mana :poison :slow :noise]}
   })

(def boni-desc {:power "powerful" :shock "shocking" :cold "fridgid"
                :mana "magical" :posion "poisonous" :slow "slugish"
                :noise "aggravating" :elemental "elemental" :instability "instable"
                :fire "flaming" :efficiency "efficient" :speed "speedy"
                :shoddy "shoddy" :stealth "stealthy" :wounding "sharp" :accuracy "acurrate"
                :impact "impactful" :striking "effective" :balanced "balanced"
                :sturdy "sturdy" :resistance "resistant" :protection "impenetrable"
                :strong "strong" :backfiring "traitorous"
                })

(def curses #{:noise :slow :instability :shoddy :backfiring})
(def magical #{:mana :shock :cold :poison :elemental :fire :resistance})
(def quality #{:shoddy :power :balanced :strong :sturdy :accuracy})
(def physical #{:sharp :sturdy})
(def auras #{:speed :stealth :noise})
(def effector #{:impact :wounding :backfiring :instability})

(def mat-class {:wood "#ac7c43"
                :bronze "#de9700"
                :iron "#4d4d4d"
                :steel "#a5b4ba"
                :leather "#714935"
                :silk "#bb6cc2"
                :paper "#e3dad2"
                :parchment "#cec9b4"
                :gold "#ffcc00"
                :aluminum "#d4d4d4"})

(defn stylize-boni-str [col]
  (mapv
   (fn [[k v]]
     (let [classes (str (when (curses k) "cursed ")
                        (when (magical k) "magical ")
                        (when (auras k) "aura ")
                        (when (quality k) "quality ")
                        (when (effector k) "effector ")
                        )]
     (str "<span class='" classes "'>" v "</span>"))) col))

(defn to-string [k]
  (apply str (rest (str k) )) )

(defn format-nouns [coll]
  (if (pos? (count coll))
  (do (let [tail (cond (= (count coll) 1) ""
                   (= (count coll) 2) ", "
                   :else " ")]
  (apply str (concat  (string/join ", " (pop coll)) [ tail (last coll)] )))) ""))

(format-nouns [])

(defn describe-item [thing]
  (if (not thing) "nothing"
  (let [typ (:type thing)
        material (or (:material thing) "")
        mat-col (get mat-class material)
        boni (keys (select-keys thing (keys boni-desc) ))
        boni-text (format-nouns (stylize-boni-str (select-keys boni-desc boni))) ]
    (str "<span style='color:" mat-col ";'>" "" boni-text " " (to-string material)
         " " (to-string typ) ".</span>")

            )))

(defn tile-lookup [pattern]
  (let [boolpat (map #(if (= "#" %)true false)  pattern)
        altpat (map (fn[a b] [a b]) [:LT :T :RT :L  :M :R :LB :B :RB] [:_LT :_T :_RT :_L  :_M :_R :_LB :_B :_RB])
        setpat (zipmap altpat boolpat )
        keypat (map (fn[s] (if (true? (last s)) (first (first s)) (last (first s)))) setpat)
        pat (set keypat)]



            ;(cond
             ;(not(empty? solution)) solution
             ;(keypat :M) [2 8]
             ;     :else [0 5])


        (cond
         (pat :M)
           (cond
            ;flat sides
            (every? pat [:L :R :_LB :_RB :_B]) [3 4]   ;also a single horizontal wall
            (every? pat [:L :R :B  :_LT :_RT :_T]) [1 8]
            (every? pat [:T :B :R :_LT :_LB :_L]) [2 14]
            (every? pat [:T :B :L :_RT :_R :_RB]) [2 11]
            ;corners
            (every? pat [:L :T :_B :_R]) [4 12]
            (every? pat [:R :T :_L :_B]) [4 6]
            (every? pat [:R :B :_T :_L]) [1 14]
            (every? pat [:L :B :_T :_R]) [1 9]
            ;nubbins
            (every? pat [:_L :_R :_B :T]) [5 7]
            (every? pat [:_L :_T :_B :R]) [4 6]
            (every? pat [:L :_T :_B :_R]) [4 12]
            (every? pat [:_L :_T :B :_R]) [6 14]

            (every? pat [:L :R :LB :_B :_RB]) [3 9]
            (every? pat [:L :R :RB :_B :_LB]) [3 10]
            ;island 5 7
            (every? pat [:_L :_T :_B :_R]) [5 7]

            ;above dead end
            (every? pat [:_B  :RB :LB :R :L]) [8 11]
            :else [2 8])
         (pat :_M)
           (cond
            ;dead ends
            (every? pat [:L  :_T :B :R]) [2 10]
            (every? pat [:_L  :T :B :R]) [3 6]
            (every? pat [:_R  :T :B :L]) [3 12]
            (every? pat [:_B  :T :R :L]) [9 11]

            ;negative corners
            (every? pat [:_L :_T :B :R]) [1 6]
            (every? pat [:_R :_T :L :B]) [7 11]
            (every? pat [:_R :_B :T :L]) [5 12]
            (every? pat [:_L :_B :T :R]) [5 6]

            ;wall neighbors
            (every? pat [:_L :_R  :LB :RB :B]) [0 8]
            (every? pat [:_L :_R  :_LB :RB :B :_T]) [0 7]


            ;halls
            (every? pat [:_T :_B :L :LB :RB :RT :RB :R]) [7 14]


            ;overdraw
            (every? pat [:B :_L :LB :_RB   :_R]) [0 9]
            (every? pat [:B :_L :RB :_LB   :_R]) [0 7]
             :else [0 5]))

              ))












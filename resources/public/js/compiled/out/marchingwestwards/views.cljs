(ns marchingwestwards.views
    (:require-macros [marchingwestwards.core :refer [embed-svg]]
                     [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]
              [cljs.core.match :refer-macros [match]]
              [re-com.core :as re-com]
              [cljs.reader :as reader]
              [clojure.walk :refer [prewalk postwalk]]))

;; --------------------
(defn home-title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "Marching Westward")
       :level :level1])))


(defn link-to-about-page []
  [re-com/hyperlink-href
   :label "go to About Page"
   :href "#/about"])


   (def svg-tokens (->>
      "icons0.svg"
       embed-svg))

   (defn contains-under? [needle hay] ((into #{} (flatten hay)) needle))

   (defn partially-flatten? [x] (and (coll? x) (contains-under? :path x)))

   (defn fix-style [s]
     (->> s
       (#(clojure.string/split % #";"))
       (map #(clojure.string/split % #":"))
       (map (fn [[k v]] [(keyword k) v]))
       (into {})
     ))

   (defn scale-path [d]
     (->> d
       (#(clojure.string/split % #" "))
       (map #(clojure.string/split % #","))
       (postwalk #(if (and (string? %) (re-matches reader/float-pattern %)) (cljs.reader/read-string %) %))
       (postwalk #(if (number? %) (/ % 4) %))
       (postwalk #(if (number? %) (str %) %))
       (postwalk #(match % [a b] (str a "," b) :else %))
       flatten
       (clojure.string/join " ")
       ))

   (defn icon-xy [s x y]
     (let [split (clojure.string/split s #" ")
          replaced (match [split]
            [[m i & r]] (into [m (str x "," y)] r)
            :else split)]
       (clojure.string/join " " replaced)
       ))

   (defn mk-icon-fn [path]
     (fn [x y id]
     (postwalk #(match %
       {:d i} (merge % {:d (icon-xy i x y) :id id :key id})
       :else %) path)))

   (defn get-icons []
     (->> svg-tokens
         (postwalk (fn [x]
           (match [x]
             [[:path & _]] x
             [x :guard partially-flatten?] (reduce (fn [acc i]
               (match [i]
                 [[:path & _]] (into acc [i])
                 [i :guard coll?] (into acc i)
                 :else (into acc [i])))
                [] x)
             :else x
               )))
         (postwalk #(match %
           {:style i} (merge % {:style (fix-style i)})
           :else %))
         (map #(match [%] [[:path & _]] % :else nil))
         (remove nil?)
         (postwalk #(match %
           {:d i} (merge % {:d (scale-path i)})
           :else %))
         (map #(match %
           [:path {:id i}] [(keyword i) (mk-icon-fn %)]
           :else nil))
         (reduce into [])
         (apply hash-map)))

   (def iconmap (get-icons))


(defn hex-points [x y radius]
  (let [thetas (->> (range 0,6)
                    (map #(* (/ Math.PI 3) %))
                    (map #(+ (/ Math.PI 6) %))
                    )]
    (for [theta thetas] [
      (+ x  (* radius (Math.sin theta)))
      (+ y  (* radius (Math.cos theta)))
      ])
  ))

(defn hex-point-string [x y radius]
  (clojure.string/join " " (map #(clojure.string/join "," %) (hex-points x y radius))))

(def hexagon-radius 40)

(defn axial-to-orthogonal [x y]
  [x (+ y (Math.floor (/ x 2)))])

(defn orthogonal-to-axial [x y]
  [x (- y (Math.floor (/ x 2)))])

(defn pixel-to-hexagon [px py]
  (let [ x  (Math.floor (+ (/ (- px 50) (* hexagon-radius 1.5)) 0.5))
         ; x = (px - 50) / (hexagon-radius * 1.5)
         y (Math.floor (- (* 0.5 (/ (- py 50) (* hexagon-radius (/ 5 6)))) 6))
         ; y = 0.5 * (px - 50) / (hexagon-radius * (5/6)) - x*0.5
    ]
    {:x x :y y}
    )
  )

(defn hexagon [icon x y]
  (let [pixel-x (+ 50 (* x hexagon-radius 1.5) )
       ; px = 50 + x*hexagon-radius*1.5
       pixel-y (+ 50 (* x  hexagon-radius (/ 25 30)) (* y 2  hexagon-radius (/ 25 30)))
       ; py = 50 + hexagon-radius * (5/6) * ( x + 2y )
       ;df-icon (re-frame/subscribe [:default-icon])
       icon-path (iconmap icon)
        ]
  [:g {:x pixel-x :y pixel-y}
    [:polygon
      {:points (hex-point-string pixel-x pixel-y hexagon-radius)
      :style {:fill "rgb(255, 255, 255)" :stroke "rgb(0, 0, 0)" :stroke-width "1px"}}]
      (if icon-path
      [icon-path pixel-x pixel-y (str "icon_terain_" x "_" y)]
      [:g])
      [:text  {:x pixel-x :y pixel-y
       :fill "red"} (clojure.string/join " " (axial-to-orthogonal x  y))]
  ]

  ))

(defn seq-contains? [coll target] (some #(= target %) coll))

(defn home-panel []
  (let [df-icon (re-frame/subscribe [:default-icon])
        m (re-frame/subscribe [:map])
        mouse (re-frame/subscribe [:mouse])
        mousehex (reaction (pixel-to-hexagon (@mouse :x) (@mouse :y)))
        axial-mousehex (reaction (zipmap [:x :y] (orthogonal-to-axial (@mousehex :x) (@mousehex :y))))
        ]
  [re-com/v-box
   :gap "1em"
   :children [
     [home-title]
     [link-to-about-page]
     [:pre @df-icon]
     [:pre (@mouse :x) ":" (@mouse :y)]
     [:pre (@mousehex :x) ":" (@mousehex :y)]
     [:pre (@axial-mousehex :x) ":" (@axial-mousehex :y)]

     [re-com/h-box
      :children [
      (for [b (keys iconmap)]
           [:button  {:on-click (fn []
             (re-frame/dispatch [:set-default-icon b]))} (str b)])
      ]]
     [:svg
        {:id "s" :version "1.1"
         :xmlns "http://www.w3.org/2000/svg"
         :width (* 8 1.8 hexagon-radius) :height (* 10 1.8 hexagon-radius)
         :on-mouse-move (fn [evt]
           (let [x (.-pageX evt)
                 y (.-pageY evt)]
           (re-frame/dispatch
             [:set-mouse-xy x y])))
          :on-click #(re-frame/dispatch [:set-tile (@axial-mousehex :x) (@axial-mousehex :y)])
        }
        (for [x (range 0 8)
             y (range -5 10)
             :when (and
               (<= (- 0 (/ x 2)) y)
               (>= (- 9 (Math.floor (/ x 2))) y)
             )]

             [hexagon (if (not (nil? (@m [x y]))) (@m [x y]) nil) x y])

     ]]]))

;; --------------------
(defn about-title []
  [re-com/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [re-com/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[about-title] [link-to-home-page]]])

;; --------------------
(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [re-com/v-box
       :height "100%"
       :children [(panels @active-panel)]])))

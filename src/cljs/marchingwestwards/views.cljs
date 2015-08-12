(ns marchingwestwards.views
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com]))

;; --------------------
(defn home-title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "SWN")
       :level :level1])))

(defn link-to-about-page []
  [re-com/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

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

(defn hexagon [x y]
  (let [pixel-x (+ 50 (* x hexagon-radius 1.5) )
       pixel-y (+ 50 (* x (* hexagon-radius (/ 25 30))) (* y 2 (* hexagon-radius (/ 25 30))))]
  [:g {:x pixel-x :y pixel-y}
    [:polygon
      {:points (hex-point-string pixel-x pixel-y hexagon-radius)
      :style {:fill "rgb(255, 255, 255)" :stroke "rgb(0, 0, 0)" :stroke-width "1px"}}]
      [:image {:x pixel-x :y pixel-y :width "100" :height "100" :xlink:href "http://127.0.0.1:3449/assets/hexbg/bw-forest.png"}]
      [:text  {:x pixel-x :y pixel-y :fill "red"} (clojure.string/join " " (axial-to-orthogonal x  y))]
  ]

  ))


(defn home-panel []
  [re-com/v-box
   :gap "1em"
   :children [
     [home-title]
     [link-to-about-page]
     [:svg
        {:id "s" :version "1.1"
         :xmlns "http://www.w3.org/2000/svg"
         :width (* 8 1.8 hexagon-radius) :height (* 10 1.8 hexagon-radius)
        }
        (for [x (range 0 8)
             y (range -5 10)
             :when (and
               (<= (- 0 (/ x 2)) y)
               (>= (- 9 (Math.floor (/ x 2))) y)
             )]
             [hexagon x y])
     ]]])

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

(ns marchingwestwards.handlers
    (:require [re-frame.core :as re-frame]
              [marchingwestwards.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel]]
   (assoc db :active-panel active-panel)))

(re-frame/register-handler
  :set-default-icon
  (fn [db [_ d-icon]]
    (assoc db :default-icon d-icon)))

(re-frame/register-handler
  :set-tile
  (fn [db [_ x y]]
    (let [m (db :map)
          d-icon (db :default-icon)
          updated (assoc m [x y] d-icon)]
    (assoc db :map updated))))

(re-frame/register-handler
  :set-mouse-xy
  (fn [db [_ x y]]
    (js/console.log x y)
    (let [m (db :mouse)
          nmouse (merge m {:x x :y y})]
    (assoc db :mouse nmouse))))

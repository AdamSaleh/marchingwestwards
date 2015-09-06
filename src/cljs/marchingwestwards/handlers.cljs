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

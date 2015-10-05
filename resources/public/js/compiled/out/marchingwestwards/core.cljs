(ns marchingwestwards.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [marchingwestwards.handlers]
              [marchingwestwards.subs]
              [marchingwestwards.routes :as routes]
              [marchingwestwards.views :as views]))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (re-frame/dispatch-sync [:set-default-icon :cactus])
  (mount-root))

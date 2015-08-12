(ns figwheel.connect (:require [marchingwestwards.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/marchingwestwards.core.mount-root (apply js/marchingwestwards.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'marchingwestwards.core/mount-root' is missing"))), :build-id "dev"})


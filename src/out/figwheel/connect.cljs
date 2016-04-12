(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [deck.core]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/deck.core.on-js-reload (apply js/deck.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'deck.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})


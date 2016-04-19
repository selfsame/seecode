(defproject deck "1743-SNAPSHOT"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [com.cognitect/transit-cljs "0.8.225" :scope "provided"]
                 [selfsame/hyper "0.3.0-SNAPSHOT"]
                 [selfsame/dollar "0.0.9-SNAPSHOT"]
                 [selfsame/pdfn "1.0"]]

  :plugins [[lein-cljsbuild "1.1.1"][lein-figwheel "0.5.0-2"]]
 
  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/out" "target"]

  :cljsbuild {:builds [
   {:id "dev"
    :source-paths ["src"]
    :figwheel {:on-jsload "deck.core/on-js-reload"}
    :compiler {:main "deck.core"
               :asset-path "js/out" 
               :output-to "resources/public/js/main.js"
               :output-dir "resources/public/js/out"
               :parallel-build true
               :optimizations :none
               :pretty-print false}}]}
  :figwheel {:server-port 8886
             :css-dirs ["resources/public/css"]})

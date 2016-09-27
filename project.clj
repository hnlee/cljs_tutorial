(defproject cljs_tutorial "0.1.0-SNAPSHOT"
  :description "ClojureScript tutorial"
  :url "http://github.com/hnlee/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227"]]
  :plugins [[lein-cljsbuild "1.1.4" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.6"]]
  :cljsbuild {
    :builds [{:id "dev"   ; development configuration
    :source-paths ["src"] ; Paths to monitor for build
    :figwheel true        ; Enable figwheel
    :compiler {:main cljs_tutorial.core        ; your main namespace
    :asset-path "cljs/out"                     ; Where to load dependent files go, mind you this one is relative
    :output-to "resources/public/cljs/main.js" ; Where the main file will be built
    :output-dir "resources/public/cljs/out"    ; Directory for temporary files
    :source-map-timestamp true}                ; Sourcemaps hurray!
    }]})

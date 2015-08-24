(ns marchingwestwards.core
  (:require [pl.danieljanus.tagsoup :as ts]))

(defn load-svg [svg-file]
  (ts/parse-string (slurp svg-file)))

(defmacro embed-svg [svg-file]
  (let [hiccup (load-svg svg-file)]
    `~hiccup))

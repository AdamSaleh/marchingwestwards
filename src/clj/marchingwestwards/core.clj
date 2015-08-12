(ns marchingwestwards.core
  (:require [pl.danieljanus.tagsoup :as ts])))

(def loadsvg [svg-file]
  (ts/parse-string (slurp svg-file)))

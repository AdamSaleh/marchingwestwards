(ns marchingwestwards.db)

(def default-db
  {:name "re-frame"
   :default-icon :cactus
   :mouse {:x 0
           :y 0}
   :map {
     [0 0] :evergreen
     [1 0] :evergreen
     [0 1] :evergreen
   }
   :voting {
     :mountainsnow [[10 :mountainsnow]
                    [5 :mountain]]
     :mountain [[10 :mountain]
                [4 :mountainsnow]
                [2 :forresthills]
                [2 :evergreenhills]
                [2 :hills]
                ]
     :evergreen [[10 :evergreen]
             [4 :forrest]
             [4 :hills]
             [4 :evergreenhills]]
     :evergreenhills  [[10 :evergreenhills]
             [4 :forresthills]
             [2 :mountain]
             [4 :evergreen]
             ]
     :forrest  [[10 :forrest]
             [4 :evergreen]
             [2 :hills]
             [2 :grass]
             [4 :forresthills]]
     :forresthills [[10 :forresthills]
             [4 :evergreenhills]
             [4 :hills]
             [2 :mountain]
             [4 :forrest]
             ]
     :hills [[14 :hills]
             [4 :evergreenhills]
             [4 :forresthills]
             [2 :mountain]
             [4 :grass]
             ]
     :grass [[10 :grass]
             [4  :hills]
             [4  :forrest]]
            }})

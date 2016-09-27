(ns cljs-tutorial.core-test
  (:require [cljs.test :refer-macros [is testing async]]
            [devcards.core :refer-macros [deftest]]))

(deftest a-test
  (async done 
    (js/setTimeout
      (fn []
        (throw (js/Error. "Oops!")))
      100)))

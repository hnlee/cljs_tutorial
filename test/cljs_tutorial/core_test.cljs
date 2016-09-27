(ns cljs-tutorial.core-test
  (:require [cljs.test :refer-macros [is testing]]
            [devcards.core :refer-macros [deftest]]))

(deftest a-test
  (testing "FIXME, I fail."
    (async done
      (js/setTimeout
        (fn []
          (is (= 1 0))
          (done))
        100))))

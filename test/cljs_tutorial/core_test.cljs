(ns cljs-tutorial.core-test
  (:require [cljs.test :refer-macros [is testing]]
            [devcards.core :refer-macros [deftest]]))

(deftest a-test
  (testing "FIXME, I fail."
    (is (= 0 1)))
  (testing "I pass"
    (is (= 1 1))))

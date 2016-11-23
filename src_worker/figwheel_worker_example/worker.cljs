(ns figwheel-worker-example.worker)

(enable-console-print!)

(print "I'm a worker!")

(defn on-js-reload []
  (print "on-js-reload called!"))

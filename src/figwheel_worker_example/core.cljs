(ns figwheel-worker-example.core)

(enable-console-print!)

;; launch the worker
(defonce worker (js/Worker. (if js/goog.DEBUG
                              "js/bootstrap_worker.js"
                              "js/compiled/worker.js")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

CLOSURE_BASE_PATH = "compiled/out_worker/goog/"
/**
 * Imports a script using the Web Worker importScript API.
 *
 * @param {string} src The script source.
 * @return {boolean} True if the script was imported, false otherwise.
 */
this.CLOSURE_IMPORT_SCRIPT = (function(global) {
    return function(src) {
        global['importScripts'](src);
        return true;
    };
})(this);

BASE_PATH = "compiled/";
importScripts(CLOSURE_BASE_PATH + "base.js");
importScripts("compiled/worker.js");
goog.require('figwheel_worker_example.worker');

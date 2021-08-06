var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import debounce from "lodash.debounce";
import { useRef, useEffect, useCallback } from "react";
/**
 * Debounce hook
 * Debounces a function
 *
 * @param {Function} callback The callback to debounce
 * @param {number} wait The duration to debounce
 * @returns {Function} The debounced callback
 */
function useDebounce(callback, wait, options) {
    var createDebouncedCallback = useCallback(function (function_) {
        return debounce(function_, wait, options);
    }, [wait, options]);
    var callbackRef = useRef(callback);
    var debouncedCallbackRef = useRef(createDebouncedCallback(callback));
    useEffect(function () {
        callbackRef.current = callback;
    });
    useEffect(function () {
        debouncedCallbackRef.current = createDebouncedCallback(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            callbackRef.current.apply(callbackRef, __spreadArray([], __read(args)));
        });
    }, [wait, options, createDebouncedCallback]);
    return debouncedCallbackRef.current;
}
export { useDebounce };

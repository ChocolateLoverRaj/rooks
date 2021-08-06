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
import { useState, useRef, useEffect, useCallback } from "react";
/**
 * A setTimeout hook that calls a callback after a timeout duration
 *
 * @param cb The callback to be invoked after timeout
 * @param timeoutDelayMs Amount of time in ms after which to invoke
 */
function useTimeout(callback_, timeoutDelayMs) {
    if (timeoutDelayMs === void 0) { timeoutDelayMs = 0; }
    var _a = __read(useState(false), 2), isTimeoutActive = _a[0], setIsTimeoutActive = _a[1];
    var savedRefCallback = useRef();
    useEffect(function () {
        savedRefCallback.current = callback_;
    }, [callback_]);
    function callback() {
        savedRefCallback.current && savedRefCallback.current();
        clear();
    }
    var clear = useCallback(function () {
        setIsTimeoutActive(false);
    }, []);
    var start = useCallback(function () {
        setIsTimeoutActive(true);
    }, []);
    useEffect(function () {
        if (isTimeoutActive) {
            var timeout_1 = window.setTimeout(callback, timeoutDelayMs);
            return function () {
                window.clearTimeout(timeout_1);
            };
        }
    }, [isTimeoutActive, timeoutDelayMs]);
    return {
        clear: clear,
        isActive: isTimeoutActive,
        start: start,
        stop: clear,
    };
}
export { useTimeout };

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
import { useState, useEffect, useCallback, useRef } from 'react';
/**
 * useThrottle
 * Throttles a function with a timeout and ensures
 * that the callback function runs at most once in that duration
 *
 * @param fn The callback to throttle
 * @param timeout Throttle timeout
 */
function useThrottle(function_, timeout) {
    if (timeout === void 0) { timeout = 300; }
    var _a = __read(useState(true), 2), ready = _a[0], setReady = _a[1];
    var timerRef = useRef(undefined);
    if (!function_ || typeof function_ !== 'function') {
        throw new Error('As a first argument, you need to pass a function to useThrottle hook.');
    }
    var throttledFunction = useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!ready) {
            return;
        }
        setReady(false);
        function_.apply(void 0, __spreadArray([], __read(args)));
    }, [ready, function_]);
    useEffect(function () {
        if (!ready) {
            timerRef.current = window.setTimeout(function () {
                setReady(true);
            }, timeout);
            return function () { return window.clearTimeout(timerRef.current); };
        }
    }, [ready, timeout]);
    return [throttledFunction, ready];
}
export { useThrottle };

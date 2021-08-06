// See also: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
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
import { useState, useEffect, useRef } from 'react';
/**
 *
 * useInterval hook
 *
 * Declaratively creates a setInterval to run a callback after a fixed
 * amount of time
 *
 *@param {funnction} callback - Callback to be fired
 *@param {number} intervalId - Interval duration in milliseconds after which the callback is to be fired
 *@param {boolean} startImmediate - Whether the interval should start immediately on initialise
 *@returns {IntervalHandler}
 */
function useInterval(callback, intervalDuration, startImmediate) {
    if (startImmediate === void 0) { startImmediate = false; }
    var internalIdRef = useRef(null);
    var _a = __read(useState(startImmediate), 2), isRunning = _a[0], setIsRunning = _a[1];
    var savedCallback = useRef();
    function start() {
        if (!isRunning) {
            setIsRunning(true);
        }
    }
    function stop() {
        if (isRunning) {
            setIsRunning(false);
        }
    }
    // Remember the latest callback.
    useEffect(function () {
        savedCallback.current = callback;
    });
    // Set up the interval.
    useEffect(function () {
        function tick() {
            savedCallback.current && savedCallback.current();
        }
        if (intervalDuration !== null && isRunning) {
            var id_1 = setInterval(tick, intervalDuration);
            internalIdRef.current = id_1;
            return function () {
                internalIdRef.current = null;
                clearInterval(id_1);
            };
        }
    }, [intervalDuration, isRunning]);
    var handler;
    handler = [start, stop, internalIdRef.current];
    handler.start = start;
    handler.stop = stop;
    handler.intervalId = internalIdRef.current;
    return handler;
}
export { useInterval };

import { useRef, useEffect } from 'react';
/**
 * A setInterval hook that calls a callback after a interval duration
 * when a condition is true
 *
 * @param cb The callback to be invoked after interval
 * @param intervalDurationMs Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the interval
 */
function useIntervalWhen(callback_, intervalDurationMs, when) {
    if (intervalDurationMs === void 0) { intervalDurationMs = 0; }
    if (when === void 0) { when = true; }
    var savedRefCallback = useRef();
    useEffect(function () {
        savedRefCallback.current = callback_;
    });
    function callback() {
        savedRefCallback.current && savedRefCallback.current();
    }
    useEffect(function () {
        if (when) {
            var interval_1 = window.setInterval(callback, intervalDurationMs);
            return function () {
                window.clearInterval(interval_1);
            };
        }
    }, [when, intervalDurationMs]);
}
export { useIntervalWhen };

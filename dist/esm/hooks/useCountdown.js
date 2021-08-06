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
import { useState } from 'react';
import { useInterval } from './useInterval';
/**
 *
 * useCountdown
 * Easy way to countdown until a given endtime in intervals
 *
 * @param endTime Time to countdown
 * @param options  Countdown options
 */
function useCountdown(endTime, options) {
    if (options === void 0) { options = {}; }
    var _a = options.interval, interval = _a === void 0 ? 1000 : _a, onDown = options.onDown, onEnd = options.onEnd;
    var _b = __read(useState(function () { return new Date(); }), 2), time = _b[0], setTime = _b[1];
    var restTime = endTime.getTime() - time.getTime();
    var count = restTime > 0 ? Math.ceil(restTime / interval) : 0;
    useInterval(onTick, count ? interval : null, true);
    return count;
    function onTick() {
        var newTime = new Date();
        if (newTime > endTime) {
            if (onEnd) {
                onEnd(newTime);
            }
            setTime(endTime);
            return;
        }
        if (onDown) {
            onDown(restTime, newTime);
        }
        setTime(newTime);
    }
}
export { useCountdown };

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
import { useEffect, useMemo, useState } from 'react';
/**
 * useMediaMatch
 *
 * A react hook that signals whether or not a media query is matched.
 *
 * @param query The media query to signal on. Example, `"print"` will signal
 * `true` when previewing in print mode, and `false` otherwise.
 * @returns Whether or not the media query is currently matched.
 */
function useMediaMatch(query) {
    if (typeof window === 'undefined') {
        console.warn('useMediaMatch cannot function as window is undefined.');
        return false;
    }
    var matchMedia = useMemo(function () { return window.matchMedia(query); }, [
        query,
    ]);
    var _a = __read(useState(function () { return matchMedia.matches; }), 2), matches = _a[0], setMatches = _a[1];
    useEffect(function () {
        setMatches(matchMedia.matches);
        var listener = function (event_) {
            return setMatches(event_.matches);
        };
        matchMedia.addEventListener('change', listener);
        return function () { return matchMedia.removeEventListener('change', listener); };
    }, [matchMedia]);
    return matches;
}
export { useMediaMatch };

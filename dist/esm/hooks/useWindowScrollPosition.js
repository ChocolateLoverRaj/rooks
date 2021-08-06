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
import { useOnWindowResize } from './useOnWindowResize';
import { useOnWindowScroll } from './useOnWindowScroll';
function getScrollPosition() {
    if (typeof window !== 'undefined') {
        return {
            scrollX: window.pageXOffset,
            scrollY: window.pageYOffset,
        };
    }
    else {
        return {
            scrollX: 0,
            scrollY: 0,
        };
    }
}
/**
 *
 * useWindowScrollPosition hook
 * A React hook to get the scroll position of the window
 *
 * @returns an object containing scrollX and scrollY values
 */
function useWindowScrollPosition() {
    var _a = __read(useState(getScrollPosition), 2), scrollPosition = _a[0], setScrollPosition = _a[1];
    /**
     * Recalculate on scroll
     */
    useOnWindowScroll(function () {
        setScrollPosition(getScrollPosition());
    }, true, true);
    /**
     * Recalculate on resize
     */
    useOnWindowResize(function () {
        setScrollPosition(getScrollPosition());
    }, true, true);
    return scrollPosition;
}
export { useWindowScrollPosition };

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
import { useIsomorphicEffect } from './useIsomorphicEffect';
var nullDimensions = {
    innerHeight: null,
    innerWidth: null,
    outerHeight: null,
    outerWidth: null,
};
function getDimensions() {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerHeight: window.outerHeight,
        outerWidth: window.outerWidth,
    };
}
/**
 * useWindowSize hook
 * A hook that provides information of the dimensions of the window
 *
 * @returns Dimensions of the window
 */
export function useWindowSize() {
    var _a = __read(useState(function () {
        if (typeof window !== 'undefined') {
            return getDimensions();
        }
        else {
            return nullDimensions;
        }
    }), 2), windowSize = _a[0], setWindowSize = _a[1];
    // set resize handler once on mount and clean before unmount
    useIsomorphicEffect(function () {
        function onResize() {
            setWindowSize(getDimensions());
        }
        window.addEventListener('resize', onResize);
        return function () {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    return windowSize;
}

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
import { useState, useCallback } from 'react';
import { useDidMount } from './useDidMount';
import { useMutationObserver } from './useMutationObserver';
/**
 * @param element HTML element whose boundingclientrect is needed
 * @returns ClientRect
 */
function getBoundingClientRect(element) {
    return element.getBoundingClientRect();
}
/**
 * useBoundingclientRect hook
 *
 * @param ref The React ref whose ClientRect is needed
 * @returns ClientRect
 */
function useBoundingclientrect(ref) {
    var _a = __read(useState(null), 2), value = _a[0], setValue = _a[1];
    var update = useCallback(function () {
        setValue(ref.current ? getBoundingClientRect(ref.current) : null);
    }, []);
    useDidMount(function () {
        update();
    });
    useMutationObserver(ref, update);
    return value;
}
export { useBoundingclientrect };

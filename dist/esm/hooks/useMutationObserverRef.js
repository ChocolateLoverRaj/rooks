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
import { useEffect, useCallback, useState } from 'react';
var config = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
};
/**
 *
 * useMutationObserverRef hook
 *
 * Returns a mutation observer for a React Ref and fires a callback
 *
 * @param {MutationCallback} callback Function that needs to be fired on mutation
 * @param {MutationObserverInit} options
 */
function useMutationObserverRef(callback, options) {
    if (options === void 0) { options = config; }
    var _a = __read(useState(null), 2), node = _a[0], setNode = _a[1];
    useEffect(function () {
        // Create an observer instance linked to the callback function
        if (node) {
            var observer_1 = new MutationObserver(callback);
            // Start observing the target node for configured mutations
            observer_1.observe(node, options);
            return function () {
                observer_1.disconnect();
            };
        }
    }, [node, callback, options]);
    var ref = useCallback(function (node) {
        setNode(node);
    }, []);
    return [ref];
}
export { useMutationObserverRef };

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersectionObserverRef = void 0;
var react_1 = require("react");
var config = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: [0, 1],
};
/**
 *
 * useIntersectionObserverRef hook
 *
 * Returns a mutation observer for a React Ref and fires a callback
 *
 * @param {IntersectionObserverCallback} callback Function that needs to be fired on mutation
 * @param {IntersectionObserverInit} options
 */
function useIntersectionObserverRef(callback, options) {
    if (options === void 0) { options = config; }
    var _a = options.root, root = _a === void 0 ? null : _a, rootMargin = options.rootMargin, threshold = options.threshold;
    var _b = __read(react_1.useState(null), 2), node = _b[0], setNode = _b[1];
    react_1.useEffect(function () {
        // Create an observer instance linked to the callback function
        if (node) {
            var observer_1 = new IntersectionObserver(callback, options);
            // Start observing the target node for configured mutations
            observer_1.observe(node);
            return function () {
                observer_1.disconnect();
            };
        }
    }, [node, callback, root, rootMargin, threshold]);
    var ref = react_1.useCallback(function (node) {
        setNode(node);
    }, []);
    return [ref];
}
exports.useIntersectionObserverRef = useIntersectionObserverRef;

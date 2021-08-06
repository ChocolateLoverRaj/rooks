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
exports.useOutsideClickRef = void 0;
var react_1 = require("react");
/**
 * useOutsideClickRef hook
 * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
 *
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 * @returns An array with first item being ref
 */
function useOutsideClickRef(handler, when) {
    if (when === void 0) { when = true; }
    var savedHandler = react_1.useRef(handler);
    var _a = __read(react_1.useState(null), 2), node = _a[0], setNode = _a[1];
    var memoizedCallback = react_1.useCallback(function (e) {
        if (node && !node.contains(e.target)) {
            savedHandler.current(e);
        }
    }, [node]);
    react_1.useEffect(function () {
        savedHandler.current = handler;
    });
    var ref = react_1.useCallback(function (node) {
        setNode(node);
    }, []);
    react_1.useEffect(function () {
        if (when) {
            document.addEventListener("click", memoizedCallback, true);
            document.addEventListener("ontouchstart", memoizedCallback, true);
            return function () {
                document.removeEventListener("click", memoizedCallback, true);
                document.removeEventListener("ontouchstart", memoizedCallback, true);
            };
        }
    }, [when, memoizedCallback]);
    return [ref];
}
exports.useOutsideClickRef = useOutsideClickRef;

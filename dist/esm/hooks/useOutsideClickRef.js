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
import { useEffect, useRef, useCallback, useState, } from "react";
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
    var savedHandler = useRef(handler);
    var _a = __read(useState(null), 2), node = _a[0], setNode = _a[1];
    var memoizedCallback = useCallback(function (e) {
        if (node && !node.contains(e.target)) {
            savedHandler.current(e);
        }
    }, [node]);
    useEffect(function () {
        savedHandler.current = handler;
    });
    var ref = useCallback(function (node) {
        setNode(node);
    }, []);
    useEffect(function () {
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
export { useOutsideClickRef };

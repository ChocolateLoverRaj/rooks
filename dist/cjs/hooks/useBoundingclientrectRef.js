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
exports.useBoundingclientrectRef = void 0;
var react_1 = require("react");
var useForkRef_1 = require("./useForkRef");
var useMutationObserverRef_1 = require("./useMutationObserverRef");
/**
 * @param element HTML element whose boundingclientrect is needed
 * @returns ClientRect
 */
function getBoundingClientRect(element) {
    return element.getBoundingClientRect();
}
/**
 * useBoundingclientrectRef hook
 *
 * @returns [CallbackRef | null, ClientRect | DOMRect | null, () => void]
 */
function useBoundingclientrectRef() {
    var _a = __read(react_1.useState(null), 2), value = _a[0], setValue = _a[1];
    var _b = __read(react_1.useState(null), 2), node = _b[0], setNode = _b[1];
    var update = react_1.useCallback(function () {
        setValue(node ? getBoundingClientRect(node) : null);
    }, [node]);
    react_1.useEffect(function () {
        update();
    }, [node]);
    var ref = react_1.useCallback(function (node) {
        setNode(node);
    }, []);
    var _c = __read(useMutationObserverRef_1.useMutationObserverRef(update), 1), mutationObserverRef = _c[0];
    var forkedRef = useForkRef_1.useForkRef(ref, mutationObserverRef);
    return [forkedRef, value, update];
}
exports.useBoundingclientrectRef = useBoundingclientrectRef;

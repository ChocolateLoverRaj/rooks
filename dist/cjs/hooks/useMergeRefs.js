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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMergeRefs = void 0;
var react_1 = require("react");
function setRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
/**
 * useMergeRefs
 * Merges multiple refs into a single function ref.
 * Takes any number of refs.
 * Refs can be mutable refs or function refs.
 *
 * @param refs
 */
function useMergeReferences() {
    var references = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        references[_i] = arguments[_i];
    }
    return react_1.useMemo(function () {
        if (references.every(function (ref) { return ref === null; })) {
            return null;
        }
        return function (refValue) {
            references.forEach(function (ref) {
                setRef(ref, refValue);
            });
        };
    }, __spreadArray([], __read(references)));
}
exports.useMergeRefs = useMergeReferences;

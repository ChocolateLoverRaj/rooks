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
exports.useUndoState = void 0;
var react_1 = require("react");
var defaultOptions = { maxSize: 100 };
/**
 * useUndoState hook
 * Drop in replacement for useState hook but with undo functionality.
 *
 * @param {any} defaultValue
 * @param {UndoStateOptions} [{ maxSize }=defaultOptions]
 * @returns {[any, Function, Function]}
 */
var useUndoState = function (defaultValue, options) {
    var maxSize = Object.assign({}, defaultOptions, options).maxSize;
    var _a = __read(react_1.useState([defaultValue]), 2), value = _a[0], setValue = _a[1];
    var push = react_1.useCallback(function (setterOrValue) {
        return setValue(function (current) {
            var restValues = current.length >= maxSize ? current.slice(0, maxSize) : current;
            if (typeof setterOrValue === 'function') {
                return __spreadArray([setterOrValue(current[0])], __read(restValues));
            }
            else {
                return __spreadArray([setterOrValue], __read(restValues));
            }
        });
    }, [maxSize]);
    var undo = react_1.useCallback(function () {
        setValue(function (current) {
            if (current.length === 1) {
                return current;
            }
            var _a = __read(current), values = _a.slice(1);
            return values;
        });
    }, []);
    return [value[0], push, undo];
};
exports.useUndoState = useUndoState;

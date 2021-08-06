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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = void 0;
var lodash_debounce_1 = __importDefault(require("lodash.debounce"));
var react_1 = require("react");
/**
 * Debounce hook
 * Debounces a function
 *
 * @param {Function} callback The callback to debounce
 * @param {number} wait The duration to debounce
 * @returns {Function} The debounced callback
 */
function useDebounce(callback, wait, options) {
    var createDebouncedCallback = react_1.useCallback(function (function_) {
        return lodash_debounce_1.default(function_, wait, options);
    }, [wait, options]);
    var callbackRef = react_1.useRef(callback);
    var debouncedCallbackRef = react_1.useRef(createDebouncedCallback(callback));
    react_1.useEffect(function () {
        callbackRef.current = callback;
    });
    react_1.useEffect(function () {
        debouncedCallbackRef.current = createDebouncedCallback(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            callbackRef.current.apply(callbackRef, __spreadArray([], __read(args)));
        });
    }, [wait, options, createDebouncedCallback]);
    return debouncedCallbackRef.current;
}
exports.useDebounce = useDebounce;

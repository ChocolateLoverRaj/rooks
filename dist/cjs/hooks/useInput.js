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
exports.useInput = void 0;
var react_1 = require("react");
var defaultOptions = {};
/**
 *
 * useInput Hook
 *
 * Handles an input's value and onChange props internally to
 * make text input creation process easier
 *
 * @param {any} [initialValue=""] Initial value of the input
 * @param {Options} [opts={}] Options object
 * @returns {InputHandler} Input handler with value and onChange
 */
function useInput(initialValue, options) {
    if (initialValue === void 0) { initialValue = ""; }
    if (options === void 0) { options = defaultOptions; }
    var _a = __read(react_1.useState(initialValue), 2), value = _a[0], setValue = _a[1];
    var onChange = react_1.useCallback(function (e) {
        var newValue = e.target.value;
        var shouldUpdate = true;
        if (typeof options.validate === "function") {
            shouldUpdate = options.validate(newValue, value);
        }
        if (shouldUpdate) {
            setValue(newValue);
        }
    }, [value]);
    // sync with default value
    react_1.useEffect(function () {
        setValue(initialValue);
    }, [initialValue]);
    var handler = {
        onChange: onChange,
        value: value,
    };
    return handler;
}
exports.useInput = useInput;

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
exports.useCounter = void 0;
var react_1 = require("react");
/**
 *
 * @typedef handler
 * @type {Object}
 * @property {number} value The value of the counter
 * @property {Function}  increment Increment counter value by 1
 * @property {Function} decrement Decrement counter value by 1
 * @property {Function} incrementBy Increment counter by incrAmount
 * @property {Function} decrementBy Decrement counter by decrAmount
 * @property {Function} reset Reset counter to initialValue
 */
/**
 * Counter hook
 *
 * @param {number} initialValue The initial value of the counter
 * @returns {handler} A handler to interact with the counter
 */
function useCounter(initialValue) {
    var _a = __read(react_1.useState(initialValue), 2), counter = _a[0], setCounter = _a[1];
    /**
     * Increment counter by an amount
     *
     * @param {number} incrAmount
     */
    var incrementBy = react_1.useCallback(function (incrAmount) {
        setCounter(function (currentCounter) { return currentCounter + incrAmount; });
    }, []);
    /**
     *
     * Decrement counter by an amount
     *
     * @param {*} decrAmount
     */
    var decrementBy = react_1.useCallback(function (decrAmount) {
        incrementBy(-decrAmount);
    }, []);
    /**
     * Increment counter by 1
     */
    var increment = react_1.useCallback(function () {
        incrementBy(1);
    }, []);
    /**
     * Decrement counter by 1
     */
    var decrement = react_1.useCallback(function () {
        incrementBy(-1);
    }, []);
    /**
     * Reset counter to initial value
     */
    var reset = react_1.useCallback(function () {
        setCounter(initialValue);
    }, []);
    return {
        decrement: decrement,
        decrementBy: decrementBy,
        increment: increment,
        incrementBy: incrementBy,
        reset: reset,
        value: counter,
    };
}
exports.useCounter = useCounter;

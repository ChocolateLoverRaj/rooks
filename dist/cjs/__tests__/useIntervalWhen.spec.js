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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
var react_hooks_1 = require("@testing-library/react-hooks");
var react_1 = require("react");
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var useIntervalWhen_1 = require("../hooks/useIntervalWhen");
var act = react_test_renderer_1.default.act;
describe('useIntervalWhen', function () {
    var useHook;
    beforeEach(function () {
        useHook = function () {
            var _a = __read(react_1.useState(0), 2), currentValue = _a[0], setCurrentValue = _a[1];
            function increment() {
                setCurrentValue(currentValue + 1);
            }
            useIntervalWhen_1.useIntervalWhen(function () {
                increment();
            }, 1000);
            return { currentValue: currentValue };
        };
    });
    afterEach(function () {
        react_hooks_1.cleanup();
        jest.clearAllTimers();
    });
    it('should be defined', function () {
        expect(useIntervalWhen_1.useIntervalWhen).toBeDefined();
    });
    it('should start timer when started with start function', function () {
        jest.useFakeTimers();
        var result = react_hooks_1.renderHook(function () { return useHook(); }).result;
        act(function () {
            jest.advanceTimersByTime(1000);
        });
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(result.current.currentValue).toBe(1);
        jest.useRealTimers();
    });
    it('should start timer when started with start function in array destructuring', function () {
        jest.useFakeTimers();
        var result = react_hooks_1.renderHook(function () { return useHook(); }).result;
        act(function () {
            jest.advanceTimersByTime(1000);
        });
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(result.current.currentValue).toBe(1);
        jest.useRealTimers();
    });
});

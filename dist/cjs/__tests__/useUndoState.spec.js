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
var react_1 = require("@testing-library/react");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var useUndoState_1 = require("../hooks/useUndoState");
var act = react_test_renderer_1.default.act;
describe('useUndoState', function () {
    afterEach(react_1.cleanup);
    var useHook;
    beforeEach(function () {
        useHook = function (defaultValue, options) {
            var _a = __read(useUndoState_1.useUndoState(defaultValue, options), 3), value = _a[0], setValue = _a[1], undo = _a[2];
            function increment() {
                setValue(function (current) { return (current || 0) + 1; });
            }
            return { increment: increment, undo: undo, value: value };
        };
    });
    it('should be defined', function () {
        expect(useUndoState_1.useUndoState).toBeDefined();
    });
    it('should honor default value', function () {
        var result = react_hooks_1.renderHook(function () { return useHook(42); }).result;
        expect(result.current.value).toBe(42);
    });
    it('should show latest value', function () {
        var result = react_hooks_1.renderHook(function () { return useHook(42); }).result;
        act(function () {
            result.current.increment();
        });
        expect(result.current.value).toBe(43);
    });
    it.skip('should show previous value after undo', function () {
        var result = react_hooks_1.renderHook(function () { return useHook(42); }).result;
        act(function () {
            result.current.increment();
            result.current.increment();
            result.current.undo();
        });
        expect(result.current.value).toBe(43);
    });
    it('should show initial value after multiple undo', function () {
        var result = react_hooks_1.renderHook(function () { return useHook(42); }).result;
        act(function () {
            result.current.increment();
            result.current.increment();
            result.current.undo();
            result.current.undo();
            result.current.undo();
            result.current.undo();
            result.current.undo();
        });
        expect(result.current.value).toBe(42);
    });
    it.skip('should respect maxSize option', function () {
        var result = react_hooks_1.renderHook(function () { return useHook(42, { maxSize: 2 }); }).result;
        act(function () {
            result.current.increment();
            result.current.increment();
            result.current.increment();
            result.current.increment();
            result.current.undo();
            result.current.undo();
            result.current.undo();
            result.current.undo();
            result.current.undo();
        });
        expect(result.current.value).toBe(44);
    });
});
// figure out tests

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
var react_hooks_1 = require("@testing-library/react-hooks");
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var useQueueState_1 = require("../hooks/useQueueState");
var act = react_test_renderer_1.default.act;
describe("useQueueState", function () {
    it("should be defined", function () {
        expect(useQueueState_1.useQueueState).toBeDefined();
    });
    it("should initialize correctly", function () {
        var result = react_hooks_1.renderHook(function () { return useQueueState_1.useQueueState([1, 2, 3]); }).result;
        expect(result.current[0]).toEqual([1, 2, 3]);
    });
    it("should return length correctly", function () {
        var result = react_hooks_1.renderHook(function () { return useQueueState_1.useQueueState([1, 2, 3]); }).result;
        var _a = __read(result.current, 2), controls = _a[1];
        expect(controls.length).toBe(3);
    });
    it.only("should enqueue correctly", function () {
        var _a = react_hooks_1.renderHook(function () { return useQueueState_1.useQueueState([1, 2, 3]); }), result = _a.result, rerender = _a.rerender;
        // test memo
        var enqueueBeforeRerender = result.current[1].enqueue;
        rerender();
        var enqueueAfterRerender = result.current[1].enqueue;
        expect(enqueueBeforeRerender).toBe(enqueueAfterRerender);
        act(function () {
            result.current[1].enqueue(7);
        });
        var _b = __read(result.current, 2), list = _b[0], controls = _b[1];
        expect(list).toEqual([1, 2, 3, 7]);
        expect(controls.length).toBe(4);
        // test memo reactivity
        act(function () {
            result.current[1].enqueue(8);
        });
        var _c = __read(result.current, 1), list2 = _c[0];
        expect(list2).toEqual([1, 2, 3, 7, 8]);
    });
    it("should peek and dequeue correctly", function () {
        var _a = react_hooks_1.renderHook(function () { return useQueueState_1.useQueueState([1, 2, 3]); }), result = _a.result, rerender = _a.rerender;
        // memo
        var enqueueBeforeRerender = result.current[1].enqueue;
        var peekBeforeRerender = result.current[1].peek;
        rerender();
        var enqueueAfterRerender = result.current[1].enqueue;
        var peekAfterRerender = result.current[1].peek;
        expect(enqueueBeforeRerender).toBe(enqueueAfterRerender);
        expect(peekBeforeRerender).toBe(peekAfterRerender);
        // after memo, should work
        act(function () {
            result.current[1].enqueue(7);
        });
        act(function () {
            result.current[1].enqueue(11);
        });
        expect(result.current[1].peek()).toEqual(1);
        // run 2nd times should work: should be reactive because of list deps
        act(function () {
            result.current[1].dequeue();
        });
        act(function () {
            result.current[1].dequeue();
        });
        expect(result.current[1].peek()).toEqual(3);
        expect(result.current[1].length).toEqual(3);
    });
    it("handles empty arrays", function () {
        var result = react_hooks_1.renderHook(function () { return useQueueState_1.useQueueState([]); }).result;
        act(function () {
            result.current[1].dequeue();
        });
        act(function () {
            result.current[1].dequeue();
        });
        var _a = __read(result.current, 2), controls = _a[1];
        expect(controls.peek()).toEqual(undefined);
        expect(controls.length).toEqual(0);
        act(function () {
            result.current[1].enqueue(7);
        });
        act(function () {
            result.current[1].enqueue(11);
        });
        expect(result.current[1].peek()).toEqual(7);
        act(function () {
            result.current[1].dequeue();
        });
        expect(result.current[1].peek()).toEqual(11);
        act(function () {
            result.current[1].dequeue();
        });
        expect(result.current[1].peek()).toBeUndefined();
        expect(result.current[1].length).toEqual(0);
    });
});

import { renderHook } from "@testing-library/react-hooks";
import TestRenderer from "react-test-renderer";
import { useCounter } from "../hooks/useCounter";
var act = TestRenderer.act;
describe("useCounter", function () {
    it("should be defined", function () {
        expect(useCounter).toBeDefined();
    });
    it("should initialize correctly", function () {
        var result = renderHook(function () { return useCounter(0); }).result;
        expect(result.current.value).toBe(0);
    });
    it("should increment", function () {
        var _a = renderHook(function () { return useCounter(0); }), result = _a.result, rerender = _a.rerender;
        act(function () {
            result.current.increment();
        });
        expect(result.current.value).toBe(1);
        // test memo
        var incrementBeforeRerender = result.current.increment;
        rerender();
        var incrementAfterRerender = result.current.increment;
        expect(incrementAfterRerender).toBe(incrementBeforeRerender);
        act(function () {
            result.current.increment();
        });
        expect(result.current.value).toBe(2);
    });
    it("should decrement", function () {
        var _a = renderHook(function () { return useCounter(0); }), result = _a.result, rerender = _a.rerender;
        act(function () {
            result.current.decrement();
        });
        expect(result.current.value).toBe(-1);
        // test memo
        var decrementBeforeRerender = result.current.decrement;
        rerender();
        var decrementAfterRerender = result.current.decrement;
        expect(decrementAfterRerender).toBe(decrementBeforeRerender);
        act(function () {
            result.current.decrement();
        });
        expect(result.current.value).toBe(-2);
    });
    it("should incrementBy", function () {
        var _a = renderHook(function () { return useCounter(5); }), result = _a.result, rerender = _a.rerender;
        act(function () {
            result.current.incrementBy(7);
        });
        expect(result.current.value).toBe(12);
        // test memo
        var incrementByBeforeRerender = result.current.incrementBy;
        rerender();
        var incrementByAfterRerender = result.current.incrementBy;
        expect(incrementByBeforeRerender).toBe(incrementByAfterRerender);
        act(function () {
            result.current.incrementBy(14);
        });
        expect(result.current.value).toBe(26);
    });
    it("should decrementBy", function () {
        var _a = renderHook(function () { return useCounter(5); }), result = _a.result, rerender = _a.rerender;
        act(function () {
            result.current.decrementBy(7);
        });
        expect(result.current.value).toBe(-2);
        // test memo
        var decrementByBeforeRerender = result.current.decrementBy;
        rerender();
        var decrementByAfterRerender = result.current.decrementBy;
        expect(decrementByBeforeRerender).toBe(decrementByAfterRerender);
        act(function () {
            result.current.decrementBy(-7);
        });
        expect(result.current.value).toBe(5);
    });
});

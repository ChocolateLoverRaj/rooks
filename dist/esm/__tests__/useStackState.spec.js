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
import { renderHook } from "@testing-library/react-hooks";
import TestRenderer from "react-test-renderer";
import { useStackState } from "../hooks/useStackState";
var act = TestRenderer.act;
describe("useStackState", function () {
    it("should be defined", function () {
        expect(useStackState).toBeDefined();
    });
    it("should initialize correctly", function () {
        var result = renderHook(function () { return useStackState([1, 2, 3]); }).result;
        expect(result.current[0]).toEqual([1, 2, 3]);
    });
    it("should return length correctly", function () {
        var result = renderHook(function () { return useStackState([1, 2, 3]); }).result;
        var _a = __read(result.current, 2), controls = _a[1];
        expect(controls.length).toBe(3);
    });
    it("should push correctly", function () {
        var _a = renderHook(function () { return useStackState([1, 2, 3]); }), result = _a.result, rerender = _a.rerender;
        // memo
        rerender();
        var pushBeforeRerender = result.current.push;
        rerender();
        var pushAfterRerender = result.current.push;
        expect(pushBeforeRerender).toBe(pushAfterRerender);
        // after memo still work
        act(function () {
            result.current[1].push(7);
        });
        var _b = __read(result.current, 2), list = _b[0], controls = _b[1];
        expect(list).toEqual([1, 2, 3, 7]);
        expect(controls.length).toBe(4);
        // re-create fn to reactive list deps
        rerender();
        act(function () {
            result.current[1].push(7);
        });
        var _c = __read(result.current, 1), list2 = _c[0];
        expect(list2).toEqual([1, 2, 3, 7, 7]);
    });
    it("should peek and pop correctly", function () {
        var _a = renderHook(function () { return useStackState([1, 2, 3]); }), result = _a.result, rerender = _a.rerender;
        // memo
        var popBeforeRerender = result.current[1].pop;
        var peekBeforeRerender = result.current[1].peek;
        rerender();
        var popAfterRerender = result.current[1].pop;
        var peekAfterRerender = result.current[1].peek;
        expect(popBeforeRerender).toBe(popAfterRerender);
        expect(peekBeforeRerender).toBe(peekAfterRerender);
        // after memo, should work
        act(function () {
            result.current[1].push(7);
        });
        act(function () {
            result.current[1].push(11);
        });
        var _b = __read(result.current, 2), controls = _b[1];
        expect(controls.peek()).toEqual(11);
        // run 2nd times should work: should be reactive because of list deps
        act(function () {
            result.current[1].pop();
        });
        act(function () {
            result.current[1].pop();
        });
        expect(result.current[1].peek()).toEqual(3);
        expect(result.current[1].length).toEqual(3);
    });
    it("handles empty arrays", function () {
        var result = renderHook(function () { return useStackState([]); }).result;
        act(function () {
            result.current[1].pop();
        });
        act(function () {
            result.current[1].pop();
        });
        var _a = __read(result.current, 2), controls = _a[1];
        expect(controls.peek()).toEqual(undefined);
        expect(controls.length).toEqual(0);
        act(function () {
            result.current[1].push(7);
        });
        act(function () {
            result.current[1].push(11);
        });
        expect(result.current[2]).toEqual([11, 7]);
        expect(result.current[1].peek()).toEqual(11);
        act(function () {
            result.current[1].pop();
        });
        expect(result.current[2]).toEqual([7]);
        expect(result.current[1].peek()).toEqual(7);
        act(function () {
            result.current[1].pop();
        });
        expect(result.current[1].peek()).toBeUndefined();
        expect(result.current[1].length).toEqual(0);
        expect(result.current[2]).toEqual([]);
    });
});

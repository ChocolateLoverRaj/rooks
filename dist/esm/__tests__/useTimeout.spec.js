/**
 * @jest-environment jsdom
 */
import { renderHook, act } from "@testing-library/react-hooks";
import { useTimeout } from "../hooks/useTimeout";
describe("use-timeout base", function () {
    var mockCallback = jest.fn();
    var TIMEOUT_MS = 1000;
    test.only("start", function () {
        var _a = renderHook(function () {
            return useTimeout(mockCallback, TIMEOUT_MS);
        }), result = _a.result, rerender = _a.rerender;
        jest.useFakeTimers();
        expect(mockCallback).not.toHaveBeenCalled();
        // test memo
        var clearBeforeRerender = result.current.clear;
        var startBeforeRerender = result.current.start;
        rerender();
        var clearAfterRender = result.current.clear;
        var startAfterRender = result.current.start;
        expect(clearBeforeRerender).toBe(clearAfterRender);
        expect(startBeforeRerender).toBe(startAfterRender);
        act(function () {
            result.current.start();
        });
        act(function () {
            expect(result.current.isActive).toBe(true);
            jest.runAllTimers();
        });
        expect(mockCallback).toHaveBeenCalled();
        expect(result.current.isActive).toBe(false);
        // should be reactive against new state setter
        act(function () {
            result.current.start();
        });
        expect(result.current.isActive).toBe(true);
    });
});

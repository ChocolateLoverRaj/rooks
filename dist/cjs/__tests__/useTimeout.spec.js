"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
var react_hooks_1 = require("@testing-library/react-hooks");
var useTimeout_1 = require("../hooks/useTimeout");
describe("use-timeout base", function () {
    var mockCallback = jest.fn();
    var TIMEOUT_MS = 1000;
    test.only("start", function () {
        var _a = react_hooks_1.renderHook(function () {
            return useTimeout_1.useTimeout(mockCallback, TIMEOUT_MS);
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
        react_hooks_1.act(function () {
            result.current.start();
        });
        react_hooks_1.act(function () {
            expect(result.current.isActive).toBe(true);
            jest.runAllTimers();
        });
        expect(mockCallback).toHaveBeenCalled();
        expect(result.current.isActive).toBe(false);
        // should be reactive against new state setter
        react_hooks_1.act(function () {
            result.current.start();
        });
        expect(result.current.isActive).toBe(true);
    });
});

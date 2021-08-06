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
/**
 * @jest-environment jsdom
 */
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { useState } from 'react';
import TestRenderer from 'react-test-renderer';
import { useInterval } from '../hooks/useInterval';
var act = TestRenderer.act;
describe('useInterval', function () {
    var useHook;
    beforeEach(function () {
        useHook = function () {
            var _a = __read(useState(0), 2), currentValue = _a[0], setCurrentValue = _a[1];
            function increment() {
                setCurrentValue(currentValue + 1);
            }
            var intervalHandler = useInterval(function () {
                increment();
            }, 1000);
            return { currentValue: currentValue, intervalHandler: intervalHandler };
        };
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useInterval).toBeDefined();
    });
    it('should start timer when started with start function', function () {
        jest.useFakeTimers();
        var result = renderHook(function () { return useHook(); }).result;
        act(function () {
            result.current.intervalHandler.start();
        });
        act(function () {
            jest.advanceTimersByTime(1000);
        });
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(result.current.currentValue).toBe(1);
        jest.useRealTimers();
    });
    it('should start timer when started with start function in array destructuring', function () {
        jest.useFakeTimers();
        var result = renderHook(function () { return useHook(); }).result;
        act(function () {
            var _a = __read(result.current.intervalHandler, 1), start = _a[0];
            start();
        });
        act(function () {
            jest.advanceTimersByTime(1000);
        });
        expect(setInterval).toHaveBeenCalledTimes(1);
        expect(result.current.currentValue).toBe(1);
        jest.useRealTimers();
    });
});

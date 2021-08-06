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
import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';
import { useUndoState } from '../hooks/useUndoState';
var act = TestRenderer.act;
describe('useUndoState', function () {
    afterEach(cleanup);
    var useHook;
    beforeEach(function () {
        useHook = function (defaultValue, options) {
            var _a = __read(useUndoState(defaultValue, options), 3), value = _a[0], setValue = _a[1], undo = _a[2];
            function increment() {
                setValue(function (current) { return (current || 0) + 1; });
            }
            return { increment: increment, undo: undo, value: value };
        };
    });
    it('should be defined', function () {
        expect(useUndoState).toBeDefined();
    });
    it('should honor default value', function () {
        var result = renderHook(function () { return useHook(42); }).result;
        expect(result.current.value).toBe(42);
    });
    it('should show latest value', function () {
        var result = renderHook(function () { return useHook(42); }).result;
        act(function () {
            result.current.increment();
        });
        expect(result.current.value).toBe(43);
    });
    it.skip('should show previous value after undo', function () {
        var result = renderHook(function () { return useHook(42); }).result;
        act(function () {
            result.current.increment();
            result.current.increment();
            result.current.undo();
        });
        expect(result.current.value).toBe(43);
    });
    it('should show initial value after multiple undo', function () {
        var result = renderHook(function () { return useHook(42); }).result;
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
        var result = renderHook(function () { return useHook(42, { maxSize: 2 }); }).result;
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

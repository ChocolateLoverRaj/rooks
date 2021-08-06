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
var react_hooks_1 = require("@testing-library/react-hooks");
var useMultiSelectableList_1 = require("../hooks/useMultiSelectableList");
jest.spyOn(console, "warn").mockImplementation(jest.fn);
describe("useMultiSelectableList", function () {
    afterEach(function () {
        console.warn.mockReset();
    });
    var result = react_hooks_1.renderHook(function () { return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3]); }).result;
    describe("matchSelection", function () {
        test("console.warn", function () {
            react_hooks_1.act(function () {
                result.current[1].matchSelection({ index: 1, value: 2 });
            });
            expect(console.warn).toHaveBeenNthCalledWith(1, "matchSelection. Expected either index or value to be provided. However all were provided");
            react_hooks_1.act(function () {
                result.current[1].matchSelection({});
            });
            expect(console.warn).toHaveBeenNthCalledWith(2, "matchSelection. index , value are all undefined.");
        });
        test("match index", function () {
            var internalResult = react_hooks_1.renderHook(function () {
                return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3], [0, 1], true);
            }).result;
            expect(internalResult.current[1].matchSelection({ index: 0 })).toBe(true);
            expect(internalResult.current[1].matchSelection({ index: 2 })).toBe(false);
        });
        test("match value", function () {
            var internalResult = react_hooks_1.renderHook(function () {
                return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3], [0, 1], true);
            }).result;
            expect(internalResult.current[1].matchSelection({ value: 1 })).toBe(true);
            expect(internalResult.current[1].matchSelection({ value: 3 })).toBe(false);
        });
    });
    describe("updateSelections", function () {
        test("set by index", function () {
            var internalResult = react_hooks_1.renderHook(function () {
                return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3], [0], true);
            }).result;
            react_hooks_1.act(function () {
                internalResult.current[1].updateSelections({ indices: [1, 2] })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndices = _a[0], currentValues = _a[1];
            expect(currentIndices).toEqual([1, 2]);
            expect(currentValues).toEqual([2, 3]);
        });
        test("set by value", function () {
            var internalResult = react_hooks_1.renderHook(function () {
                return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3], [0], true);
            }).result;
            react_hooks_1.act(function () {
                internalResult.current[1].updateSelections({ values: [2, 3] })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndices = _a[0], currentValues = _a[1];
            expect(currentIndices).toEqual([1, 2]);
            expect(currentValues).toEqual([2, 3]);
        });
        test("set by value fail", function () {
            var _a = __read(result.current[0], 2), beforeIndices = _a[0], beforeValue = _a[1];
            react_hooks_1.act(function () {
                result.current[1].updateSelections({ values: [22] })();
            });
            var _b = __read(result.current[0], 2), afterIndices = _b[0], afterValue = _b[1];
            expect(console.warn).toHaveBeenNthCalledWith(1, "updateSelections failed. Do the values exist in the list?");
            console.warn.mockReset();
            // default
            expect(beforeIndices).toEqual(afterIndices);
            expect(beforeValue).toEqual(afterValue);
        });
        test("console.warn", function () {
            react_hooks_1.act(function () {
                result.current[1].updateSelections({ indices: [1], values: [2] })();
            });
            expect(console.warn).toHaveBeenNthCalledWith(1, "updateSelections. Expected either indices or values to be provided. However all were provided");
            react_hooks_1.act(function () {
                result.current[1].updateSelections({})();
            });
            expect(console.warn).toHaveBeenNthCalledWith(2, "updateSelections. indices , values are all undefined.");
        });
    });
    describe("toggleSelection", function () {
        test("should toggle selected index", function () {
            var internalResult = react_hooks_1.renderHook(function () {
                return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3], [0], true);
            }).result;
            react_hooks_1.act(function () {
                internalResult.current[1].toggleSelection({ index: 0 })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndices = _a[0], currentValues = _a[1];
            expect(currentIndices).toEqual([]);
            expect(currentValues).toEqual([]);
        });
        test("shouldn't toggle selected index when allowUnselected = false", function () {
            var internalResult = react_hooks_1.renderHook(function () {
                return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3], [0], false);
            }).result;
            var _a = __read(internalResult.current[0], 2), beforeIndices = _a[0], beforeValues = _a[1];
            react_hooks_1.act(function () {
                internalResult.current[1].toggleSelection({ index: 0 })();
            });
            var _b = __read(internalResult.current[0], 2), afterIndex = _b[0], afterValue = _b[1];
            // default
            expect(beforeIndices).toBe(afterIndex);
            expect(beforeValues).toBe(afterValue);
            expect(console.warn).toHaveBeenNthCalledWith(1, "toggleSelection failed. Do the values exist in the list?");
            console.warn.mockReset();
        });
        test("should toggle selected value", function () {
            var internalResult = react_hooks_1.renderHook(function () {
                return useMultiSelectableList_1.useMultiSelectableList([1, 2, 3], [0], true);
            }).result;
            react_hooks_1.act(function () {
                internalResult.current[1].toggleSelection({ value: 1 })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndices = _a[0], currentValues = _a[1];
            expect(currentIndices).toEqual([]);
            expect(currentValues).toEqual([]);
        });
        test("console.warn", function () {
            react_hooks_1.act(function () {
                result.current[1].toggleSelection({ index: 1, value: 2 })();
            });
            expect(console.warn).toHaveBeenNthCalledWith(1, "toggleSelection. Expected either index or value to be provided. However all were provided");
            react_hooks_1.act(function () {
                result.current[1].toggleSelection({})();
            });
            expect(console.warn).toHaveBeenNthCalledWith(2, "toggleSelection. index , value are all undefined.");
        });
    });
});

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
import { renderHook, act } from "@testing-library/react-hooks";
import { useSelectableList } from "../hooks/useSelectableList";
jest.spyOn(console, "warn").mockImplementation(jest.fn);
describe("useSelctableList", function () {
    afterEach(function () {
        console.warn.mockReset();
    });
    var result = renderHook(function () { return useSelectableList([1, 2, 3]); }).result;
    describe("matchSelection", function () {
        test("console.warn", function () {
            act(function () {
                result.current[1].matchSelection({ index: 1, value: 2 });
            });
            expect(console.warn).toHaveBeenNthCalledWith(1, "matchSelection. Expected either index or value to be provided. However all were provided");
            act(function () {
                result.current[1].matchSelection({});
            });
            expect(console.warn).toHaveBeenNthCalledWith(2, "matchSelection. index , value are all undefined.");
        });
        test("match index", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, true);
            }).result;
            expect(internalResult.current[1].matchSelection({ index: 0 })).toBe(true);
            expect(internalResult.current[1].matchSelection({ index: 1 })).toBe(false);
        });
        test("match value", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, true);
            }).result;
            expect(internalResult.current[1].matchSelection({ value: 1 })).toBe(true);
            expect(internalResult.current[1].matchSelection({ value: 2 })).toBe(false);
        });
    });
    describe("updateSelection", function () {
        test("set by index", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, true);
            }).result;
            act(function () {
                internalResult.current[1].updateSelection({ index: 1 })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndex = _a[0], currentValue = _a[1];
            expect(currentIndex).toBe(1);
            expect(currentValue).toBe(2);
        });
        test("set by value", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, true);
            }).result;
            act(function () {
                internalResult.current[1].updateSelection({ value: 2 })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndex = _a[0], currentValue = _a[1];
            expect(currentIndex).toBe(1);
            expect(currentValue).toBe(2);
        });
        test("set by value fail", function () {
            var _a = __read(result.current[0], 2), beforeIndex = _a[0], beforeValue = _a[1];
            act(function () {
                result.current[1].updateSelection({ value: 22 })();
            });
            var _b = __read(result.current[0], 2), afterIndex = _b[0], afterValue = _b[1];
            expect(console.warn).toHaveBeenNthCalledWith(1, "updateSelection failed. Does the value 22 exist in the list?");
            console.warn.mockReset();
            // default
            expect(beforeIndex).toBe(afterIndex);
            expect(beforeValue).toBe(afterValue);
        });
        test("console.warn", function () {
            act(function () {
                result.current[1].updateSelection({ index: 1, value: 2 })();
            });
            expect(console.warn).toHaveBeenNthCalledWith(1, "updateSelection. Expected either index or value to be provided. However all were provided");
            act(function () {
                result.current[1].updateSelection({})();
            });
            expect(console.warn).toHaveBeenNthCalledWith(2, "updateSelection. index , value are all undefined.");
        });
    });
    describe("toggleSelection", function () {
        test("should toggle selected index", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, true);
            }).result;
            act(function () {
                internalResult.current[1].toggleSelection({ index: 0 })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndex = _a[0], currentValue = _a[1];
            expect(currentIndex).toBe(-1);
            expect(currentValue).toBe(undefined);
        });
        test("shouldn't toggle selected index when allowUnselected = false", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, false);
            }).result;
            var _a = __read(internalResult.current[0], 2), beforeIndex = _a[0], beforeValue = _a[1];
            act(function () {
                internalResult.current[1].toggleSelection({ index: 0 })();
            });
            var _b = __read(internalResult.current[0], 2), afterIndex = _b[0], afterValue = _b[1];
            // default
            expect(beforeIndex).toBe(afterIndex);
            expect(beforeValue).toBe(afterValue);
            expect(console.warn).toHaveBeenNthCalledWith(1, "allowUnselected is false. Cannot unselect item");
            console.warn.mockReset();
        });
        test("should toggle selected value", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, true);
            }).result;
            act(function () {
                internalResult.current[1].toggleSelection({ value: 1 })();
            });
            var _a = __read(internalResult.current[0], 2), currentIndex = _a[0], currentValue = _a[1];
            expect(currentIndex).toBe(-1);
            expect(currentValue).toBe(undefined);
        });
        test("shouldn't toggle selected value when allowUnselected", function () {
            var internalResult = renderHook(function () {
                return useSelectableList([1, 2, 3], 0, false);
            }).result;
            var _a = __read(internalResult.current[0], 2), beforeIndex = _a[0], beforeValue = _a[1];
            act(function () {
                internalResult.current[1].toggleSelection({ value: 1 })();
            });
            var _b = __read(internalResult.current[0], 2), afterIndex = _b[0], afterValue = _b[1];
            expect(console.warn).toHaveBeenNthCalledWith(1, "allowUnselected is false. Cannot unselect item");
            // default
            expect(beforeIndex).toBe(afterIndex);
            expect(beforeValue).toBe(afterValue);
            console.warn.mockReset();
        });
        test("console.warn", function () {
            act(function () {
                result.current[1].toggleSelection({ index: 1, value: 2 })();
            });
            expect(console.warn).toHaveBeenNthCalledWith(1, "toggleSelection. Expected either index or value to be provided. However all were provided");
            act(function () {
                result.current[1].toggleSelection({})();
            });
            expect(console.warn).toHaveBeenNthCalledWith(2, "toggleSelection. index , value are all undefined.");
        });
    });
});

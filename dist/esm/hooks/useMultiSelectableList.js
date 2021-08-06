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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { useCallback, useState } from "react";
function warnIfBothValueAndIndexAreProvided(functionName, object) {
    if (Object.values(object).every(function (v) { return typeof v !== "undefined"; })) {
        console.warn(functionName + ". Expected either " + Object.keys(object).join(" or ") + " to be provided. However all were provided");
    }
    else if (Object.values(object).every(function (v) { return typeof v === "undefined"; })) {
        console.warn(functionName + ". " + Object.keys(object).join(" , ") + " are all undefined.");
    }
}
/**
 * useMultiSelectableList
 * A custom hook to easily select multiple values from a list
 *
 * @param list
 * @param initialSelectIndices
 * @param allowUnselected
 */
function useMultiSelectableList(list, initialSelectIndices, allowUnselected) {
    if (list === void 0) { list = []; }
    if (initialSelectIndices === void 0) { initialSelectIndices = [0]; }
    if (allowUnselected === void 0) { allowUnselected = false; }
    var _a = __read(useState(initialSelectIndices), 2), currentIndices = _a[0], setCurrentIndices = _a[1];
    var currentValues = currentIndices.map(function (index) { return list[index]; });
    var selection = [currentIndices, currentValues];
    var updateSelections = function (_a) {
        var indices = _a.indices, values = _a.values;
        return function () {
            warnIfBothValueAndIndexAreProvided("updateSelections", {
                indices: indices,
                values: values,
            });
            if (typeof indices !== "undefined") {
                if (!allowUnselected && indices.length === 0) {
                    console.warn("updateSelections failed. indices is an empty list.");
                    return;
                }
                setCurrentIndices(indices);
            }
            else if (typeof values !== "undefined") {
                var valueIndices = list.reduce(function (accumulator, current, index) {
                    if (values.includes(current)) {
                        var array = __spreadArray(__spreadArray([], __read(accumulator)), [index]);
                        return array;
                    }
                    return accumulator;
                }, []);
                if (valueIndices.length > 0) {
                    setCurrentIndices(valueIndices);
                }
                else if (allowUnselected) {
                    setCurrentIndices(valueIndices);
                }
                else {
                    console.warn("updateSelections failed. Do the values exist in the list?");
                }
            }
        };
    };
    var toggleSelectionByIndex = useCallback(function (index) {
        var newIndices;
        if (!currentIndices.includes(index)) {
            newIndices = __spreadArray(__spreadArray([], __read(currentIndices)), [index]);
        }
        else {
            newIndices = __spreadArray([], __read(currentIndices));
            var indexOfIndex = currentIndices.indexOf(index);
            if (indexOfIndex !== -1) {
                newIndices.splice(indexOfIndex, 1);
            }
        }
        if (newIndices.length > 0) {
            setCurrentIndices(newIndices);
        }
        else if (allowUnselected) {
            setCurrentIndices(newIndices);
        }
        else {
            console.warn("toggleSelection failed. Do the values exist in the list?");
        }
    }, [allowUnselected, currentIndices]);
    var toggleSelection = useCallback(function (_a) {
        var index = _a.index, value = _a.value;
        return function () {
            warnIfBothValueAndIndexAreProvided("toggleSelection", {
                index: index,
                value: value,
            });
            if (typeof index !== "undefined") {
                toggleSelectionByIndex(index);
            }
            else if (typeof value !== "undefined") {
                var valueIndex = list.indexOf(value);
                if (valueIndex > -1) {
                    toggleSelectionByIndex(valueIndex);
                }
            }
        };
    }, [list, toggleSelectionByIndex]);
    var matchSelection = useCallback(function (_a) {
        var index = _a.index, value = _a.value;
        warnIfBothValueAndIndexAreProvided("matchSelection", { index: index, value: value });
        if (typeof index !== "undefined") {
            return currentIndices.includes(index);
        }
        else if (typeof value !== "undefined") {
            return currentValues.includes(value);
        }
    }, [currentIndices, currentValues]);
    var controls = {
        matchSelection: matchSelection,
        toggleSelection: toggleSelection,
        updateSelections: updateSelections,
    };
    return [selection, controls];
}
export { useMultiSelectableList };

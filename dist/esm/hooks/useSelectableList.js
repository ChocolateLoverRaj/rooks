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
 * useSelectableList
 * Easily select a single value from a list of values. very useful for radio buttons, select inputs  etc.
 *
 * @param list
 * @param initialIndex
 * @param allowUnselected
 */
function useSelectableList(list, initialIndex, allowUnselected) {
    if (list === void 0) { list = []; }
    if (initialIndex === void 0) { initialIndex = 0; }
    if (allowUnselected === void 0) { allowUnselected = false; }
    var _a = __read(useState(initialIndex), 2), currentIndex = _a[0], setCurrentIndex = _a[1];
    var currentValue = list[currentIndex];
    var selection = [currentIndex, currentValue];
    var updateSelection = useCallback(function (_a) {
        var index = _a.index, value = _a.value;
        return function () {
            warnIfBothValueAndIndexAreProvided("updateSelection", { index: index, value: value });
            if (typeof index !== "undefined") {
                setCurrentIndex(index);
            }
            else if (typeof value !== "undefined") {
                var valueIndex = list.indexOf(value);
                if (valueIndex > -1) {
                    setCurrentIndex(valueIndex);
                }
                else {
                    console.warn("updateSelection failed. Does the value " + value + " exist in the list?");
                }
            }
        };
    }, [list]);
    var toggleSelection = useCallback(function (_a) {
        var index = _a.index, value = _a.value;
        return function () {
            warnIfBothValueAndIndexAreProvided("toggleSelection", { index: index, value: value });
            if (typeof index !== "undefined") {
                if (currentIndex === index) {
                    if (allowUnselected) {
                        setCurrentIndex(-1);
                    }
                    else {
                        console.warn("allowUnselected is false. Cannot unselect item");
                    }
                }
                else {
                    setCurrentIndex(index);
                }
            }
            else if (typeof value !== "undefined") {
                var valueIndex = list.indexOf(value);
                if (valueIndex > -1) {
                    if (currentIndex === valueIndex) {
                        if (allowUnselected) {
                            setCurrentIndex(-1);
                        }
                        else {
                            console.warn("allowUnselected is false. Cannot unselect item");
                        }
                    }
                    else {
                        setCurrentIndex(valueIndex);
                    }
                }
                else {
                    console.log("as");
                    console.warn("toggleSelection failed. Does the value " + value + " exist in the list?");
                }
            }
        };
    }, [allowUnselected, currentIndex, list]);
    var matchSelection = useCallback(function (_a) {
        var index = _a.index, value = _a.value;
        warnIfBothValueAndIndexAreProvided("matchSelection", { index: index, value: value });
        if (typeof index !== "undefined") {
            return index === currentIndex;
        }
        else {
            return value === currentValue;
        }
    }, [currentIndex]);
    var controls = {
        matchSelection: matchSelection,
        toggleSelection: toggleSelection,
        updateSelection: updateSelection,
    };
    return [selection, controls];
}
export { useSelectableList };

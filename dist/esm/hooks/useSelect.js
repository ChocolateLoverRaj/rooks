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
/**
 * useSelect hook
 * Helps easily select a value from a list of values
 *
 * @param list List of values to select a value from
 * @param [initialIndex=0] Initial index which is selected
 * @returns handler
 */
function useSelect(list, initialIndex) {
    if (initialIndex === void 0) { initialIndex = 0; }
    var _a = __read(useState(initialIndex), 2), selectedIndex = _a[0], setSelectedIndex = _a[1];
    var setItem = useCallback(function (item) {
        setSelectedIndex(list.indexOf(item));
    }, [list]);
    return {
        index: selectedIndex,
        item: list[selectedIndex],
        setIndex: setSelectedIndex,
        setItem: setItem,
    };
}
export { useSelect };

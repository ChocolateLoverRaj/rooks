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
import { useCallback, useState } from 'react';
/**
 * useRefElement hook for React
 * Helps bridge gap between callback ref and state
 * Manages the element called with callback ref api using state variable
 */
function useRefElement() {
    var _a = __read(useState(null), 2), refElement = _a[0], setRefElement = _a[1];
    var ref = useCallback(function (refElement) {
        setRefElement(refElement);
    }, []);
    return [ref, refElement];
}
export { useRefElement };

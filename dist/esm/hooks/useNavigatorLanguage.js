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
import { useState } from 'react';
import { useWindowEventListener } from './useWindowEventListener';
function getLanguage() {
    // eslint-disable-next-line no-negated-condition
    if (typeof navigator !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        return navigator.language || navigator['userLanguage'];
    }
    else {
        return null;
    }
}
/**
 * useNavigatorLanguage hook
 * Returns the language of the navigator
 *
 * @returns {Language}
 */
export function useNavigatorLanguage() {
    var _a = __read(useState(getLanguage), 2), language = _a[0], setLanguage = _a[1];
    useWindowEventListener('languagechange', function () {
        setLanguage(getLanguage);
    });
    return language;
}

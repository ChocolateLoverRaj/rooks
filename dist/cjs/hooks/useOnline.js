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
exports.useOnline = void 0;
var react_1 = require("react");
/**
 *
 * @returns {boolean} Is navigator online
 */
function getIsOnline() {
    if (typeof window === 'undefined') {
        return null;
    }
    return navigator.onLine;
}
/**
 * useOnline hook
 *
 * Returns true if navigator is online, false if not.
 *
 * @returns {boolean} The value of navigator.onLine
 */
function useOnline() {
    var _a = __read(react_1.useState(function () { return getIsOnline(); }), 2), online = _a[0], changeOnline = _a[1];
    function setOffline() {
        changeOnline(false);
    }
    function setOnline() {
        changeOnline(true);
    }
    // we only needs this to be set on mount
    // hence []
    react_1.useEffect(function () {
        window.addEventListener('online', setOnline);
        window.addEventListener('offline', setOffline);
        return function () {
            window.removeEventListener('online', setOnline);
            window.removeEventListener('offline', setOffline);
        };
    }, []);
    return online;
}
exports.useOnline = useOnline;

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
exports.useSessionstorageState = void 0;
var react_1 = require("react");
function getValueFromSessionStorage(key) {
    if (typeof sessionStorage === "undefined") {
        return null;
    }
    var storedValue = sessionStorage.getItem(key) || "null";
    try {
        return JSON.parse(storedValue);
    }
    catch (error) {
        console.error(error);
    }
    return storedValue;
}
function saveValueToSessionStorage(key, value) {
    if (typeof sessionStorage === "undefined") {
        return null;
    }
    return sessionStorage.setItem(key, JSON.stringify(value));
}
/**
 * @param key Key of the sessionStorage object
 * @param initialState Default initial value
 */
function initialize(key, initialState) {
    var valueLoadedFromSessionStorage = getValueFromSessionStorage(key);
    if (valueLoadedFromSessionStorage === null) {
        return initialState;
    }
    else {
        return valueLoadedFromSessionStorage;
    }
}
/**
 * useSessionstorageState hook
 * Tracks a value within sessionStorage and updates it
 *
 * @param {string} key - Key of the sessionStorage object
 * @param {any} initialState - Default initial value
 */
function useSessionstorageState(key, initialState) {
    var _a = __read(react_1.useState(function () { return initialize(key, initialState); }), 2), value = _a[0], __setValue = _a[1];
    var isUpdateFromListener = react_1.useRef(false);
    react_1.useEffect(function () {
        /**
         * We need to ensure there is no loop of
         * storage events fired. Hence we are using a ref
         * to keep track of whether setValue is from another
         * storage event
         */
        if (!isUpdateFromListener.current) {
            saveValueToSessionStorage(key, value);
        }
    }, [value]);
    var listen = react_1.useCallback(function (e) {
        if (e.storageArea === sessionStorage && e.key === key) {
            try {
                isUpdateFromListener.current = true;
                var newValue = JSON.parse(e.newValue || "null");
                if (value !== newValue) {
                    __setValue(newValue);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }, [value]);
    // check for changes across windows
    react_1.useEffect(function () {
        window.addEventListener("storage", listen);
        return function () {
            window.removeEventListener("storage", listen);
        };
    }, []);
    var setValue = react_1.useCallback(function (newValue) {
        isUpdateFromListener.current = false;
        __setValue(newValue);
    }, []);
    var remove = react_1.useCallback(function () {
        sessionStorage.removeItem(key);
    }, []);
    return [value, setValue, remove];
}
exports.useSessionstorageState = useSessionstorageState;

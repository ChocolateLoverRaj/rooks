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
import { useState, useEffect, useCallback, useRef } from "react";
function getValueFromLocalStorage(key) {
    if (typeof localStorage === "undefined") {
        return null;
    }
    var storedValue = localStorage.getItem(key) || "null";
    try {
        return JSON.parse(storedValue);
    }
    catch (error) {
        console.error(error);
    }
    return storedValue;
}
function saveValueToLocalStorage(key, value) {
    if (typeof localStorage === "undefined") {
        return null;
    }
    return localStorage.setItem(key, JSON.stringify(value));
}
/**
 * @param key Key of the localStorage object
 * @param initialState Default initial value
 */
function initialize(key, initialState) {
    var valueLoadedFromLocalStorage = getValueFromLocalStorage(key);
    if (valueLoadedFromLocalStorage === null) {
        return initialState;
    }
    else {
        return valueLoadedFromLocalStorage;
    }
}
/**
 * useLocalstorageState hook
 * Tracks a value within localStorage and updates it
 *
 * @param {string} key - Key of the localStorage object
 * @param {any} initialState - Default initial value
 */
function useLocalstorageState(key, initialState) {
    var _a = __read(useState(function () { return initialize(key, initialState); }), 2), value = _a[0], __setValue = _a[1];
    var isUpdateFromListener = useRef(false);
    useEffect(function () {
        /**
         * We need to ensure there is no loop of
         * storage events fired. Hence we are using a ref
         * to keep track of whether setValue is from another
         * storage event
         */
        if (!isUpdateFromListener.current) {
            saveValueToLocalStorage(key, value);
        }
    }, [value]);
    var listen = useCallback(function (e) {
        if (e.storageArea === localStorage && e.key === key) {
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
    }, []);
    // check for changes across windows
    useEffect(function () {
        window.addEventListener("storage", listen);
        return function () {
            window.removeEventListener("storage", listen);
        };
    }, []);
    var setValue = useCallback(function (newValue) {
        isUpdateFromListener.current = false;
        __setValue(newValue);
    }, []);
    var remove = useCallback(function () {
        localStorage.removeItem(key);
    }, []);
    return [value, setValue, remove];
}
export { useLocalstorageState };

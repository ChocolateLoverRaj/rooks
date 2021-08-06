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
/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from "react";
/**
 * useLocalstorage hook
 * Tracks a value within localStorage and updates it
 *
 * @param {string} key - Key of the localStorage object
 * @param {any} defaultValue - Default initial value
 */
function useLocalstorage(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    var _a = __read(useState(getValueFromLocalStorage()), 2), value = _a[0], setValue = _a[1];
    function init() {
        var valueLoadedFromLocalStorage = getValueFromLocalStorage();
        if (valueLoadedFromLocalStorage === null ||
            valueLoadedFromLocalStorage === "null") {
            set(defaultValue);
        }
    }
    function getValueFromLocalStorage() {
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
    function saveValueToLocalStorage(valueToSet) {
        if (typeof localStorage === "undefined") {
            return null;
        }
        return localStorage.setItem(key, JSON.stringify(valueToSet));
    }
    var set = useCallback(function (newValue) {
        setValue(newValue);
        saveValueToLocalStorage(newValue);
    }, []);
    var listen = useCallback(function (event) {
        if (event.storageArea === localStorage && event.key === key) {
            setValue(event.newValue);
        }
    }, []);
    // eslint-disable-next-line consistent-return
    var remove = useCallback(function () {
        set(null);
        if (typeof localStorage === "undefined") {
            return false;
        }
        localStorage.removeItem(key);
    }, [key]);
    // initialize
    useEffect(function () {
        init();
    }, []);
    // check for changes across windows
    useEffect(function () {
        window.addEventListener("storage", listen);
        return function () {
            window.removeEventListener("storage", listen);
        };
    }, []);
    var handler = Object.assign([value, set, remove], {
        value: value,
        remove: remove,
        set: set,
    });
    return handler;
}
export { useLocalstorage };

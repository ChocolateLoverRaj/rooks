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
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useReducer, useCallback } from 'react';
function reducer(state, action) {
    switch (action.type) {
        case 'set':
            return action.payload;
        default:
            return state;
    }
}
/**
 * useSessionstorage
 * Tracks a value within sessionStorage and updates it
 *
 * @param key Key of the value to be stored
 * @param defaultValue Default value of the stored item
 */
function useSessionstorage(key, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    var _a = __read(useReducer(reducer, getValueFromSessionStorage()), 2), value = _a[0], dispatch = _a[1];
    function init() {
        var initialValue = getValueFromSessionStorage();
        if (initialValue === null || initialValue === 'null') {
            set(defaultValue);
        }
    }
    function getValueFromSessionStorage() {
        if (typeof sessionStorage === 'undefined') {
            return null;
        }
        var storedValue = sessionStorage.getItem(key) || 'null';
        try {
            return JSON.parse(storedValue);
        }
        catch (error) {
            console.error(error);
        }
        return storedValue;
    }
    function saveValueToSessionStorage(valueToSet) {
        if (typeof sessionStorage === 'undefined') {
            return null;
        }
        return sessionStorage.setItem(key, JSON.stringify(valueToSet));
    }
    function setValue(valueToSet) {
        dispatch({
            payload: valueToSet,
            type: 'set',
        });
    }
    function set(newValue) {
        saveValueToSessionStorage(newValue);
        setValue(newValue);
    }
    // eslint-disable-next-line consistent-return
    function remove() {
        if (typeof sessionStorage === 'undefined') {
            return null;
        }
        sessionStorage.removeItem(key);
        setValue(null);
    }
    useEffect(function () {
        init();
    }, []);
    var listen = useCallback(function (event) {
        if (event.storageArea === sessionStorage && event.key === key) {
            set(event.newValue);
        }
    }, []);
    useEffect(function () {
        window.addEventListener('storage', listen);
        return function () {
            window.removeEventListener('storage', listen);
        };
    }, []);
    var handler = Object.assign([value, set, remove], {
        remove: remove,
        set: set,
        value: value,
    });
    return handler;
}
export { useSessionstorage };

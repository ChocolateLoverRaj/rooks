var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
 * useMapState hook
 * A hook to manage state in the form of a map or object.
 *
 * @param initialValue Initial value of the map
 */
function useObjectState(initialValue) {
    var _a = __read(useState(initialValue), 2), map = _a[0], setMap = _a[1];
    var set = useCallback(function (key, value) {
        setMap(function (currentMap) {
            var _a;
            return (__assign(__assign({}, currentMap), (_a = {}, _a[key] = value, _a)));
        });
    }, []);
    var has = useCallback(function (key) {
        return typeof map[key] !== "undefined";
    }, [map]);
    var setMultiple = useCallback(function (object) {
        setMap(function (currentMap) { return (__assign(__assign({}, currentMap), object)); });
    }, []);
    var removeMultiple = useCallback(function () {
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            keys[_i] = arguments[_i];
        }
        setMap(function (currentMap) {
            var newMap = {};
            Object.keys(currentMap).forEach(function (key) {
                if (!keys.includes(key)) {
                    newMap[key] = currentMap[key];
                }
            });
            return newMap;
        });
    }, []);
    var remove = useCallback(function (key) {
        setMap(function (currentMap) {
            var newMap = {};
            Object.keys(currentMap).forEach(function (mapKey) {
                if (mapKey !== key) {
                    newMap[mapKey] = currentMap[mapKey];
                }
            });
            return newMap;
        });
    }, []);
    var removeAll = useCallback(function () {
        setMap({});
    }, []);
    var controls = {
        has: has,
        remove: remove,
        removeAll: removeAll,
        removeMultiple: removeMultiple,
        set: set,
        setMultiple: setMultiple,
    };
    return [map, controls];
}
export { useObjectState };

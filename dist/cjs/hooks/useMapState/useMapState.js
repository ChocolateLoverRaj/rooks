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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMapState = void 0;
var react_1 = require("react");
/**
 * useMapState hook
 * A hook to manage state in the form of a map or object.
 *
 * @param initialValue Initial value of the map
 */
function useMapState(initialValue) {
    var _a = __read(react_1.useState(initialValue), 2), map = _a[0], setMap = _a[1];
    return react_1.useMemo(function () {
        var _a;
        return (_a = {
                clear: function () { return setMap(new Map()); },
                delete: function (keyToRemove) {
                    return setMap(function (currentMap) {
                        return new Map(__spreadArray([], __read(currentMap)).filter(function (_a) {
                            var _b = __read(_a, 1), key = _b[0];
                            return key !== keyToRemove;
                        }));
                    });
                },
                deleteMultiple: function () {
                    var keys = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        keys[_i] = arguments[_i];
                    }
                    return setMap(function (currentMap) {
                        return new Map(__spreadArray([], __read(currentMap)).filter(function (_a) {
                            var _b = __read(_a, 1), key = _b[0];
                            return !keys.includes(key);
                        }));
                    });
                },
                entries: function () { return map.entries(); },
                forEach: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return map.forEach.apply(map, __spreadArray([], __read(args)));
                },
                get: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return map.get.apply(map, __spreadArray([], __read(args)));
                },
                has: function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return map.has.apply(map, __spreadArray([], __read(args)));
                },
                keys: function () { return map.keys(); },
                set: function (key, value) {
                    return setMap(function (currentMap) { return new Map(__spreadArray(__spreadArray([], __read(currentMap)), [[key, value]])); });
                },
                setMultiple: function (additionalMap) {
                    return setMap(function (currentMap) { return new Map(__spreadArray(__spreadArray([], __read(currentMap)), __read(additionalMap))); });
                },
                // eslint-disable-next-line fp/no-get-set
                get size() {
                    return map.size;
                },
                values: function () { return map.values(); }
            },
            _a[Symbol.iterator] = function () { return map[Symbol.iterator](); },
            _a[Symbol.toStringTag] = map[Symbol.toStringTag],
            _a);
    }, [map]);
}
exports.useMapState = useMapState;

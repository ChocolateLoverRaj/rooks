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
exports.useLifecycleLogger = void 0;
var useDidMount_1 = require("./useDidMount");
var useUpdateEffect_1 = require("./useUpdateEffect");
var useWillUnmount_1 = require("./useWillUnmount");
/**
 * useLifecycleLogger hook
 * logs parameters as component transitions through lifecycles
 *
 * @param componentName Name of the component
 * @param rest
 */
var useLifecycleLogger = function (componentName) {
    if (componentName === void 0) { componentName = "Component"; }
    var otherArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
    }
    useDidMount_1.useDidMount(function () {
        console.log.apply(console, __spreadArray([componentName + " mounted"], __read(otherArgs)));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect_1.useUpdateEffect(function () {
        console.log.apply(console, __spreadArray([componentName + " updated"], __read(otherArgs)));
    });
    useWillUnmount_1.useWillUnmount(function () {
        console.log(componentName + " unmounted");
    });
};
exports.useLifecycleLogger = useLifecycleLogger;

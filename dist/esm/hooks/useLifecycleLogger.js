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
import { useDidMount } from "./useDidMount";
import { useUpdateEffect } from "./useUpdateEffect";
import { useWillUnmount } from "./useWillUnmount";
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
    useDidMount(function () {
        console.log.apply(console, __spreadArray([componentName + " mounted"], __read(otherArgs)));
        return function () { return console.log(componentName + " unmounted"); };
    });
    useUpdateEffect(function () {
        console.log.apply(console, __spreadArray([componentName + " updated"], __read(otherArgs)));
    });
    useWillUnmount(function () {
        console.log(componentName + " unmounted");
    });
};
export { useLifecycleLogger };

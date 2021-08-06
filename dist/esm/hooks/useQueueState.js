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
import { useCallback, useState } from "react";
function useQueueState(initialList) {
    var _a = __read(useState(__spreadArray([], __read(initialList))), 2), list = _a[0], setList = _a[1];
    var length = list.length;
    var enqueue = useCallback(function (item) {
        var newList = __spreadArray(__spreadArray([], __read(list)), [item]);
        setList(newList);
        return newList.length;
    }, [list]);
    var dequeue = useCallback(function () {
        if (list.length > 0) {
            var firstItem = list[0];
            setList(__spreadArray([], __read(list.slice(1))));
            return firstItem;
        }
        return undefined;
    }, [list]);
    var peek = useCallback(function () {
        if (length > 0) {
            return list[0];
        }
        return undefined;
    }, [list]);
    var controls = {
        dequeue: dequeue,
        enqueue: enqueue,
        length: length,
        peek: peek,
    };
    return [list, controls];
}
export { useQueueState };

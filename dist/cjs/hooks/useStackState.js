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
exports.useStackState = void 0;
var react_1 = require("react");
function useStackState(initialList) {
    var _a = __read(react_1.useState(__spreadArray([], __read(initialList))), 2), list = _a[0], setList = _a[1];
    var length = list.length;
    var listInReverse = react_1.useMemo(function () {
        var reverseList = __spreadArray([], __read(list));
        reverseList.reverse();
        return reverseList;
    }, [list]);
    var push = react_1.useCallback(function (item) {
        var newList = __spreadArray(__spreadArray([], __read(list)), [item]);
        setList(newList);
        return newList.length;
    }, [list]);
    var pop = react_1.useCallback(function () {
        if (list.length > 0) {
            var lastItem = list[list.length - 1];
            setList(__spreadArray([], __read(list.slice(0, list.length - 1))));
            return lastItem;
        }
        return undefined;
    }, [list]);
    var peek = react_1.useCallback(function () {
        if (length > 0) {
            return list[length - 1];
        }
        return undefined;
    }, [list]);
    var controls = {
        length: length,
        peek: peek,
        pop: pop,
        push: push,
    };
    return [list, controls, listInReverse];
}
exports.useStackState = useStackState;

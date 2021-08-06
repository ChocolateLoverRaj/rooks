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
/* eslint-disable id-length */
/**
 *  Inspired from https://github.com/Swizec/useDimensions

 **/
import { useState, useCallback, useLayoutEffect } from "react";
import { useOnWindowResize } from "./useOnWindowResize";
import { useOnWindowScroll } from "./useOnWindowScroll";
var getDimensionObject = function (node) {
    var rect = node.getBoundingClientRect();
    return {
        bottom: rect.bottom,
        height: rect.height,
        left: rect.left,
        right: rect.right,
        top: rect.top,
        width: rect.width,
        x: rect.left,
        y: rect.top,
    };
};
export var useDimensionsRef = function (_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.updateOnScroll, updateOnScroll = _c === void 0 ? true : _c, _d = _b.updateOnResize, updateOnResize = _d === void 0 ? true : _d;
    var _e = __read(useState(null), 2), dimensions = _e[0], setDimensions = _e[1];
    var _f = __read(useState(null), 2), node = _f[0], setNode = _f[1];
    var ref = useCallback(function (nodeFromCallback) {
        setNode(nodeFromCallback);
    }, []);
    var measure = useCallback(function () {
        window.requestAnimationFrame(function () {
            if (node) {
                setDimensions(getDimensionObject(node));
            }
        });
    }, [node]);
    useLayoutEffect(function () {
        measure();
    }, [measure]);
    useOnWindowResize(function () {
        measure();
    }, updateOnResize, true);
    useOnWindowScroll(function () {
        measure();
    }, updateOnScroll, true);
    return [ref, dimensions, node];
};

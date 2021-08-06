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
import { useEffect, useState } from 'react';
var initialMouseState = {
    clientX: null,
    clientY: null,
    movementX: null,
    movementY: null,
    offsetX: null,
    pageX: null,
    offsetY: null,
    screenX: null,
    pageY: null,
    x: null,
    screenY: null,
    y: null,
};
function getMousePositionFromEvent(e) {
    var screenX = e.screenX, screenY = e.screenY, movementX = e.movementX, movementY = e.movementY, pageX = e.pageX, pageY = e.pageY, clientX = e.clientX, clientY = e.clientY, offsetX = e.offsetX, offsetY = e.offsetY;
    return {
        clientX: clientX,
        clientY: clientY,
        movementX: movementX,
        movementY: movementY,
        offsetX: offsetX,
        offsetY: offsetY,
        pageX: pageX,
        pageY: pageY,
        screenX: screenX,
        screenY: screenY,
        x: screenX,
        y: screenY,
    };
}
/**
 * useMouse hook
 *
 * Retrieves current mouse position and information about the position like
 * screenX, pageX, clientX, movementX, offsetX
 */
export function useMouse() {
    var _a = __read(useState(initialMouseState), 2), mousePosition = _a[0], setMousePostition = _a[1];
    function updateMousePosition(e) {
        setMousePostition(getMousePositionFromEvent(e));
    }
    useEffect(function () {
        document.addEventListener('mousemove', updateMousePosition);
        return function () {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);
    return mousePosition;
}

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventListenerRef = void 0;
var react_1 = require("react");
var useFreshTick_1 = require("./useFreshTick");
var useIsomorphicEffect_1 = require("./useIsomorphicEffect");
var useRefElement_1 = require("./useRefElement");
/**
 *  useEventListenerRef hook
 *
 *  A react hook to an event listener to an element
 *  Returns a ref
 *
 * @param {string} eventName The event to track
 * @param {Function} callback The callback to be called on event
 * @param {object} conditions The options to be passed to the event listener
 * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
 * @returns {Function} A callback ref that can be used as ref prop
 */
function useEventListenerRef(eventName, callback, listenerOptions, isLayoutEffect) {
    if (listenerOptions === void 0) { listenerOptions = {}; }
    if (isLayoutEffect === void 0) { isLayoutEffect = false; }
    var _a = __read(useRefElement_1.useRefElement(), 2), ref = _a[0], element = _a[1];
    var freshCallback = useFreshTick_1.useFreshTick(callback);
    var capture = listenerOptions.capture, passive = listenerOptions.passive, once = listenerOptions.once;
    var useEffectToRun = isLayoutEffect ? useIsomorphicEffect_1.useIsomorphicEffect : react_1.useEffect;
    useEffectToRun(function () {
        if (!(element && element.addEventListener)) {
            return;
        }
        element.addEventListener(eventName, freshCallback, listenerOptions);
        return function () {
            element.removeEventListener(eventName, freshCallback, listenerOptions);
        };
    }, [element, eventName, capture, passive, once]);
    return ref;
}
exports.useEventListenerRef = useEventListenerRef;

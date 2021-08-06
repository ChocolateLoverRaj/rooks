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
exports.useKeyRef = void 0;
var react_1 = require("react");
var doesIdentifierMatchKeyboardEvent_1 = require("../utils/doesIdentifierMatchKeyboardEvent");
var defaultOptions = {
    eventTypes: ['keydown'],
    when: true,
};
/**
 * useKeyRef hook
 *
 * Fires a callback on keyboard events like keyDown, keyPress and keyUp
 *
 * @param {[string|number]} keyList
 * @param {Function} callback
 * @param {Options} options
 * @returns callbackRef
 */
function useKeyRef(input, callback, options_) {
    var _a = __read(react_1.useState(null), 2), targetNode = _a[0], setTargetNode = _a[1];
    var ref = react_1.useCallback(function (targetNode) {
        setTargetNode(targetNode);
    }, []);
    var keyList = react_1.useMemo(function () {
        if (Array.isArray(input)) {
            return input;
        }
        else {
            return [input];
        }
    }, [input]);
    var options = Object.assign({}, defaultOptions, options_);
    var when = options.when, eventTypes = options.eventTypes;
    var callbackRef = react_1.useRef(callback);
    react_1.useEffect(function () {
        callbackRef.current = callback;
    });
    var handle = react_1.useCallback(function (e) {
        if (keyList.some(function (identifier) {
            return doesIdentifierMatchKeyboardEvent_1.doesIdentifierMatchKeyboardEvent(e, identifier);
        })) {
            callbackRef.current(e);
        }
    }, [keyList]);
    react_1.useEffect(function () {
        if (when && targetNode) {
            eventTypes.forEach(function (eventType) {
                targetNode && targetNode.addEventListener(eventType, handle);
            });
            return function () {
                eventTypes.forEach(function (eventType) {
                    targetNode && targetNode.removeEventListener(eventType, handle);
                });
            };
        }
    }, [targetNode, when, eventTypes, keyList, handle]);
    return ref;
}
exports.useKeyRef = useKeyRef;

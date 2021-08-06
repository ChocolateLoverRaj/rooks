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
import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { doesIdentifierMatchKeyboardEvent } from '../utils/doesIdentifierMatchKeyboardEvent';
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
    var _a = __read(useState(null), 2), targetNode = _a[0], setTargetNode = _a[1];
    var ref = useCallback(function (targetNode) {
        setTargetNode(targetNode);
    }, []);
    var keyList = useMemo(function () {
        if (Array.isArray(input)) {
            return input;
        }
        else {
            return [input];
        }
    }, [input]);
    var options = Object.assign({}, defaultOptions, options_);
    var when = options.when, eventTypes = options.eventTypes;
    var callbackRef = useRef(callback);
    useEffect(function () {
        callbackRef.current = callback;
    });
    var handle = useCallback(function (e) {
        if (keyList.some(function (identifier) {
            return doesIdentifierMatchKeyboardEvent(e, identifier);
        })) {
            callbackRef.current(e);
        }
    }, [keyList]);
    useEffect(function () {
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
export { useKeyRef };

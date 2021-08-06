(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.rooks = {}, global.React));
}(this, (function (exports, react) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __read(o, n) {
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
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || from);
    }

    /**
     * useDidMount hook
     * Calls a function on mount
     *
     * @param {Function} callback Callback function to be called on mount
     */
    function useDidMount(callback) {
        react.useEffect(function () {
            if (typeof callback === 'function') {
                callback();
            }
        }, []);
    }

    var config$3 = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
    };
    /**
     *
     * useMutationObserver hook
     *
     * Returns a mutation observer for a React Ref and fires a callback
     *
     * @param {MutableRefObject<HTMLElement | null>} ref React ref on which mutations are to be observed
     * @param {MutationCallback} callback Function that needs to be fired on mutation
     * @param {MutationObserverInit} options
     */
    function useMutationObserver(ref, callback, options) {
        if (options === void 0) { options = config$3; }
        react.useEffect(function () {
            // Create an observer instance linked to the callback function
            if (ref.current) {
                var observer_1 = new MutationObserver(callback);
                // Start observing the target node for configured mutations
                observer_1.observe(ref.current, options);
                return function () {
                    observer_1.disconnect();
                };
            }
        }, [callback, options]);
    }

    /**
     * @param element HTML element whose boundingclientrect is needed
     * @returns ClientRect
     */
    function getBoundingClientRect$1(element) {
        return element.getBoundingClientRect();
    }
    /**
     * useBoundingclientRect hook
     *
     * @param ref The React ref whose ClientRect is needed
     * @returns ClientRect
     */
    function useBoundingclientrect(ref) {
        var _a = __read(react.useState(null), 2), value = _a[0], setValue = _a[1];
        var update = react.useCallback(function () {
            setValue(ref.current ? getBoundingClientRect$1(ref.current) : null);
        }, []);
        useDidMount(function () {
            update();
        });
        useMutationObserver(ref, update);
        return value;
    }

    /**
     * Credit to material-ui for this snippet
     */
    function setRef$1(ref, value) {
        if (typeof ref === 'function') {
            ref(value);
        }
        else if (ref) {
            ref.current = value;
        }
    }
    /**
     * useForkRef
     * Joins refs together and returns a combination of the two as a new ref
     *
     * @param refA
     * @param refB
     */
    function useForkRef(refA, refB) {
        /**
         * This will create a new function if the ref props change and are defined.
         * This means react will call the old forkRef with `null` and the new forkRef
         * with the ref. Cleanup naturally emerges from this behavior
         */
        return react.useMemo(function () {
            if (refA == null && refB == null) {
                return null;
            }
            return function (refValue) {
                setRef$1(refA, refValue);
                setRef$1(refB, refValue);
            };
        }, [refA, refB]);
    }

    var config$2 = {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
    };
    /**
     *
     * useMutationObserverRef hook
     *
     * Returns a mutation observer for a React Ref and fires a callback
     *
     * @param {MutationCallback} callback Function that needs to be fired on mutation
     * @param {MutationObserverInit} options
     */
    function useMutationObserverRef(callback, options) {
        if (options === void 0) { options = config$2; }
        var _a = __read(react.useState(null), 2), node = _a[0], setNode = _a[1];
        react.useEffect(function () {
            // Create an observer instance linked to the callback function
            if (node) {
                var observer_1 = new MutationObserver(callback);
                // Start observing the target node for configured mutations
                observer_1.observe(node, options);
                return function () {
                    observer_1.disconnect();
                };
            }
        }, [node, callback, options]);
        var ref = react.useCallback(function (node) {
            setNode(node);
        }, []);
        return [ref];
    }

    /**
     * @param element HTML element whose boundingclientrect is needed
     * @returns ClientRect
     */
    function getBoundingClientRect(element) {
        return element.getBoundingClientRect();
    }
    /**
     * useBoundingclientrectRef hook
     *
     * @returns [CallbackRef | null, ClientRect | DOMRect | null, () => void]
     */
    function useBoundingclientrectRef() {
        var _a = __read(react.useState(null), 2), value = _a[0], setValue = _a[1];
        var _b = __read(react.useState(null), 2), node = _b[0], setNode = _b[1];
        var update = react.useCallback(function () {
            setValue(node ? getBoundingClientRect(node) : null);
        }, [node]);
        react.useEffect(function () {
            update();
        }, [node]);
        var ref = react.useCallback(function (node) {
            setNode(node);
        }, []);
        var _c = __read(useMutationObserverRef(update), 1), mutationObserverRef = _c[0];
        var forkedRef = useForkRef(ref, mutationObserverRef);
        return [forkedRef, value, update];
    }

    // See also: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
    /**
     *
     * useInterval hook
     *
     * Declaratively creates a setInterval to run a callback after a fixed
     * amount of time
     *
     *@param {funnction} callback - Callback to be fired
     *@param {number} intervalId - Interval duration in milliseconds after which the callback is to be fired
     *@param {boolean} startImmediate - Whether the interval should start immediately on initialise
     *@returns {IntervalHandler}
     */
    function useInterval(callback, intervalDuration, startImmediate) {
        if (startImmediate === void 0) { startImmediate = false; }
        var internalIdRef = react.useRef(null);
        var _a = __read(react.useState(startImmediate), 2), isRunning = _a[0], setIsRunning = _a[1];
        var savedCallback = react.useRef();
        function start() {
            if (!isRunning) {
                setIsRunning(true);
            }
        }
        function stop() {
            if (isRunning) {
                setIsRunning(false);
            }
        }
        // Remember the latest callback.
        react.useEffect(function () {
            savedCallback.current = callback;
        });
        // Set up the interval.
        react.useEffect(function () {
            function tick() {
                savedCallback.current && savedCallback.current();
            }
            if (intervalDuration !== null && isRunning) {
                var id_1 = setInterval(tick, intervalDuration);
                internalIdRef.current = id_1;
                return function () {
                    internalIdRef.current = null;
                    clearInterval(id_1);
                };
            }
        }, [intervalDuration, isRunning]);
        var handler;
        handler = [start, stop, internalIdRef.current];
        handler.start = start;
        handler.stop = stop;
        handler.intervalId = internalIdRef.current;
        return handler;
    }

    /**
     *
     * useCountdown
     * Easy way to countdown until a given endtime in intervals
     *
     * @param endTime Time to countdown
     * @param options  Countdown options
     */
    function useCountdown(endTime, options) {
        if (options === void 0) { options = {}; }
        var _a = options.interval, interval = _a === void 0 ? 1000 : _a, onDown = options.onDown, onEnd = options.onEnd;
        var _b = __read(react.useState(function () { return new Date(); }), 2), time = _b[0], setTime = _b[1];
        var restTime = endTime.getTime() - time.getTime();
        var count = restTime > 0 ? Math.ceil(restTime / interval) : 0;
        useInterval(onTick, count ? interval : null, true);
        return count;
        function onTick() {
            var newTime = new Date();
            if (newTime > endTime) {
                if (onEnd) {
                    onEnd(newTime);
                }
                setTime(endTime);
                return;
            }
            if (onDown) {
                onDown(restTime, newTime);
            }
            setTime(newTime);
        }
    }

    /**
     *
     * @typedef handler
     * @type {Object}
     * @property {number} value The value of the counter
     * @property {Function}  increment Increment counter value by 1
     * @property {Function} decrement Decrement counter value by 1
     * @property {Function} incrementBy Increment counter by incrAmount
     * @property {Function} decrementBy Decrement counter by decrAmount
     * @property {Function} reset Reset counter to initialValue
     */
    /**
     * Counter hook
     *
     * @param {number} initialValue The initial value of the counter
     * @returns {handler} A handler to interact with the counter
     */
    function useCounter(initialValue) {
        var _a = __read(react.useState(initialValue), 2), counter = _a[0], setCounter = _a[1];
        /**
         * Increment counter by an amount
         *
         * @param {number} incrAmount
         */
        var incrementBy = react.useCallback(function (incrAmount) {
            setCounter(function (currentCounter) { return currentCounter + incrAmount; });
        }, []);
        /**
         *
         * Decrement counter by an amount
         *
         * @param {*} decrAmount
         */
        var decrementBy = react.useCallback(function (decrAmount) {
            incrementBy(-decrAmount);
        }, []);
        /**
         * Increment counter by 1
         */
        var increment = react.useCallback(function () {
            incrementBy(1);
        }, []);
        /**
         * Decrement counter by 1
         */
        var decrement = react.useCallback(function () {
            incrementBy(-1);
        }, []);
        /**
         * Reset counter to initial value
         */
        var reset = react.useCallback(function () {
            setCounter(initialValue);
        }, []);
        return {
            decrement: decrement,
            decrementBy: decrementBy,
            increment: increment,
            incrementBy: incrementBy,
            reset: reset,
            value: counter,
        };
    }

    /**
     * lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="npm" -o ./`
     * Copyright jQuery Foundation and other contributors <https://jquery.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     */

    /** Used as the `TypeError` message for "Functions" methods. */
    var FUNC_ERROR_TEXT = 'Expected a function';

    /** Used as references for various `Number` constants. */
    var NAN = 0 / 0;

    /** `Object#toString` result references. */
    var symbolTag = '[object Symbol]';

    /** Used to match leading and trailing whitespace. */
    var reTrim = /^\s+|\s+$/g;

    /** Used to detect bad signed hexadecimal string values. */
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

    /** Used to detect binary string values. */
    var reIsBinary = /^0b[01]+$/i;

    /** Used to detect octal string values. */
    var reIsOctal = /^0o[0-7]+$/i;

    /** Built-in method references without a dependency on `root`. */
    var freeParseInt = parseInt;

    /** Detect free variable `global` from Node.js. */
    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

    /** Detect free variable `self`. */
    var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

    /** Used as a reference to the global object. */
    var root$1 = freeGlobal || freeSelf || Function('return this')();

    /** Used for built-in method references. */
    var objectProto = Object.prototype;

    /**
     * Used to resolve the
     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
     * of values.
     */
    var objectToString = objectProto.toString;

    /* Built-in method references for those with the same name as other `lodash` methods. */
    var nativeMax = Math.max,
        nativeMin = Math.min;

    /**
     * Gets the timestamp of the number of milliseconds that have elapsed since
     * the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Date
     * @returns {number} Returns the timestamp.
     * @example
     *
     * _.defer(function(stamp) {
     *   console.log(_.now() - stamp);
     * }, _.now());
     * // => Logs the number of milliseconds it took for the deferred invocation.
     */
    var now = function() {
      return root$1.Date.now();
    };

    /**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
    function debounce(func, wait, options) {
      var lastArgs,
          lastThis,
          maxWait,
          result,
          timerId,
          lastCallTime,
          lastInvokeTime = 0,
          leading = false,
          maxing = false,
          trailing = true;

      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
      }

      function invokeFunc(time) {
        var args = lastArgs,
            thisArg = lastThis;

        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }

      function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
      }

      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime,
            result = wait - timeSinceLastCall;

        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
      }

      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime,
            timeSinceLastInvoke = time - lastInvokeTime;

        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
      }

      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
      }

      function trailingEdge(time) {
        timerId = undefined;

        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
      }

      function cancel() {
        if (timerId !== undefined) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
      }

      function flush() {
        return timerId === undefined ? result : trailingEdge(now());
      }

      function debounced() {
        var time = now(),
            isInvoking = shouldInvoke(time);

        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;

        if (isInvoking) {
          if (timerId === undefined) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            // Handle invocations in a tight loop.
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === undefined) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }

    /**
     * Checks if `value` is the
     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(_.noop);
     * // => true
     *
     * _.isObject(null);
     * // => false
     */
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }

    /**
     * Checks if `value` is object-like. A value is object-like if it's not `null`
     * and has a `typeof` result of "object".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
     * @example
     *
     * _.isObjectLike({});
     * // => true
     *
     * _.isObjectLike([1, 2, 3]);
     * // => true
     *
     * _.isObjectLike(_.noop);
     * // => false
     *
     * _.isObjectLike(null);
     * // => false
     */
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }

    /**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }

    /**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }

    var lodash_debounce = debounce;

    /**
     * Debounce hook
     * Debounces a function
     *
     * @param {Function} callback The callback to debounce
     * @param {number} wait The duration to debounce
     * @returns {Function} The debounced callback
     */
    function useDebounce(callback, wait, options) {
        var createDebouncedCallback = react.useCallback(function (function_) {
            return lodash_debounce(function_, wait, options);
        }, [wait, options]);
        var callbackRef = react.useRef(callback);
        var debouncedCallbackRef = react.useRef(createDebouncedCallback(callback));
        react.useEffect(function () {
            callbackRef.current = callback;
        });
        react.useEffect(function () {
            debouncedCallbackRef.current = createDebouncedCallback(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                callbackRef.current.apply(callbackRef, __spreadArray([], __read(args)));
            });
        }, [wait, options, createDebouncedCallback]);
        return debouncedCallbackRef.current;
    }

    /**
     *  useDidUpdate hook
     *
     *  Fires a callback on component update
     *  Can take in a list of conditions to fire callback when one of the
     *  conditions changes
     *
     * @param {Function} callback The callback to be called on update
     * @param {Array} conditions The list of variables which trigger update when they are changed
     * @returns {undefined}
     */
    function useDidUpdate(callback, conditions) {
        var hasMountedRef = react.useRef(false);
        if (typeof conditions !== 'undefined' && !Array.isArray(conditions)) {
            conditions = [conditions];
        }
        else if (Array.isArray(conditions) && conditions.length === 0) {
            console.warn('Using [] as the second argument makes useDidUpdate a noop. The second argument should either be `undefined` or an array of length greater than 0.');
        }
        react.useEffect(function () {
            if (hasMountedRef.current) {
                callback();
            }
            else {
                hasMountedRef.current = true;
            }
        }, conditions);
    }

    /**
     * useIsomorphicEffect
     * Resolves to useEffect when "window" is not in scope and useLayout effect in the browser
     *
     * @param {Function} callback Callback function to be called on mount
     */
    var useIsomorphicEffect = typeof window === 'undefined' ? react.useEffect : react.useLayoutEffect;

    /**
     * useFreshRef
     *
     * @param value The value which needs to be fresh at all times. Probably
     * best used with functions
     * @param preferLayoutEffect Should the value be updated using a layout effect
     * or a passive effect. Defaults to false.
     * @returns A ref containing the fresh value
     */
    function useFreshRef(value, preferLayoutEffect) {
        if (preferLayoutEffect === void 0) { preferLayoutEffect = false; }
        var useEffectToUse = preferLayoutEffect ? useIsomorphicEffect : react.useEffect;
        var ref = react.useRef(value);
        useEffectToUse(function () {
            ref.current = value;
        });
        return ref;
    }

    function useFreshTick(callback) {
        var freshRef = useFreshRef(callback);
        function tick() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (freshRef && typeof freshRef.current === 'function') {
                freshRef.current.apply(freshRef, __spreadArray([], __read(args)));
            }
        }
        return tick;
    }

    /**
     *  useGlobalObjectEventListener hook
     *
     *  A react hook to an event listener to a global object
     *
     * @param {Window|Document} globalObject The global object to add event onto
     * @param {string} eventName The event to track
     * @param {Function} callback The callback to be called on event
     * @param {object} conditions The options to be passed to the event listener
     * @param {boolean} when Should the event listener be active
     * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
     * @returns {undefined}
     */
    function useGlobalObjectEventListener(globalObject, eventName, callback, listenerOptions, when, isLayoutEffect) {
        if (listenerOptions === void 0) { listenerOptions = {}; }
        if (when === void 0) { when = true; }
        if (isLayoutEffect === void 0) { isLayoutEffect = false; }
        var freshCallback = useFreshTick(callback);
        var capture = listenerOptions.capture, passive = listenerOptions.passive, once = listenerOptions.once;
        var useEffectToRun = isLayoutEffect ? useIsomorphicEffect : react.useEffect;
        useEffectToRun(function () {
            if (typeof globalObject !== "undefined" &&
                globalObject.addEventListener &&
                when) {
                globalObject.addEventListener(eventName, freshCallback, listenerOptions);
                return function () {
                    globalObject.removeEventListener(eventName, freshCallback, listenerOptions);
                };
            }
        }, [eventName, capture, passive, once]);
    }

    /**
     *
     * useOnWindowResize hook
     *
     * Fires a callback when window resizes
     *
     * @param {Function} callback Callback to be called before unmount
     * @param {boolean} when When the handler should be applied
     * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
     */
    function useOnWindowResize(callback, when, isLayoutEffect) {
        if (when === void 0) { when = true; }
        if (isLayoutEffect === void 0) { isLayoutEffect = false; }
        useGlobalObjectEventListener(window, 'resize', callback, { passive: true }, when, isLayoutEffect);
    }

    /**
     *
     * useOnWindowScroll hook
     * Fires a callback when window scroll
     *
     * @param {Function} callback Callback to be called before unmount
     * @param {boolean} when When the handler should be applied
     * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
     */
    function useOnWindowScroll(callback, when, isLayoutEffect) {
        if (when === void 0) { when = true; }
        if (isLayoutEffect === void 0) { isLayoutEffect = false; }
        useGlobalObjectEventListener(window, "scroll", callback, { passive: true }, when, isLayoutEffect);
    }

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
    var useDimensionsRef = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.updateOnScroll, updateOnScroll = _c === void 0 ? true : _c, _d = _b.updateOnResize, updateOnResize = _d === void 0 ? true : _d;
        var _e = __read(react.useState(null), 2), dimensions = _e[0], setDimensions = _e[1];
        var _f = __read(react.useState(null), 2), node = _f[0], setNode = _f[1];
        var ref = react.useCallback(function (nodeFromCallback) {
            setNode(nodeFromCallback);
        }, []);
        var measure = react.useCallback(function () {
            window.requestAnimationFrame(function () {
                if (node) {
                    setDimensions(getDimensionObject(node));
                }
            });
        }, [node]);
        react.useLayoutEffect(function () {
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

    /**
     *  useDocumentEventListener hook
     *
     *  A react hook to an event listener to the document
     *
     * @param {string} eventName The event to track
     * @param {Function} callback The callback to be called on event
     * @param {object} conditions The options to be passed to the event listener
     * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
     * @returns {undefined}
     */
    function useDocumentEventListener(eventName, callback, listenerOptions, isLayoutEffect) {
        if (listenerOptions === void 0) { listenerOptions = {}; }
        if (isLayoutEffect === void 0) { isLayoutEffect = false; }
        if (typeof document !== 'undefined') {
            useGlobalObjectEventListener(document, eventName, callback, listenerOptions, true, isLayoutEffect);
        }
        else {
            console.warn("useDocumentEventListener can't attach an event listener as document is undefined.");
        }
    }

    /**
     * useEffectOnceWhen hook
     *
     * It fires a callback once when a condition is true or become true.
     * Fires the callback at most one time.
     *
     * @param callback The callback to fire
     * @param when The condition which needs to be true
     */
    function useEffectOnceWhen(callback, when) {
        if (when === void 0) { when = true; }
        var hasRunOnceRef = react.useRef(false);
        var callbackRef = react.useRef(callback);
        react.useEffect(function () {
            callbackRef.current = callback;
        });
        react.useEffect(function () {
            if (when && !hasRunOnceRef.current) {
                callbackRef.current();
                hasRunOnceRef.current = true;
            }
        }, [when]);
    }

    /**
     * useRefElement hook for React
     * Helps bridge gap between callback ref and state
     * Manages the element called with callback ref api using state variable
     */
    function useRefElement() {
        var _a = __read(react.useState(null), 2), refElement = _a[0], setRefElement = _a[1];
        var ref = react.useCallback(function (refElement) {
            setRefElement(refElement);
        }, []);
        return [ref, refElement];
    }

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
        var _a = __read(useRefElement(), 2), ref = _a[0], element = _a[1];
        var freshCallback = useFreshTick(callback);
        var capture = listenerOptions.capture, passive = listenerOptions.passive, once = listenerOptions.once;
        var useEffectToRun = isLayoutEffect ? useIsomorphicEffect : react.useEffect;
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

    var __DEV__ = process.env.NODE_ENV !== 'production';
    var warning = function () { };
    if (__DEV__) {
        var printWarning_1 = function printWarning() {
            var actualMessage = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                actualMessage[_i] = arguments[_i];
            }
            var message = "Warning: " + actualMessage;
            if (typeof console !== 'undefined') {
                console.error(message);
            }
            try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
            }
            catch (_a) { }
        };
        warning = function (condition, actualMessage) {
            if (!condition) {
                printWarning_1(actualMessage);
            }
        };
    }

    var getFullscreenControls = function () {
        var functionMap = [
            [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
            ],
            // New WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
            ],
            // Old WebKit
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
            ],
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
            ],
            [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
            ],
        ];
        var returnValue = {};
        functionMap.forEach(function (functionSet) {
            if (functionSet && functionSet[1] in document) {
                functionSet.forEach(function (_function, index) {
                    returnValue[functionMap[0][index]] = functionSet[index];
                });
            }
        });
        return returnValue;
    };
    var noop = function () { };
    var defaultValue = {
        // isFullscreen
        element: undefined,
        // request
        exit: noop,
        isEnabled: false,
        // exit
        isFullscreen: false,
        // toggle
        onChange: noop,
        // onchange
        onError: noop,
        // onerror
        request: noop,
        toggle: noop,
    };
    function warnDeprecatedOnChangeAndOnErrorUsage() {
        warning(false, "Using onChange and onError from the return value is deprecated and \n    will be removed in the next major version. \n    Please use it with arguments instead. \n    For eg: useFullscreen({onChange: function() {}, onError: function(){}})\n  ");
    }
    /**
     * useFullscreen
     * A hook that helps make the document fullscreen
     */
    function useFullscreen(options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (typeof window === "undefined") {
            return defaultValue;
        }
        var onChangeArgument = options.onChange, onErrorArgument = options.onError, _a = options.requestFullscreenOptions, requestFullscreenOptions = _a === void 0 ? {} : _a;
        var fullscreenControls = getFullscreenControls();
        var _b = __read(react.useState(Boolean(document[fullscreenControls.fullscreenElement])), 2), isFullscreen = _b[0], setIsFullscreen = _b[1];
        var _c = __read(react.useState(document[fullscreenControls.fullscreenElement]), 2), element = _c[0], setElement = _c[1];
        var request = react.useCallback(function (element) { return __awaiter(_this, void 0, void 0, function () {
            var finalElement, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        finalElement = element || document.documentElement;
                        return [4 /*yield*/, finalElement[fullscreenControls.requestFullscreen](requestFullscreenOptions)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); }, []);
        var exit = react.useCallback(function () { return __awaiter(_this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!element) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, document[fullscreenControls.exitFullscreen]()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_2 = _a.sent();
                        console.warn(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, [element]);
        var toggle = react.useCallback(function (newElement) {
            return Boolean(element) ? exit() : newElement ? request(newElement) : null;
        }, [element]);
        var onChangeDeprecatedHandlerRef = react.useRef(noop);
        var onErrorDeprecatedHandlerRef = react.useRef(noop);
        // Hack to not break it for everyone
        // Honestly these two functions are tragedy and must be removed in v5
        var onChangeDeprecated = react.useCallback(function (callback) {
            warnDeprecatedOnChangeAndOnErrorUsage();
            return (onChangeDeprecatedHandlerRef.current = callback);
        }, []);
        var onErrorDeprecated = react.useCallback(function (callback) {
            warnDeprecatedOnChangeAndOnErrorUsage();
            return (onErrorDeprecatedHandlerRef.current = callback);
        }, []);
        useDocumentEventListener(fullscreenControls.fullscreenchange, function (event) {
            var _a;
            var currentFullscreenElement = document[fullscreenControls.fullscreenElement];
            var isOpen = Boolean(currentFullscreenElement);
            if (isOpen) {
                // fullscreen was enabled
                setIsFullscreen(true);
                setElement(currentFullscreenElement);
            }
            else {
                // fullscreen was disabled
                setIsFullscreen(false);
                setElement(null);
            }
            onChangeArgument === null || onChangeArgument === void 0 ? void 0 : onChangeArgument.call(document, event, isOpen);
            (_a = onChangeDeprecatedHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(document, event, isOpen);
        });
        useDocumentEventListener(fullscreenControls.fullscreenerror, function (event) {
            var _a;
            onErrorArgument === null || onErrorArgument === void 0 ? void 0 : onErrorArgument.call(document, event);
            (_a = onErrorDeprecatedHandlerRef.current) === null || _a === void 0 ? void 0 : _a.call(document, event);
        });
        return {
            element: element,
            exit: exit,
            isEnabled: Boolean(document[fullscreenControls.fullscreenEnabled]),
            isFullscreen: isFullscreen,
            onChange: onChangeDeprecated,
            onError: onErrorDeprecated,
            request: request,
            toggle: toggle,
        };
    }

    function getGeoLocation(options) {
        return new Promise(function (resolve, reject) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (res) {
                    var coords = res.coords;
                    var latitude = coords.latitude, longitude = coords.longitude;
                    resolve({
                        isError: false,
                        lat: latitude,
                        lng: longitude,
                        message: '',
                    });
                }, function (error) {
                    reject({ isError: true, message: error.message });
                }, options);
            }
            else {
                reject({
                    isError: true,
                    message: 'Geolocation is not supported for this Browser/OS.',
                });
            }
        });
    }
    // interface IUseGeoLocationHook {
    //   when?: boolean;
    // }
    // const defaultHookOptions = {
    //   when: true
    // };
    var defaultGeoLocationOptions = {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Number.POSITIVE_INFINITY,
        when: true,
    };
    /**
     * useGeolocation
     * Gets the geolocation data as a hook
     *
     * @param geoLocationOptions Geolocation options
     */
    function useGeolocation(
    // hooksOptions: IUseGeoLocationHook = defaultHookOptions,
    geoLocationOptions) {
        if (geoLocationOptions === void 0) { geoLocationOptions = defaultGeoLocationOptions; }
        var _a = __read(react.useState(null), 2), geoObject = _a[0], setGeoObject = _a[1];
        var when = geoLocationOptions.when, enableHighAccuracy = geoLocationOptions.enableHighAccuracy, timeout = geoLocationOptions.timeout, maximumAge = geoLocationOptions.maximumAge;
        react.useEffect(function () {
            function getGeoCode() {
                return __awaiter(this, void 0, void 0, function () {
                    var value, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, getGeoLocation({
                                        enableHighAccuracy: enableHighAccuracy,
                                        maximumAge: maximumAge,
                                        timeout: timeout,
                                        when: when,
                                    })];
                            case 1:
                                value = _a.sent();
                                setGeoObject(value);
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                setGeoObject(error_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            }
            if (when) {
                getGeoCode();
            }
        }, [when, enableHighAccuracy, timeout, maximumAge]);
        return geoObject;
    }

    var defaultOptions$4 = {};
    /**
     *
     * useInput Hook
     *
     * Handles an input's value and onChange props internally to
     * make text input creation process easier
     *
     * @param {any} [initialValue=""] Initial value of the input
     * @param {Options} [opts={}] Options object
     * @returns {InputHandler} Input handler with value and onChange
     */
    function useInput(initialValue, options) {
        if (initialValue === void 0) { initialValue = ""; }
        if (options === void 0) { options = defaultOptions$4; }
        var _a = __read(react.useState(initialValue), 2), value = _a[0], setValue = _a[1];
        var onChange = react.useCallback(function (e) {
            var newValue = e.target.value;
            var shouldUpdate = true;
            if (typeof options.validate === "function") {
                shouldUpdate = options.validate(newValue, value);
            }
            if (shouldUpdate) {
                setValue(newValue);
            }
        }, [value]);
        // sync with default value
        react.useEffect(function () {
            setValue(initialValue);
        }, [initialValue]);
        var handler = {
            onChange: onChange,
            value: value,
        };
        return handler;
    }

    /**
     * A setInterval hook that calls a callback after a interval duration
     * when a condition is true
     *
     * @param cb The callback to be invoked after interval
     * @param intervalDurationMs Amount of time in ms after which to invoke
     * @param when The condition which when true, sets the interval
     */
    function useIntervalWhen(callback_, intervalDurationMs, when) {
        if (intervalDurationMs === void 0) { intervalDurationMs = 0; }
        if (when === void 0) { when = true; }
        var savedRefCallback = react.useRef();
        react.useEffect(function () {
            savedRefCallback.current = callback_;
        });
        function callback() {
            savedRefCallback.current && savedRefCallback.current();
        }
        react.useEffect(function () {
            if (when) {
                var interval_1 = window.setInterval(callback, intervalDurationMs);
                return function () {
                    window.clearInterval(interval_1);
                };
            }
        }, [when, intervalDurationMs]);
    }

    var config$1 = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1],
    };
    /**
     *
     * useIntersectionObserverRef hook
     *
     * Returns a mutation observer for a React Ref and fires a callback
     *
     * @param {IntersectionObserverCallback} callback Function that needs to be fired on mutation
     * @param {IntersectionObserverInit} options
     */
    function useIntersectionObserverRef(callback, options) {
        if (options === void 0) { options = config$1; }
        var _a = options.root, root = _a === void 0 ? null : _a, rootMargin = options.rootMargin, threshold = options.threshold;
        var _b = __read(react.useState(null), 2), node = _b[0], setNode = _b[1];
        react.useEffect(function () {
            // Create an observer instance linked to the callback function
            if (node) {
                var observer_1 = new IntersectionObserver(callback, options);
                // Start observing the target node for configured mutations
                observer_1.observe(node);
                return function () {
                    observer_1.disconnect();
                };
            }
        }, [node, callback, root, rootMargin, threshold]);
        var ref = react.useCallback(function (node) {
            setNode(node);
        }, []);
        return [ref];
    }

    var config = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1],
    };
    /**
     *
     * useInViewRef hook
     *
     * Returns a mutation observer for a React Ref and true/false when element enters/leaves the viewport. Also fires a callback.
     *
     * @param {IntersectionObserverCallback} callback Function that needs to be fired on mutation
     * @param {IntersectionObserverInit} options
     */
    function useInViewRef(callback, options) {
        if (callback === void 0) { callback = function () { }; }
        if (options === void 0) { options = config; }
        var _a = options.root, root = _a === void 0 ? null : _a, rootMargin = options.rootMargin, threshold = options.threshold;
        var _b = __read(react.useState(null), 2), node = _b[0], setNode = _b[1];
        var _c = __read(react.useState(false), 2), inView = _c[0], setInView = _c[1];
        react.useEffect(function () {
            // Create an observer instance linked to the callback function
            if (node) {
                var observer_1 = new IntersectionObserver(function (entries, observerRef) {
                    entries.forEach(function (_a) {
                        var isIntersecting = _a.isIntersecting;
                        return setInView(isIntersecting);
                    });
                    callback(entries, observerRef);
                }, options);
                // Start observing the target node for configured mutations
                observer_1.observe(node);
                return function () {
                    observer_1.disconnect();
                };
            }
        }, [node, callback, root, rootMargin, threshold]);
        var ref = react.useCallback(function (node) {
            setNode(node);
        }, []);
        return [ref, inView];
    }

    var doesIdentifierMatchKeyboardEvent = function (error, identifier) {
        if (error.key === identifier ||
            error.code === identifier ||
            error.keyCode === identifier ||
            error.which === identifier ||
            error.charCode === identifier) {
            return true;
        }
        return false;
    };

    var defaultOptions$3 = {
        eventTypes: ['keydown'],
        when: true,
    };
    /**
     * useKey hook
     *
     * Fires a callback on keyboard events like keyDown, keyPress and keyUp
     *
     * @param {[string|number]} keyList
     * @param {Function} callback
     * @param {Options} options
     */
    function useKey(input, callback, options_) {
        var keyList = react.useMemo(function () {
            if (Array.isArray(input)) {
                return input;
            }
            else {
                return [input];
            }
        }, [input]);
        var options = Object.assign({}, defaultOptions$3, options_);
        var when = options.when, eventTypes = options.eventTypes;
        var callbackRef = react.useRef(callback);
        var target = options.target;
        react.useEffect(function () {
            callbackRef.current = callback;
        });
        var handle = react.useCallback(function (e) {
            if (keyList.some(function (identifier) {
                return doesIdentifierMatchKeyboardEvent(e, identifier);
            })) {
                callbackRef.current(e);
            }
        }, [keyList]);
        react.useEffect(function () {
            if (when && typeof window !== 'undefined') {
                var targetNode_1 = target ? target.current : window;
                eventTypes.forEach(function (eventType) {
                    targetNode_1 && targetNode_1.addEventListener(eventType, handle);
                });
                return function () {
                    eventTypes.forEach(function (eventType) {
                        targetNode_1 && targetNode_1.removeEventListener(eventType, handle);
                    });
                };
            }
        }, [when, eventTypes, keyList, target, callback]);
    }

    /**
     * useKeyBindings
     *
     * useKeyBindings binds pairs of keyboard events and handlers
     *
     * @param { [key: string]: () => void } keys
     * @param {Options} options
     */
    var useKeyBindings = function (keyBindings, options_) {
        for (var key in keyBindings) {
            useKey(key, keyBindings[key], options_);
        }
    };

    var defaultOptions$2 = {
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
        var _a = __read(react.useState(null), 2), targetNode = _a[0], setTargetNode = _a[1];
        var ref = react.useCallback(function (targetNode) {
            setTargetNode(targetNode);
        }, []);
        var keyList = react.useMemo(function () {
            if (Array.isArray(input)) {
                return input;
            }
            else {
                return [input];
            }
        }, [input]);
        var options = Object.assign({}, defaultOptions$2, options_);
        var when = options.when, eventTypes = options.eventTypes;
        var callbackRef = react.useRef(callback);
        react.useEffect(function () {
            callbackRef.current = callback;
        });
        var handle = react.useCallback(function (e) {
            if (keyList.some(function (identifier) {
                return doesIdentifierMatchKeyboardEvent(e, identifier);
            })) {
                callbackRef.current(e);
            }
        }, [keyList]);
        react.useEffect(function () {
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

    /**
     * defaultOptions which will be merged with passed in options
     */
    var defaultOptions$1 = {
        continuous: false,
        when: true,
    };
    /**
     * useKeys hook
     *
     * @param keysList
     * @param callback
     * @param opts
     */
    function useKeys(keysList, callback, options_) {
        var options = Object.assign({}, defaultOptions$1, options_);
        var target = options.target, when = options.when, continuous = options.continuous;
        var savedCallback = react.useRef(callback);
        /**
         * PressedKeyMapping will do the bookkeeping the pressed keys
         */
        var pressedKeyMappingRef = react.useRef({});
        var PressedKeyMapping = pressedKeyMappingRef.current;
        /**
         *  First useEffect is to remember the latest callback
         */
        react.useEffect(function () {
            savedCallback.current = callback;
        });
        /**
         * handleKeyDown
         *
         * @param   {KeyboardEvent}  event
         * KeyDown event handler which will wrap the passed in callback
         */
        var handleKeyDown = react.useCallback(function (event) {
            var pressedKeyIdentifier = null;
            var areAllKeysFromListPressed = false;
            // First detect the key that was pressed;
            keysList.forEach(function (identifier) {
                if (doesIdentifierMatchKeyboardEvent(event, identifier)) {
                    PressedKeyMapping[identifier] = true;
                    pressedKeyIdentifier = identifier;
                }
            });
            if (keysList.every(function (identifier) { return Boolean(PressedKeyMapping[identifier]); })) {
                areAllKeysFromListPressed = true;
            }
            if (areAllKeysFromListPressed) {
                if (savedCallback.current) {
                    savedCallback.current(event);
                }
                /**
                 * If not continuous
                 * disable identifier immediately
                 */
                if (!continuous && pressedKeyIdentifier !== null) {
                    PressedKeyMapping[pressedKeyIdentifier] = false;
                }
            }
        }, [keysList, continuous]);
        /**
         * [handleKeyUp]
         *
         * @param   {KeyboardEvent}  event
         *
         * KeyUp event handler which will update the keys pressed state in PressedKeyMapping
         */
        var handleKeyUp = react.useCallback(function (event) {
            keysList.forEach(function (identifier) {
                if (doesIdentifierMatchKeyboardEvent(event, identifier)) {
                    PressedKeyMapping[identifier] = undefined;
                }
            });
        }, []);
        /**
         * Responsible for setting up the event listener and removing event listeners
         */
        react.useEffect(function () {
            if (when && typeof window !== 'undefined') {
                var targetNode_1 = target && target.current ? target.current : document;
                if (targetNode_1) {
                    targetNode_1.addEventListener('keydown', handleKeyDown);
                    targetNode_1.addEventListener('keyup', handleKeyUp);
                }
                return function () {
                    if (targetNode_1)
                        targetNode_1.removeEventListener('keydown', handleKeyDown);
                    if (targetNode_1)
                        targetNode_1.removeEventListener('keyup', handleKeyUp);
                };
            }
        }, [when, target, keysList, handleKeyDown, handleKeyUp]);
    }

    /**
     *  useDidUpdate hook
     *
     *  Fires a callback on component update
     *  Can take in a list of conditions to fire callback when one of the
     *  conditions changes
     *  Will fire callback's cleanup function on update
     *
     * @param {Function} callback The callback and its cleanup to be called on update
     * @param {Array} conditions The list of variables which trigger update when they are changed
     * @returns {undefined}
     */
    function useUpdateEffect(callback, conditions) {
        var hasMountedRef = react.useRef(false);
        if (typeof conditions !== 'undefined' && !Array.isArray(conditions)) {
            conditions = [conditions];
        }
        else if (Array.isArray(conditions) && conditions.length === 0) {
            console.warn('Using [] as the second argument makes useUpdateEffect a noop. The second argument should either be `undefined` or an array of length greater than 0.');
        }
        react.useEffect(function () {
            if (hasMountedRef.current) {
                return callback();
            }
            else {
                hasMountedRef.current = true;
            }
        }, conditions);
    }

    /**
     * useWillUnmount hook
     * Fires a callback just before component unmounts
     *
     * @param {Function} callback Callback to be called before unmount
     */
    function useWillUnmount(callback) {
        // run only once
        react.useEffect(function () {
            return callback;
        }, []);
    }

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

    /**
     * useLocalstorage hook
     * Tracks a value within localStorage and updates it
     *
     * @param {string} key - Key of the localStorage object
     * @param {any} defaultValue - Default initial value
     */
    function useLocalstorage(key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var _a = __read(react.useState(getValueFromLocalStorage()), 2), value = _a[0], setValue = _a[1];
        function init() {
            var valueLoadedFromLocalStorage = getValueFromLocalStorage();
            if (valueLoadedFromLocalStorage === null ||
                valueLoadedFromLocalStorage === "null") {
                set(defaultValue);
            }
        }
        function getValueFromLocalStorage() {
            if (typeof localStorage === "undefined") {
                return null;
            }
            var storedValue = localStorage.getItem(key) || "null";
            try {
                return JSON.parse(storedValue);
            }
            catch (error) {
                console.error(error);
            }
            return storedValue;
        }
        function saveValueToLocalStorage(valueToSet) {
            if (typeof localStorage === "undefined") {
                return null;
            }
            return localStorage.setItem(key, JSON.stringify(valueToSet));
        }
        var set = react.useCallback(function (newValue) {
            setValue(newValue);
            saveValueToLocalStorage(newValue);
        }, []);
        var listen = react.useCallback(function (event) {
            if (event.storageArea === localStorage && event.key === key) {
                setValue(event.newValue);
            }
        }, []);
        // eslint-disable-next-line consistent-return
        var remove = react.useCallback(function () {
            set(null);
            if (typeof localStorage === "undefined") {
                return false;
            }
            localStorage.removeItem(key);
        }, [key]);
        // initialize
        react.useEffect(function () {
            init();
        }, []);
        // check for changes across windows
        react.useEffect(function () {
            window.addEventListener("storage", listen);
            return function () {
                window.removeEventListener("storage", listen);
            };
        }, []);
        var handler = Object.assign([value, set, remove], {
            value: value,
            remove: remove,
            set: set,
        });
        return handler;
    }

    function getValueFromLocalStorage(key) {
        if (typeof localStorage === "undefined") {
            return null;
        }
        var storedValue = localStorage.getItem(key) || "null";
        try {
            return JSON.parse(storedValue);
        }
        catch (error) {
            console.error(error);
        }
        return storedValue;
    }
    function saveValueToLocalStorage(key, value) {
        if (typeof localStorage === "undefined") {
            return null;
        }
        return localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * @param key Key of the localStorage object
     * @param initialState Default initial value
     */
    function initialize$1(key, initialState) {
        var valueLoadedFromLocalStorage = getValueFromLocalStorage(key);
        if (valueLoadedFromLocalStorage === null) {
            return initialState;
        }
        else {
            return valueLoadedFromLocalStorage;
        }
    }
    /**
     * useLocalstorageState hook
     * Tracks a value within localStorage and updates it
     *
     * @param {string} key - Key of the localStorage object
     * @param {any} initialState - Default initial value
     */
    function useLocalstorageState(key, initialState) {
        var _a = __read(react.useState(function () { return initialize$1(key, initialState); }), 2), value = _a[0], __setValue = _a[1];
        var isUpdateFromListener = react.useRef(false);
        react.useEffect(function () {
            /**
             * We need to ensure there is no loop of
             * storage events fired. Hence we are using a ref
             * to keep track of whether setValue is from another
             * storage event
             */
            if (!isUpdateFromListener.current) {
                saveValueToLocalStorage(key, value);
            }
        }, [value]);
        var listen = react.useCallback(function (e) {
            if (e.storageArea === localStorage && e.key === key) {
                try {
                    isUpdateFromListener.current = true;
                    var newValue = JSON.parse(e.newValue || "null");
                    if (value !== newValue) {
                        __setValue(newValue);
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        }, []);
        // check for changes across windows
        react.useEffect(function () {
            window.addEventListener("storage", listen);
            return function () {
                window.removeEventListener("storage", listen);
            };
        }, []);
        var setValue = react.useCallback(function (newValue) {
            isUpdateFromListener.current = false;
            __setValue(newValue);
        }, []);
        var remove = react.useCallback(function () {
            localStorage.removeItem(key);
        }, []);
        return [value, setValue, remove];
    }

    /**
     * usePrevious hook for React
     *
     * @param currentValue The value whose previous value is to be tracked
     * @returns The previous value
     */
    function usePrevious(currentValue) {
        var previousRef = react.useRef(null);
        react.useEffect(function () {
            previousRef.current = currentValue;
        }, [currentValue]);
        return previousRef.current;
    }

    /**
     * useMapState hook
     * A hook to manage state in the form of a map or object.
     *
     * @param initialValue Initial value of the map
     */
    function useMapState(initialValue) {
        var _a = __read(react.useState(initialValue), 2), map = _a[0], setMap = _a[1];
        return react.useMemo(function () {
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

    /**
     * useMapState hook
     * A hook to manage state in the form of a map or object.
     *
     * @param initialValue Initial value of the map
     */
    function useObjectState(initialValue) {
        var _a = __read(react.useState(initialValue), 2), map = _a[0], setMap = _a[1];
        var set = react.useCallback(function (key, value) {
            setMap(function (currentMap) {
                var _a;
                return (__assign(__assign({}, currentMap), (_a = {}, _a[key] = value, _a)));
            });
        }, []);
        var has = react.useCallback(function (key) {
            return typeof map[key] !== "undefined";
        }, [map]);
        var setMultiple = react.useCallback(function (object) {
            setMap(function (currentMap) { return (__assign(__assign({}, currentMap), object)); });
        }, []);
        var removeMultiple = react.useCallback(function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            setMap(function (currentMap) {
                var newMap = {};
                Object.keys(currentMap).forEach(function (key) {
                    if (!keys.includes(key)) {
                        newMap[key] = currentMap[key];
                    }
                });
                return newMap;
            });
        }, []);
        var remove = react.useCallback(function (key) {
            setMap(function (currentMap) {
                var newMap = {};
                Object.keys(currentMap).forEach(function (mapKey) {
                    if (mapKey !== key) {
                        newMap[mapKey] = currentMap[mapKey];
                    }
                });
                return newMap;
            });
        }, []);
        var removeAll = react.useCallback(function () {
            setMap({});
        }, []);
        var controls = {
            has: has,
            remove: remove,
            removeAll: removeAll,
            removeMultiple: removeMultiple,
            set: set,
            setMultiple: setMultiple,
        };
        return [map, controls];
    }

    function useMapOrObjectState(initialValue) {
        var isMap = initialValue instanceof Map;
        var wasMap = usePrevious(isMap);
        if (wasMap !== null && isMap !== wasMap)
            throw new Error("Cannot switch from using map to object or vice versa");
        /* eslint-disable react-hooks/rules-of-hooks */
        if (isMap)
            return useMapState(initialValue);
        else
            return useObjectState(initialValue);
        /* eslint-enable react-hooks/rules-of-hooks */
    }

    /**
     * useMediaMatch
     *
     * A react hook that signals whether or not a media query is matched.
     *
     * @param query The media query to signal on. Example, `"print"` will signal
     * `true` when previewing in print mode, and `false` otherwise.
     * @returns Whether or not the media query is currently matched.
     */
    function useMediaMatch(query) {
        if (typeof window === 'undefined') {
            console.warn('useMediaMatch cannot function as window is undefined.');
            return false;
        }
        var matchMedia = react.useMemo(function () { return window.matchMedia(query); }, [
            query,
        ]);
        var _a = __read(react.useState(function () { return matchMedia.matches; }), 2), matches = _a[0], setMatches = _a[1];
        react.useEffect(function () {
            setMatches(matchMedia.matches);
            var listener = function (event_) {
                return setMatches(event_.matches);
            };
            matchMedia.addEventListener('change', listener);
            return function () { return matchMedia.removeEventListener('change', listener); };
        }, [matchMedia]);
        return matches;
    }

    function setRef(ref, value) {
        if (typeof ref === 'function') {
            ref(value);
        }
        else if (ref) {
            ref.current = value;
        }
    }
    /**
     * useMergeRefs
     * Merges multiple refs into a single function ref.
     * Takes any number of refs.
     * Refs can be mutable refs or function refs.
     *
     * @param refs
     */
    function useMergeReferences() {
        var references = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            references[_i] = arguments[_i];
        }
        return react.useMemo(function () {
            if (references.every(function (ref) { return ref === null; })) {
                return null;
            }
            return function (refValue) {
                references.forEach(function (ref) {
                    setRef(ref, refValue);
                });
            };
        }, __spreadArray([], __read(references)));
    }

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
    function useMouse() {
        var _a = __read(react.useState(initialMouseState), 2), mousePosition = _a[0], setMousePostition = _a[1];
        function updateMousePosition(e) {
            setMousePostition(getMousePositionFromEvent(e));
        }
        react.useEffect(function () {
            document.addEventListener('mousemove', updateMousePosition);
            return function () {
                document.removeEventListener('mousemove', updateMousePosition);
            };
        }, []);
        return mousePosition;
    }

    function warnIfBothValueAndIndexAreProvided$1(functionName, object) {
        if (Object.values(object).every(function (v) { return typeof v !== "undefined"; })) {
            console.warn(functionName + ". Expected either " + Object.keys(object).join(" or ") + " to be provided. However all were provided");
        }
        else if (Object.values(object).every(function (v) { return typeof v === "undefined"; })) {
            console.warn(functionName + ". " + Object.keys(object).join(" , ") + " are all undefined.");
        }
    }
    /**
     * useMultiSelectableList
     * A custom hook to easily select multiple values from a list
     *
     * @param list
     * @param initialSelectIndices
     * @param allowUnselected
     */
    function useMultiSelectableList(list, initialSelectIndices, allowUnselected) {
        if (list === void 0) { list = []; }
        if (initialSelectIndices === void 0) { initialSelectIndices = [0]; }
        if (allowUnselected === void 0) { allowUnselected = false; }
        var _a = __read(react.useState(initialSelectIndices), 2), currentIndices = _a[0], setCurrentIndices = _a[1];
        var currentValues = currentIndices.map(function (index) { return list[index]; });
        var selection = [currentIndices, currentValues];
        var updateSelections = function (_a) {
            var indices = _a.indices, values = _a.values;
            return function () {
                warnIfBothValueAndIndexAreProvided$1("updateSelections", {
                    indices: indices,
                    values: values,
                });
                if (typeof indices !== "undefined") {
                    if (!allowUnselected && indices.length === 0) {
                        console.warn("updateSelections failed. indices is an empty list.");
                        return;
                    }
                    setCurrentIndices(indices);
                }
                else if (typeof values !== "undefined") {
                    var valueIndices = list.reduce(function (accumulator, current, index) {
                        if (values.includes(current)) {
                            var array = __spreadArray(__spreadArray([], __read(accumulator)), [index]);
                            return array;
                        }
                        return accumulator;
                    }, []);
                    if (valueIndices.length > 0) {
                        setCurrentIndices(valueIndices);
                    }
                    else if (allowUnselected) {
                        setCurrentIndices(valueIndices);
                    }
                    else {
                        console.warn("updateSelections failed. Do the values exist in the list?");
                    }
                }
            };
        };
        var toggleSelectionByIndex = react.useCallback(function (index) {
            var newIndices;
            if (!currentIndices.includes(index)) {
                newIndices = __spreadArray(__spreadArray([], __read(currentIndices)), [index]);
            }
            else {
                newIndices = __spreadArray([], __read(currentIndices));
                var indexOfIndex = currentIndices.indexOf(index);
                if (indexOfIndex !== -1) {
                    newIndices.splice(indexOfIndex, 1);
                }
            }
            if (newIndices.length > 0) {
                setCurrentIndices(newIndices);
            }
            else if (allowUnselected) {
                setCurrentIndices(newIndices);
            }
            else {
                console.warn("toggleSelection failed. Do the values exist in the list?");
            }
        }, [allowUnselected, currentIndices]);
        var toggleSelection = react.useCallback(function (_a) {
            var index = _a.index, value = _a.value;
            return function () {
                warnIfBothValueAndIndexAreProvided$1("toggleSelection", {
                    index: index,
                    value: value,
                });
                if (typeof index !== "undefined") {
                    toggleSelectionByIndex(index);
                }
                else if (typeof value !== "undefined") {
                    var valueIndex = list.indexOf(value);
                    if (valueIndex > -1) {
                        toggleSelectionByIndex(valueIndex);
                    }
                }
            };
        }, [list, toggleSelectionByIndex]);
        var matchSelection = react.useCallback(function (_a) {
            var index = _a.index, value = _a.value;
            warnIfBothValueAndIndexAreProvided$1("matchSelection", { index: index, value: value });
            if (typeof index !== "undefined") {
                return currentIndices.includes(index);
            }
            else if (typeof value !== "undefined") {
                return currentValues.includes(value);
            }
        }, [currentIndices, currentValues]);
        var controls = {
            matchSelection: matchSelection,
            toggleSelection: toggleSelection,
            updateSelections: updateSelections,
        };
        return [selection, controls];
    }

    /**
     *  useWindowEventListener hook
     *
     *  A react hook to an event listener to the window
     *
     * @param {string} eventName The event to track
     * @param {Function} callback The callback to be called on event
     * @param {object} conditions The options to be passed to the event listener
     * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
     * @returns {undefined}
     */
    function useWindowEventListener(eventName, callback, listenerOptions, isLayoutEffect) {
        if (listenerOptions === void 0) { listenerOptions = {}; }
        if (isLayoutEffect === void 0) { isLayoutEffect = false; }
        if (typeof window !== 'undefined') {
            useGlobalObjectEventListener(window, eventName, callback, listenerOptions, true, isLayoutEffect);
        }
        else {
            console.warn("useWindowEventListener can't attach an event listener as window is undefined.");
        }
    }

    function getLanguage() {
        // eslint-disable-next-line no-negated-condition
        if (typeof navigator !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/dot-notation
            return navigator.language || navigator['userLanguage'];
        }
        else {
            return null;
        }
    }
    /**
     * useNavigatorLanguage hook
     * Returns the language of the navigator
     *
     * @returns {Language}
     */
    function useNavigatorLanguage() {
        var _a = __read(react.useState(getLanguage), 2), language = _a[0], setLanguage = _a[1];
        useWindowEventListener('languagechange', function () {
            setLanguage(getLanguage);
        });
        return language;
    }

    /**
     *
     * @returns {boolean} Is navigator online
     */
    function getIsOnline() {
        if (typeof window === 'undefined') {
            return null;
        }
        return navigator.onLine;
    }
    /**
     * useOnline hook
     *
     * Returns true if navigator is online, false if not.
     *
     * @returns {boolean} The value of navigator.onLine
     */
    function useOnline() {
        var _a = __read(react.useState(function () { return getIsOnline(); }), 2), online = _a[0], changeOnline = _a[1];
        function setOffline() {
            changeOnline(false);
        }
        function setOnline() {
            changeOnline(true);
        }
        // we only needs this to be set on mount
        // hence []
        react.useEffect(function () {
            window.addEventListener('online', setOnline);
            window.addEventListener('offline', setOffline);
            return function () {
                window.removeEventListener('online', setOnline);
                window.removeEventListener('offline', setOffline);
            };
        }, []);
        return online;
    }

    /**
     *  useOutsideClick hook
     * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
     *
     * @param ref Ref whose outside click needs to be listened to
     * @param handler Callback to fire on outside click
     * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
     */
    function useOutsideClick(ref, handler, when) {
        if (when === void 0) { when = true; }
        var savedHandler = react.useRef(handler);
        var memoizedCallback = react.useCallback(function (e) {
            if (ref && ref.current && !ref.current.contains(e.target)) {
                savedHandler.current(e);
            }
        }, []);
        react.useEffect(function () {
            savedHandler.current = handler;
        });
        react.useEffect(function () {
            if (when) {
                document.addEventListener("click", memoizedCallback, true);
                document.addEventListener("ontouchstart", memoizedCallback, true);
                return function () {
                    document.removeEventListener("click", memoizedCallback, true);
                    document.removeEventListener("ontouchstart", memoizedCallback, true);
                };
            }
        }, [ref, handler, when]);
    }

    /**
     * useOutsideClickRef hook
     * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
     *
     * @param handler Callback to fire on outside click
     * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
     * @returns An array with first item being ref
     */
    function useOutsideClickRef(handler, when) {
        if (when === void 0) { when = true; }
        var savedHandler = react.useRef(handler);
        var _a = __read(react.useState(null), 2), node = _a[0], setNode = _a[1];
        var memoizedCallback = react.useCallback(function (e) {
            if (node && !node.contains(e.target)) {
                savedHandler.current(e);
            }
        }, [node]);
        react.useEffect(function () {
            savedHandler.current = handler;
        });
        var ref = react.useCallback(function (node) {
            setNode(node);
        }, []);
        react.useEffect(function () {
            if (when) {
                document.addEventListener("click", memoizedCallback, true);
                document.addEventListener("ontouchstart", memoizedCallback, true);
                return function () {
                    document.removeEventListener("click", memoizedCallback, true);
                    document.removeEventListener("ontouchstart", memoizedCallback, true);
                };
            }
        }, [when, memoizedCallback]);
        return [ref];
    }

    /**
     * usePreviousDifferent hook for React
     * It returns the past value which was different from the current one.
     *
     * @param currentValue The value whose previously different value is to be tracked
     * @returns The previous value
     */
    function usePreviousDifferent(currentValue) {
        var previousRef = react.useRef(null);
        var previousRef2 = react.useRef(null);
        react.useEffect(function () {
            previousRef2.current = previousRef.current;
            previousRef.current = currentValue;
        }, [currentValue]);
        return currentValue === previousRef.current
            ? previousRef2.current
            : previousRef.current;
    }

    /**
     * usePreviousImmediate hook for React
     *
     * @param currentValue The value whose previous value is to be tracked
     * @returns The previous value
     */
    function usePreviousImmediate(currentValue) {
        var previousRef = react.useRef(null);
        react.useEffect(function () {
            previousRef.current = currentValue;
        });
        return previousRef.current;
    }

    function useQueueState(initialList) {
        var _a = __read(react.useState(__spreadArray([], __read(initialList))), 2), list = _a[0], setList = _a[1];
        var length = list.length;
        var enqueue = react.useCallback(function (item) {
            var newList = __spreadArray(__spreadArray([], __read(list)), [item]);
            setList(newList);
            return newList.length;
        }, [list]);
        var dequeue = react.useCallback(function () {
            if (list.length > 0) {
                var firstItem = list[0];
                setList(__spreadArray([], __read(list.slice(1))));
                return firstItem;
            }
            return undefined;
        }, [list]);
        var peek = react.useCallback(function () {
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

    function createCommonjsModule(fn, basedir, module) {
    	return module = {
    		path: basedir,
    		exports: {},
    		require: function (path, base) {
    			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    		}
    	}, fn(module, module.exports), module.exports;
    }

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }

    var performanceNow = createCommonjsModule(function (module) {
    // Generated by CoffeeScript 1.12.2
    (function() {
      var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

      if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
        module.exports = function() {
          return performance.now();
        };
      } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
        module.exports = function() {
          return (getNanoSeconds() - nodeLoadTime) / 1e6;
        };
        hrtime = process.hrtime;
        getNanoSeconds = function() {
          var hr;
          hr = hrtime();
          return hr[0] * 1e9 + hr[1];
        };
        moduleLoadTime = getNanoSeconds();
        upTime = process.uptime() * 1e9;
        nodeLoadTime = moduleLoadTime - upTime;
      } else if (Date.now) {
        module.exports = function() {
          return Date.now() - loadTime;
        };
        loadTime = Date.now();
      } else {
        module.exports = function() {
          return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
      }

    }).call(this);


    });

    var root = typeof window === 'undefined' ? global : window
      , vendors = ['moz', 'webkit']
      , suffix = 'AnimationFrame'
      , raf = root['request' + suffix]
      , caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

    for(var i = 0; !raf && i < vendors.length; i++) {
      raf = root[vendors[i] + 'Request' + suffix];
      caf = root[vendors[i] + 'Cancel' + suffix]
          || root[vendors[i] + 'CancelRequest' + suffix];
    }

    // Some versions of FF have rAF but not cAF
    if(!raf || !caf) {
      var last = 0
        , id = 0
        , queue = []
        , frameDuration = 1000 / 60;

      raf = function(callback) {
        if(queue.length === 0) {
          var _now = performanceNow()
            , next = Math.max(0, frameDuration - (_now - last));
          last = next + _now;
          setTimeout(function() {
            var cp = queue.slice(0);
            // Clear queue here to prevent
            // callbacks from appending listeners
            // to the current frame's queue
            queue.length = 0;
            for(var i = 0; i < cp.length; i++) {
              if(!cp[i].cancelled) {
                try{
                  cp[i].callback(last);
                } catch(e) {
                  setTimeout(function() { throw e }, 0);
                }
              }
            }
          }, Math.round(next));
        }
        queue.push({
          handle: ++id,
          callback: callback,
          cancelled: false
        });
        return id
      };

      caf = function(handle) {
        for(var i = 0; i < queue.length; i++) {
          if(queue[i].handle === handle) {
            queue[i].cancelled = true;
          }
        }
      };
    }

    var raf_1 = function(fn) {
      // Wrap in a new function to prevent
      // `cancel` potentially being assigned
      // to the native rAF function
      return raf.call(root, fn)
    };
    var cancel = function() {
      caf.apply(root, arguments);
    };
    var polyfill = function(object) {
      if (!object) {
        object = root;
      }
      object.requestAnimationFrame = raf;
      object.cancelAnimationFrame = caf;
    };
    raf_1.cancel = cancel;
    raf_1.polyfill = polyfill;

    /**
     *
     * useRaf
     * Uses a polyfilled version of requestAnimationFrame
     *
     * @param {Function} callback The callback function to be executed
     * @param {boolean} [isActive=true] The value which while true, keeps the raf running infinitely
     */
    function useRaf(callback, isActive) {
        var savedCallback = react.useRef();
        // Remember the latest function.
        react.useEffect(function () {
            savedCallback.current = callback;
        }, [callback]);
        react.useEffect(function () {
            var animationFrame;
            var startTime;
            function tick() {
                var timeElapsed = Date.now() - startTime;
                startTime = Date.now();
                loop();
                savedCallback.current && savedCallback.current(timeElapsed);
            }
            function loop() {
                animationFrame = raf_1(tick);
            }
            if (isActive) {
                startTime = Date.now();
                loop();
                return function () {
                    raf_1.cancel(animationFrame);
                };
            }
        }, [isActive]);
    }

    /**
     * useSelect hook
     * Helps easily select a value from a list of values
     *
     * @param list List of values to select a value from
     * @param [initialIndex=0] Initial index which is selected
     * @returns handler
     */
    function useSelect(list, initialIndex) {
        if (initialIndex === void 0) { initialIndex = 0; }
        var _a = __read(react.useState(initialIndex), 2), selectedIndex = _a[0], setSelectedIndex = _a[1];
        var setItem = react.useCallback(function (item) {
            setSelectedIndex(list.indexOf(item));
        }, [list]);
        return {
            index: selectedIndex,
            item: list[selectedIndex],
            setIndex: setSelectedIndex,
            setItem: setItem,
        };
    }

    function warnIfBothValueAndIndexAreProvided(functionName, object) {
        if (Object.values(object).every(function (v) { return typeof v !== "undefined"; })) {
            console.warn(functionName + ". Expected either " + Object.keys(object).join(" or ") + " to be provided. However all were provided");
        }
        else if (Object.values(object).every(function (v) { return typeof v === "undefined"; })) {
            console.warn(functionName + ". " + Object.keys(object).join(" , ") + " are all undefined.");
        }
    }
    /**
     * useSelectableList
     * Easily select a single value from a list of values. very useful for radio buttons, select inputs  etc.
     *
     * @param list
     * @param initialIndex
     * @param allowUnselected
     */
    function useSelectableList(list, initialIndex, allowUnselected) {
        if (list === void 0) { list = []; }
        if (initialIndex === void 0) { initialIndex = 0; }
        if (allowUnselected === void 0) { allowUnselected = false; }
        var _a = __read(react.useState(initialIndex), 2), currentIndex = _a[0], setCurrentIndex = _a[1];
        var currentValue = list[currentIndex];
        var selection = [currentIndex, currentValue];
        var updateSelection = react.useCallback(function (_a) {
            var index = _a.index, value = _a.value;
            return function () {
                warnIfBothValueAndIndexAreProvided("updateSelection", { index: index, value: value });
                if (typeof index !== "undefined") {
                    setCurrentIndex(index);
                }
                else if (typeof value !== "undefined") {
                    var valueIndex = list.indexOf(value);
                    if (valueIndex > -1) {
                        setCurrentIndex(valueIndex);
                    }
                    else {
                        console.warn("updateSelection failed. Does the value " + value + " exist in the list?");
                    }
                }
            };
        }, [list]);
        var toggleSelection = react.useCallback(function (_a) {
            var index = _a.index, value = _a.value;
            return function () {
                warnIfBothValueAndIndexAreProvided("toggleSelection", { index: index, value: value });
                if (typeof index !== "undefined") {
                    if (currentIndex === index) {
                        if (allowUnselected) {
                            setCurrentIndex(-1);
                        }
                        else {
                            console.warn("allowUnselected is false. Cannot unselect item");
                        }
                    }
                    else {
                        setCurrentIndex(index);
                    }
                }
                else if (typeof value !== "undefined") {
                    var valueIndex = list.indexOf(value);
                    if (valueIndex > -1) {
                        if (currentIndex === valueIndex) {
                            if (allowUnselected) {
                                setCurrentIndex(-1);
                            }
                            else {
                                console.warn("allowUnselected is false. Cannot unselect item");
                            }
                        }
                        else {
                            setCurrentIndex(valueIndex);
                        }
                    }
                    else {
                        console.log("as");
                        console.warn("toggleSelection failed. Does the value " + value + " exist in the list?");
                    }
                }
            };
        }, [allowUnselected, currentIndex, list]);
        var matchSelection = react.useCallback(function (_a) {
            var index = _a.index, value = _a.value;
            warnIfBothValueAndIndexAreProvided("matchSelection", { index: index, value: value });
            if (typeof index !== "undefined") {
                return index === currentIndex;
            }
            else {
                return value === currentValue;
            }
        }, [currentIndex]);
        var controls = {
            matchSelection: matchSelection,
            toggleSelection: toggleSelection,
            updateSelection: updateSelection,
        };
        return [selection, controls];
    }

    function reducer$1(state, action) {
        switch (action.type) {
            case 'set':
                return action.payload;
            default:
                return state;
        }
    }
    /**
     * useSessionstorage
     * Tracks a value within sessionStorage and updates it
     *
     * @param key Key of the value to be stored
     * @param defaultValue Default value of the stored item
     */
    function useSessionstorage(key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var _a = __read(react.useReducer(reducer$1, getValueFromSessionStorage()), 2), value = _a[0], dispatch = _a[1];
        function init() {
            var initialValue = getValueFromSessionStorage();
            if (initialValue === null || initialValue === 'null') {
                set(defaultValue);
            }
        }
        function getValueFromSessionStorage() {
            if (typeof sessionStorage === 'undefined') {
                return null;
            }
            var storedValue = sessionStorage.getItem(key) || 'null';
            try {
                return JSON.parse(storedValue);
            }
            catch (error) {
                console.error(error);
            }
            return storedValue;
        }
        function saveValueToSessionStorage(valueToSet) {
            if (typeof sessionStorage === 'undefined') {
                return null;
            }
            return sessionStorage.setItem(key, JSON.stringify(valueToSet));
        }
        function setValue(valueToSet) {
            dispatch({
                payload: valueToSet,
                type: 'set',
            });
        }
        function set(newValue) {
            saveValueToSessionStorage(newValue);
            setValue(newValue);
        }
        // eslint-disable-next-line consistent-return
        function remove() {
            if (typeof sessionStorage === 'undefined') {
                return null;
            }
            sessionStorage.removeItem(key);
            setValue(null);
        }
        react.useEffect(function () {
            init();
        }, []);
        var listen = react.useCallback(function (event) {
            if (event.storageArea === sessionStorage && event.key === key) {
                set(event.newValue);
            }
        }, []);
        react.useEffect(function () {
            window.addEventListener('storage', listen);
            return function () {
                window.removeEventListener('storage', listen);
            };
        }, []);
        var handler = Object.assign([value, set, remove], {
            remove: remove,
            set: set,
            value: value,
        });
        return handler;
    }

    function getValueFromSessionStorage(key) {
        if (typeof sessionStorage === "undefined") {
            return null;
        }
        var storedValue = sessionStorage.getItem(key) || "null";
        try {
            return JSON.parse(storedValue);
        }
        catch (error) {
            console.error(error);
        }
        return storedValue;
    }
    function saveValueToSessionStorage(key, value) {
        if (typeof sessionStorage === "undefined") {
            return null;
        }
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * @param key Key of the sessionStorage object
     * @param initialState Default initial value
     */
    function initialize(key, initialState) {
        var valueLoadedFromSessionStorage = getValueFromSessionStorage(key);
        if (valueLoadedFromSessionStorage === null) {
            return initialState;
        }
        else {
            return valueLoadedFromSessionStorage;
        }
    }
    /**
     * useSessionstorageState hook
     * Tracks a value within sessionStorage and updates it
     *
     * @param {string} key - Key of the sessionStorage object
     * @param {any} initialState - Default initial value
     */
    function useSessionstorageState(key, initialState) {
        var _a = __read(react.useState(function () { return initialize(key, initialState); }), 2), value = _a[0], __setValue = _a[1];
        var isUpdateFromListener = react.useRef(false);
        react.useEffect(function () {
            /**
             * We need to ensure there is no loop of
             * storage events fired. Hence we are using a ref
             * to keep track of whether setValue is from another
             * storage event
             */
            if (!isUpdateFromListener.current) {
                saveValueToSessionStorage(key, value);
            }
        }, [value]);
        var listen = react.useCallback(function (e) {
            if (e.storageArea === sessionStorage && e.key === key) {
                try {
                    isUpdateFromListener.current = true;
                    var newValue = JSON.parse(e.newValue || "null");
                    if (value !== newValue) {
                        __setValue(newValue);
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
        }, [value]);
        // check for changes across windows
        react.useEffect(function () {
            window.addEventListener("storage", listen);
            return function () {
                window.removeEventListener("storage", listen);
            };
        }, []);
        var setValue = react.useCallback(function (newValue) {
            isUpdateFromListener.current = false;
            __setValue(newValue);
        }, []);
        var remove = react.useCallback(function () {
            sessionStorage.removeItem(key);
        }, []);
        return [value, setValue, remove];
    }

    function useStackState(initialList) {
        var _a = __read(react.useState(__spreadArray([], __read(initialList))), 2), list = _a[0], setList = _a[1];
        var length = list.length;
        var listInReverse = react.useMemo(function () {
            var reverseList = __spreadArray([], __read(list));
            reverseList.reverse();
            return reverseList;
        }, [list]);
        var push = react.useCallback(function (item) {
            var newList = __spreadArray(__spreadArray([], __read(list)), [item]);
            setList(newList);
            return newList.length;
        }, [list]);
        var pop = react.useCallback(function () {
            if (list.length > 0) {
                var lastItem = list[list.length - 1];
                setList(__spreadArray([], __read(list.slice(0, list.length - 1))));
                return lastItem;
            }
            return undefined;
        }, [list]);
        var peek = react.useCallback(function () {
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

    /**
     * useThrottle
     * Throttles a function with a timeout and ensures
     * that the callback function runs at most once in that duration
     *
     * @param fn The callback to throttle
     * @param timeout Throttle timeout
     */
    function useThrottle(function_, timeout) {
        if (timeout === void 0) { timeout = 300; }
        var _a = __read(react.useState(true), 2), ready = _a[0], setReady = _a[1];
        var timerRef = react.useRef(undefined);
        if (!function_ || typeof function_ !== 'function') {
            throw new Error('As a first argument, you need to pass a function to useThrottle hook.');
        }
        var throttledFunction = react.useCallback(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!ready) {
                return;
            }
            setReady(false);
            function_.apply(void 0, __spreadArray([], __read(args)));
        }, [ready, function_]);
        react.useEffect(function () {
            if (!ready) {
                timerRef.current = window.setTimeout(function () {
                    setReady(true);
                }, timeout);
                return function () { return window.clearTimeout(timerRef.current); };
            }
        }, [ready, timeout]);
        return [throttledFunction, ready];
    }

    /**
     * A setTimeout hook that calls a callback after a timeout duration
     *
     * @param cb The callback to be invoked after timeout
     * @param timeoutDelayMs Amount of time in ms after which to invoke
     */
    function useTimeout(callback_, timeoutDelayMs) {
        if (timeoutDelayMs === void 0) { timeoutDelayMs = 0; }
        var _a = __read(react.useState(false), 2), isTimeoutActive = _a[0], setIsTimeoutActive = _a[1];
        var savedRefCallback = react.useRef();
        react.useEffect(function () {
            savedRefCallback.current = callback_;
        }, [callback_]);
        function callback() {
            savedRefCallback.current && savedRefCallback.current();
            clear();
        }
        var clear = react.useCallback(function () {
            setIsTimeoutActive(false);
        }, []);
        var start = react.useCallback(function () {
            setIsTimeoutActive(true);
        }, []);
        react.useEffect(function () {
            if (isTimeoutActive) {
                var timeout_1 = window.setTimeout(callback, timeoutDelayMs);
                return function () {
                    window.clearTimeout(timeout_1);
                };
            }
        }, [isTimeoutActive, timeoutDelayMs]);
        return {
            clear: clear,
            isActive: isTimeoutActive,
            start: start,
            stop: clear,
        };
    }

    /**
     * A setTimeout hook that calls a callback after a timeout duration
     * when a condition is true
     *
     * @param cb The callback to be invoked after timeout
     * @param timeoutDelayMs Amount of time in ms after which to invoke
     * @param when The condition which when true, sets the timeout
     */
    function useTimeoutWhen(callback_, timeoutDelayMs, when) {
        if (timeoutDelayMs === void 0) { timeoutDelayMs = 0; }
        if (when === void 0) { when = true; }
        var savedRefCallback = react.useRef();
        react.useEffect(function () {
            savedRefCallback.current = callback_;
        });
        function callback() {
            savedRefCallback.current && savedRefCallback.current();
        }
        react.useEffect(function () {
            if (when) {
                var timeout_1 = window.setTimeout(callback, timeoutDelayMs);
                return function () {
                    window.clearTimeout(timeout_1);
                };
            }
        }, [when]);
    }

    var defaultToggleFunction = function (v) { return !v; };
    /**
     * Use toggle hook helps you easily toggle a value
     *
     * @param initialValue Initial value of the toggle
     * @param toggleFunction A toggle function. This allows for non boolean toggles
     */
    function useToggle(initialValue, toggleFunction) {
        if (initialValue === void 0) { initialValue = false; }
        if (toggleFunction === void 0) { toggleFunction = defaultToggleFunction; }
        return react.useReducer(toggleFunction, initialValue);
    }

    var defaultOptions = { maxSize: 100 };
    /**
     * useUndoState hook
     * Drop in replacement for useState hook but with undo functionality.
     *
     * @param {any} defaultValue
     * @param {UndoStateOptions} [{ maxSize }=defaultOptions]
     * @returns {[any, Function, Function]}
     */
    var useUndoState = function (defaultValue, options) {
        var maxSize = Object.assign({}, defaultOptions, options).maxSize;
        var _a = __read(react.useState([defaultValue]), 2), value = _a[0], setValue = _a[1];
        var push = react.useCallback(function (setterOrValue) {
            return setValue(function (current) {
                var restValues = current.length >= maxSize ? current.slice(0, maxSize) : current;
                if (typeof setterOrValue === 'function') {
                    return __spreadArray([setterOrValue(current[0])], __read(restValues));
                }
                else {
                    return __spreadArray([setterOrValue], __read(restValues));
                }
            });
        }, [maxSize]);
        var undo = react.useCallback(function () {
            setValue(function (current) {
                if (current.length === 1) {
                    return current;
                }
                var _a = __read(current), values = _a.slice(1);
                return values;
            });
        }, []);
        return [value[0], push, undo];
    };

    // Massive respect for Josh Johnston
    function normalizeRect(rect) {
        if (rect.width === undefined) {
            rect.width = rect.right - rect.left;
        }
        if (rect.height === undefined) {
            rect.height = rect.bottom - rect.top;
        }
        return rect;
    }
    var initialState = { isVisible: null, visibilityRect: {} };
    function reducer(state, action) {
        switch (action.type) {
            case 'set':
                if (state.isVisible === action.payload.isVisible) {
                    return state;
                }
                return action.payload;
            default:
                return state;
        }
    }
    var DEFAULT_OPTIONS = {
        containment: null,
        intervalCheck: false,
        minTopValue: 0,
        partialVisibility: false,
        resizeCheck: false,
        resizeDebounce: 250,
        resizeThrottle: -1,
        scrollCheck: true,
        scrollDebounce: 250,
        scrollThrottle: -1,
        shouldCheckOnMount: true,
    };
    /**
     * useVisibilitySensor hook
     * Tracks the visibility of a ref
     *
     * @param ref The ref to track visibility of
     * @param opts Options
     */
    function useVisibilitySensor(ref, options) {
        /*
            Create local state
          */
        var _a = __read(react.useReducer(reducer, initialState), 2), localState = _a[0], dispatch = _a[1];
        /*
            Get options
          */
        var _b = Object.assign({}, DEFAULT_OPTIONS, options), containment = _b.containment, intervalCheck = _b.intervalCheck, scrollCheck = _b.scrollCheck, shouldCheckOnMount = _b.shouldCheckOnMount, scrollDebounce = _b.scrollDebounce, scrollThrottle = _b.scrollThrottle, resizeCheck = _b.resizeCheck, resizeDebounce = _b.resizeDebounce, resizeThrottle = _b.resizeThrottle, partialVisibility = _b.partialVisibility, minTopValue = _b.minTopValue;
        function getContainer() {
            return containment || window;
        }
        /*
            Check visibility
          */
        function checkVisibility() {
            var containmentRect;
            if (containment) {
                var containmentDOMRect = containment.getBoundingClientRect();
                containmentRect = {
                    bottom: containmentDOMRect.bottom,
                    left: containmentDOMRect.left,
                    right: containmentDOMRect.right,
                    top: containmentDOMRect.top,
                };
            }
            else {
                containmentRect = {
                    bottom: window.innerHeight || document.documentElement.clientHeight,
                    left: 0,
                    right: window.innerWidth || document.documentElement.clientWidth,
                    top: 0,
                };
            }
            var rect = normalizeRect(ref.current.getBoundingClientRect());
            var hasSize = rect.height > 0 && rect.width > 0;
            var visibilityRect = {
                bottom: rect.bottom <= containmentRect.bottom,
                left: rect.left >= containmentRect.left,
                right: rect.right <= containmentRect.right,
                top: rect.top >= containmentRect.top,
            };
            var isVisible = hasSize &&
                visibilityRect.top &&
                visibilityRect.left &&
                visibilityRect.bottom &&
                visibilityRect.right;
            // check for partial visibility
            if (hasSize && partialVisibility) {
                var partialVisible = rect.top <= containmentRect.bottom &&
                    rect.bottom >= containmentRect.top &&
                    rect.left <= containmentRect.right &&
                    rect.right >= containmentRect.left;
                // account for partial visibility on a single edge
                if (typeof partialVisibility === 'string') {
                    partialVisible = visibilityRect[partialVisibility];
                }
                // if we have minimum top visibility set by props, lets check, if it meets the passed value
                // so if for instance element is at least 200px in viewport, then show it.
                isVisible = minTopValue
                    ? partialVisible && rect.top <= containmentRect.bottom - minTopValue
                    : partialVisible;
            }
            return { isVisible: isVisible, visibilityRect: visibilityRect };
        }
        function updateIsVisible() {
            if (!ref.current) {
                return;
            }
            var _a = checkVisibility(), isVisible = _a.isVisible, visibilityRect = _a.visibilityRect;
            dispatch({
                payload: { isVisible: isVisible, visibilityRect: visibilityRect },
                type: 'set',
            });
        }
        // run only once, hence empty array as second argument
        react.useEffect(function () {
            if (shouldCheckOnMount) {
                updateIsVisible();
            }
        }, []);
        react.useEffect(function () {
            updateIsVisible();
        }, [ref.current]);
        // If interval check is needed
        react.useEffect(function () {
            if (intervalCheck && intervalCheck > 0) {
                var intervalTimer_1 = setInterval(function () {
                    updateIsVisible();
                }, intervalCheck);
                return function () {
                    clearInterval(intervalTimer_1);
                };
            }
        }, [intervalCheck]);
        function createListener(event, debounce, throttle) {
            var container = getContainer();
            var timeout;
            var listener;
            var later = function () {
                timeout = null;
                updateIsVisible();
            };
            if (throttle > -1) {
                listener = function () {
                    if (!timeout) {
                        timeout = setTimeout(later, throttle || 0);
                    }
                };
            }
            else {
                listener = function () {
                    clearTimeout(timeout);
                    timeout = setTimeout(later, debounce || 0);
                };
            }
            container.addEventListener(event, listener);
            return function () {
                clearTimeout(timeout);
                container.removeEventListener(event, listener);
            };
        }
        // If scroll check is needed
        useIsomorphicEffect(function () {
            if (scrollCheck) {
                return createListener('scroll', scrollDebounce, scrollThrottle);
            }
        }, []);
        // if resize check is needed
        useIsomorphicEffect(function () {
            if (resizeCheck) {
                return createListener('resize', resizeDebounce, resizeThrottle);
            }
        }, []);
        return localState;
    }

    function getScrollPosition() {
        if (typeof window !== 'undefined') {
            return {
                scrollX: window.pageXOffset,
                scrollY: window.pageYOffset,
            };
        }
        else {
            return {
                scrollX: 0,
                scrollY: 0,
            };
        }
    }
    /**
     *
     * useWindowScrollPosition hook
     * A React hook to get the scroll position of the window
     *
     * @returns an object containing scrollX and scrollY values
     */
    function useWindowScrollPosition() {
        var _a = __read(react.useState(getScrollPosition), 2), scrollPosition = _a[0], setScrollPosition = _a[1];
        /**
         * Recalculate on scroll
         */
        useOnWindowScroll(function () {
            setScrollPosition(getScrollPosition());
        }, true, true);
        /**
         * Recalculate on resize
         */
        useOnWindowResize(function () {
            setScrollPosition(getScrollPosition());
        }, true, true);
        return scrollPosition;
    }

    var nullDimensions = {
        innerHeight: null,
        innerWidth: null,
        outerHeight: null,
        outerWidth: null,
    };
    function getDimensions() {
        return {
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
            outerHeight: window.outerHeight,
            outerWidth: window.outerWidth,
        };
    }
    /**
     * useWindowSize hook
     * A hook that provides information of the dimensions of the window
     *
     * @returns Dimensions of the window
     */
    function useWindowSize() {
        var _a = __read(react.useState(function () {
            if (typeof window !== 'undefined') {
                return getDimensions();
            }
            else {
                return nullDimensions;
            }
        }), 2), windowSize = _a[0], setWindowSize = _a[1];
        // set resize handler once on mount and clean before unmount
        useIsomorphicEffect(function () {
            function onResize() {
                setWindowSize(getDimensions());
            }
            window.addEventListener('resize', onResize);
            return function () {
                window.removeEventListener('resize', onResize);
            };
        }, []);
        return windowSize;
    }

    exports.useBoundingclientrect = useBoundingclientrect;
    exports.useBoundingclientrectRef = useBoundingclientrectRef;
    exports.useCountdown = useCountdown;
    exports.useCounter = useCounter;
    exports.useDebounce = useDebounce;
    exports.useDidMount = useDidMount;
    exports.useDidUpdate = useDidUpdate;
    exports.useDimensionsRef = useDimensionsRef;
    exports.useDocumentEventListener = useDocumentEventListener;
    exports.useEffectOnceWhen = useEffectOnceWhen;
    exports.useEventListenerRef = useEventListenerRef;
    exports.useForkRef = useForkRef;
    exports.useFreshRef = useFreshRef;
    exports.useFreshTick = useFreshTick;
    exports.useFullscreen = useFullscreen;
    exports.useGeolocation = useGeolocation;
    exports.useInViewRef = useInViewRef;
    exports.useInput = useInput;
    exports.useIntersectionObserverRef = useIntersectionObserverRef;
    exports.useInterval = useInterval;
    exports.useIntervalWhen = useIntervalWhen;
    exports.useIsomorphicEffect = useIsomorphicEffect;
    exports.useKey = useKey;
    exports.useKeyBindings = useKeyBindings;
    exports.useKeyRef = useKeyRef;
    exports.useKeys = useKeys;
    exports.useLifecycleLogger = useLifecycleLogger;
    exports.useLocalstorage = useLocalstorage;
    exports.useLocalstorageState = useLocalstorageState;
    exports.useMapState = useMapOrObjectState;
    exports.useMediaMatch = useMediaMatch;
    exports.useMergeRefs = useMergeReferences;
    exports.useMouse = useMouse;
    exports.useMultiSelectableList = useMultiSelectableList;
    exports.useMutationObserver = useMutationObserver;
    exports.useMutationObserverRef = useMutationObserverRef;
    exports.useNavigatorLanguage = useNavigatorLanguage;
    exports.useOnWindowResize = useOnWindowResize;
    exports.useOnWindowScroll = useOnWindowScroll;
    exports.useOnline = useOnline;
    exports.useOutsideClick = useOutsideClick;
    exports.useOutsideClickRef = useOutsideClickRef;
    exports.usePrevious = usePrevious;
    exports.usePreviousDifferent = usePreviousDifferent;
    exports.usePreviousImmediate = usePreviousImmediate;
    exports.useQueueState = useQueueState;
    exports.useRaf = useRaf;
    exports.useSelect = useSelect;
    exports.useSelectableList = useSelectableList;
    exports.useSessionstorage = useSessionstorage;
    exports.useSessionstorageState = useSessionstorageState;
    exports.useStackState = useStackState;
    exports.useThrottle = useThrottle;
    exports.useTimeout = useTimeout;
    exports.useTimeoutWhen = useTimeoutWhen;
    exports.useToggle = useToggle;
    exports.useUndoState = useUndoState;
    exports.useUpdateEffect = useUpdateEffect;
    exports.useVisibilitySensor = useVisibilitySensor;
    exports.useWillUnmount = useWillUnmount;
    exports.useWindowEventListener = useWindowEventListener;
    exports.useWindowScrollPosition = useWindowScrollPosition;
    exports.useWindowSize = useWindowSize;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rooks.js.map

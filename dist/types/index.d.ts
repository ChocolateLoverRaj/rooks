/// <reference types="react" />
import { MutableRefObject, LegacyRef, RefObject, useEffect, Ref, Dispatch, SetStateAction } from 'react';
import { OptionalIndexValue, OptionalIndicesValues } from '@/types/index-value';

/**
 * useBoundingclientRect hook
 *
 * @param ref The React ref whose ClientRect is needed
 * @returns ClientRect
 */
declare function useBoundingclientrect(ref: MutableRefObject<HTMLElement | null>): ClientRect | DOMRect | null;

declare type HTMLElementOrNull = HTMLElement | null;
declare type RefElementOrNull<T> = T | null;
declare type CallbackRef = (node: HTMLElementOrNull) => any;
declare type AnyRef = CallbackRef | MutableRefObject<HTMLElementOrNull>;

/**
 * useBoundingclientrectRef hook
 *
 * @returns [CallbackRef | null, ClientRect | DOMRect | null, () => void]
 */
declare function useBoundingclientrectRef(): [
    CallbackRef | null,
    ClientRect | DOMRect | null,
    () => void
];

declare type CountdownOptions = {
    interval?: number;
    onDown?: Function;
    onEnd?: Function;
};
/**
 *
 * useCountdown
 * Easy way to countdown until a given endtime in intervals
 *
 * @param endTime Time to countdown
 * @param options  Countdown options
 */
declare function useCountdown(endTime: Date, options?: CountdownOptions): number;

declare type CounterHandler = {
    value: number;
    increment: () => void;
    decrement: () => void;
    incrementBy: (amount: number) => void;
    decrementBy: (amount: number) => void;
    reset: () => void;
};
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
declare function useCounter(initialValue: number): CounterHandler;

/**
 * Debounce hook
 * Debounces a function
 *
 * @param {Function} callback The callback to debounce
 * @param {number} wait The duration to debounce
 * @returns {Function} The debounced callback
 */
declare function useDebounce(callback: Function, wait: number, options?: {}): Function;

/**
 * useDidMount hook
 * Calls a function on mount
 *
 * @param {Function} callback Callback function to be called on mount
 */
declare function useDidMount(callback: () => any): void;

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
declare function useDidUpdate(callback: () => any, conditions?: any[]): void;

declare type UseDimensionsRefReturn = {
    width: number;
    height: number;
    top: number;
    left: number;
    x: number;
    y: number;
    right: number;
    bottom: number;
} | null;
declare type UseDimensionsHook = [
    LegacyRef<HTMLDivElement> | undefined,
    UseDimensionsRefReturn,
    HTMLElement | null
];
declare type UseDimensionsRefArgs = {
    updateOnScroll?: boolean;
    updateOnResize?: boolean;
};
declare const useDimensionsRef: ({ updateOnScroll, updateOnResize, }?: UseDimensionsRefArgs) => UseDimensionsHook;

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
declare function useDocumentEventListener(eventName: string, callback: (...args: any) => void, listenerOptions?: any, isLayoutEffect?: boolean): void;

/**
 * useEffectOnceWhen hook
 *
 * It fires a callback once when a condition is true or become true.
 * Fires the callback at most one time.
 *
 * @param callback The callback to fire
 * @param when The condition which needs to be true
 */
declare function useEffectOnceWhen(callback: () => void, when?: boolean): void;

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
declare function useEventListenerRef(eventName: string, callback: (...args: any) => void, listenerOptions?: any, isLayoutEffect?: boolean): (refElement: RefElementOrNull<HTMLElement>) => void;

/**
 * useFreshRef
 *
 * @param value The value which needs to be fresh at all times. Probably
 * best used with functions
 * @param preferLayoutEffect Should the value be updated using a layout effect
 * or a passive effect. Defaults to false.
 * @returns A ref containing the fresh value
 */
declare function useFreshRef<T>(value: T, preferLayoutEffect?: boolean): RefObject<T>;

declare function useFreshTick(callback: (...args: any[]) => void): (...args: any[]) => void;

declare type EventCallback = (this: Document, event_: any) => any;
declare type OnChangeEventCallback = (this: Document, event_: any, isOpen: boolean) => any;
declare type NoopFunction = () => void;
declare type FullscreenApi = {
    isEnabled: boolean;
    toggle: NoopFunction | ((element?: HTMLElement) => Promise<unknown>);
    /** @deprecated Please use useFullScreen({onChange : function() {}}) instead. */
    onChange: NoopFunction | ((callback: OnChangeEventCallback) => void);
    /** @deprecated Please use useFullScreen({onError : function() {}}) instead. */
    onError: NoopFunction | ((callback: EventCallback) => void);
    request: NoopFunction | ((element?: HTMLElement) => Promise<unknown>);
    exit: NoopFunction | (() => Promise<unknown>);
    isFullscreen: boolean;
    element: HTMLElement | null | undefined;
};
declare type RequestFullscreenOptions = {
    navigationUI?: string | "auto" | "hide" | "show";
};
declare type FullScreenOptions = {
    onChange?: OnChangeEventCallback;
    onError?: EventCallback;
    requestFullscreenOptions?: RequestFullscreenOptions;
};
/**
 * useFullscreen
 * A hook that helps make the document fullscreen
 */
declare function useFullscreen(options?: FullScreenOptions): FullscreenApi | undefined;

/**
 * useForkRef
 * Joins refs together and returns a combination of the two as a new ref
 *
 * @param refA
 * @param refB
 */
declare function useForkRef(refA: AnyRef, refB: AnyRef): CallbackRef | null;

declare type IGetGeoLocation = {
    lat?: number;
    lng?: number;
    isError: boolean;
    message: string;
};
declare type IOptions = {
    enableHighAccuracy?: boolean;
    timeout?: number;
    maximumAge?: number;
    when?: boolean;
};
/**
 * useGeolocation
 * Gets the geolocation data as a hook
 *
 * @param geoLocationOptions Geolocation options
 */
declare function useGeolocation(geoLocationOptions?: IOptions): IGetGeoLocation | null;


declare type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
declare type InputHandler = {
    /**
     * The current value of the input
     */
    value: any;
    /**
     * Function to handle onChange of an input element
     *
     * @param event The input change event
     */
    onChange: (e: InputChangeEvent) => void;
};
declare type Options$4 = {
    /**
     * validate
     *
     * Validator function which can be used to prevent updates
     *
     * @param {any} New value
     * @param {any} Current value
     * @returns {boolean} Whether an update should happen or not
     *
     * */
    validate?: (newValue: any, currentValue: any) => boolean;
};
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
declare function useInput(initialValue?: any, options?: Options$4): InputHandler;

declare type IntervalHandlerAsArray = Array<ReturnType<typeof setTimeout> | (() => void) | null> & {
    0: () => void;
    1: () => void;
    2: ReturnType<typeof setTimeout> | null;
};
declare type IntervalHandler = {} & IntervalHandlerAsArray;
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
declare function useInterval(callback: () => any, intervalDuration: number | null, startImmediate?: boolean): IntervalHandler;

/**
 * A setInterval hook that calls a callback after a interval duration
 * when a condition is true
 *
 * @param cb The callback to be invoked after interval
 * @param intervalDurationMs Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the interval
 */
declare function useIntervalWhen(callback_: () => void, intervalDurationMs?: number, when?: boolean): void;

/**
 *
 * useIntersectionObserverRef hook
 *
 * Returns a mutation observer for a React Ref and fires a callback
 *
 * @param {IntersectionObserverCallback} callback Function that needs to be fired on mutation
 * @param {IntersectionObserverInit} options
 */
declare function useIntersectionObserverRef(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): [CallbackRef];

/**
 *
 * useInViewRef hook
 *
 * Returns a mutation observer for a React Ref and true/false when element enters/leaves the viewport. Also fires a callback.
 *
 * @param {IntersectionObserverCallback} callback Function that needs to be fired on mutation
 * @param {IntersectionObserverInit} options
 */
declare function useInViewRef(callback?: IntersectionObserverCallback, options?: IntersectionObserverInit): [CallbackRef, boolean];

/**
 * useIsomorphicEffect
 * Resolves to useEffect when "window" is not in scope and useLayout effect in the browser
 *
 * @param {Function} callback Callback function to be called on mount
 */
declare const useIsomorphicEffect: typeof useEffect;

declare type Options$3 = {
    /**
     * Condition which if true, will enable the event listeners
     */
    when?: boolean;
    /**
     * Keyboardevent types to listen for. Valid options are keyDown, keyPress and keyUp
     */
    eventTypes?: Array<number | string>;
    /**
     * target ref on which the events should be listened. If no target is specified,
     * events are listened to on the window
     */
    target?: Ref<HTMLElement>;
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
declare function useKey(input: Array<number | string> | number | string, callback: (e: KeyboardEvent) => any, options_?: Options$3): void;

declare type Options$2 = {
    /**
     * Condition which if true, will enable the event listeners
     */
    when?: boolean;
    /**
     * Keyboardevent types to listen for. Valid options are keyDown, keyPress and keyUp
     */
    eventTypes?: Array<number | string>;
    /**
     * target ref on which the events should be listened. If no target is specified,
     * events are listened to on the window
     */
    target?: Ref<HTMLElement>;
};
/**
 * useKeyBindings
 *
 * useKeyBindings binds pairs of keyboard events and handlers
 *
 * @param { [key: string]: () => void } keys
 * @param {Options} options
 */
declare const useKeyBindings: (keyBindings: {
    [key: string]: () => void;
}, options_?: Options$2 | undefined) => void;

declare type Options$1 = {
    /**
     * Condition which if true, will enable the event listeners
     */
    when?: boolean;
    /**
     * Keyboardevent types to listen for. Valid options are keyDown, keyPress and keyUp
     */
    eventTypes?: Array<number | string>;
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
declare function useKeyRef(input: Array<number | string> | number | string, callback: (e: KeyboardEvent) => any, options_?: Options$1): CallbackRef;

declare type Options = {
    /**
     * when boolean to enable and disable events, when passed false
     * remove the eventlistener if any
     */
    when?: boolean;
    /**
     * should the event logging be continuous
     */
    continuous?: boolean;
    /**
     * target ref on which the events should be listened. If no target is specified,
     * events are listened to on the document
     */
    target?: MutableRefObject<Document> | MutableRefObject<HTMLElement | null>;
};
/**
 * useKeys hook
 *
 * @param keysList
 * @param callback
 * @param opts
 */
declare function useKeys(keysList: string[], callback: (e: KeyboardEvent) => any, options_?: Options): void;

/**
 * useLifecycleLogger hook
 * logs parameters as component transitions through lifecycles
 *
 * @param componentName Name of the component
 * @param rest
 */
declare const useLifecycleLogger: (componentName?: string, ...otherArgs: unknown[]) => void;

declare type StorageHandlerAsObject$1 = {
    value: any;
    set: (newValue: any) => void;
    remove: () => void;
};
declare type StorageHandlerAsArray$1 = [any, (newValue: any) => void, () => void];
declare type StorageHandler$1 = StorageHandlerAsArray$1 & StorageHandlerAsObject$1;
/**
 * useLocalstorage hook
 * Tracks a value within localStorage and updates it
 *
 * @param {string} key - Key of the localStorage object
 * @param {any} defaultValue - Default initial value
 */
declare function useLocalstorage(key: string, defaultValue?: any): StorageHandler$1;

/**
 * useLocalstorageState hook
 * Tracks a value within localStorage and updates it
 *
 * @param {string} key - Key of the localStorage object
 * @param {any} initialState - Default initial value
 */
declare function useLocalstorageState<S>(key: string, initialState?: S | (() => S)): [S, Dispatch<SetStateAction<S>>, () => void];

declare type MapControls<K, V> = Omit<Omit<Map<K, V>, "delete">, "set"> & {
    setMultiple: (additionalMap: Map<K, V>) => void;
    delete: (key: K) => void;
    deleteMultiple: (...keys: K[]) => void;
    set: (key: K, value: V) => void;
};

declare type UseObjectStateResult = [
    object,
    {
        set: (key: any, value: any) => void;
        has: (key: any) => boolean;
        setMultiple: (...keys: any[]) => void;
        remove: (key: any) => void;
        removeMultiple: (...keys: any[]) => void;
        removeAll: () => void;
    }
];

declare function useMapOrObjectState<K, V>(initialValue: Map<K, V>): MapControls<K, V>;
declare function useMapOrObjectState(initialValue: object): UseObjectStateResult;

/**
 * useMediaMatch
 *
 * A react hook that signals whether or not a media query is matched.
 *
 * @param query The media query to signal on. Example, `"print"` will signal
 * `true` when previewing in print mode, and `false` otherwise.
 * @returns Whether or not the media query is currently matched.
 */
declare function useMediaMatch(query: string): boolean;

/**
 * useMergeRefs
 * Merges multiple refs into a single function ref.
 * Takes any number of refs.
 * Refs can be mutable refs or function refs.
 *
 * @param refs
 */
declare function useMergeReferences(...references: AnyRef[]): CallbackRef | null;

declare type MouseData = {
    x: number | null;
    y: number | null;
    screenX: number | null;
    screenY: number | null;
    pageX: number | null;
    pageY: number | null;
    clientX: number | null;
    clientY: number | null;
    movementX: number | null;
    movementY: number | null;
    offsetX: number | null;
    offsetY: number | null;
};
/**
 * useMouse hook
 *
 * Retrieves current mouse position and information about the position like
 * screenX, pageX, clientX, movementX, offsetX
 */
declare function useMouse(): MouseData;

/**
 * useMultiSelectableList
 * A custom hook to easily select multiple values from a list
 *
 * @param list
 * @param initialSelectIndices
 * @param allowUnselected
 */
declare function useMultiSelectableList<T>(list?: T[], initialSelectIndices?: number[], allowUnselected?: boolean): [
    Array<number[] | T[]>,
    {
        toggleSelection: (parameters: OptionalIndexValue<T>) => () => void;
        matchSelection: (parameters: OptionalIndexValue<T>) => void;
        updateSelections: ({ indices, values, }: OptionalIndicesValues<T>) => () => void;
    }
];

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
declare function useMutationObserver(ref: MutableRefObject<HTMLElement | null>, callback: MutationCallback, options?: MutationObserverInit): void;

/**
 *
 * useMutationObserverRef hook
 *
 * Returns a mutation observer for a React Ref and fires a callback
 *
 * @param {MutationCallback} callback Function that needs to be fired on mutation
 * @param {MutationObserverInit} options
 */
declare function useMutationObserverRef(callback: MutationCallback, options?: MutationObserverInit): [CallbackRef];

declare type Language = string | null;
/**
 * useNavigatorLanguage hook
 * Returns the language of the navigator
 *
 * @returns {Language}
 */
declare function useNavigatorLanguage(): Language;

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
declare function useOnWindowResize(callback: (event: any) => void, when?: boolean, isLayoutEffect?: boolean): void;

/**
 *
 * useOnWindowScroll hook
 * Fires a callback when window scroll
 *
 * @param {Function} callback Callback to be called before unmount
 * @param {boolean} when When the handler should be applied
 * @param {boolean} isLayoutEffect Should it use layout effect. Defaults to false
 */
declare function useOnWindowScroll(callback: (event: any) => void, when?: boolean, isLayoutEffect?: boolean): void;

/**
 * useOnline hook
 *
 * Returns true if navigator is online, false if not.
 *
 * @returns {boolean} The value of navigator.onLine
 */
declare function useOnline(): boolean | null;

/**
 *  useOutsideClick hook
 * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
 *
 * @param ref Ref whose outside click needs to be listened to
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 */
declare function useOutsideClick(ref: MutableRefObject<HTMLElement | null>, handler: (e: MouseEvent) => any, when?: boolean): void;

/**
 * useOutsideClickRef hook
 * Checks if a click happened outside a Ref. Handy for dropdowns, modals and popups etc.
 *
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 * @returns An array with first item being ref
 */
declare function useOutsideClickRef(handler: (e: MouseEvent) => any, when?: boolean): [CallbackRef];

/**
 * usePrevious hook for React
 *
 * @param currentValue The value whose previous value is to be tracked
 * @returns The previous value
 */
declare function usePrevious<T>(currentValue: T): T | null;

/**
 * usePreviousDifferent hook for React
 * It returns the past value which was different from the current one.
 *
 * @param currentValue The value whose previously different value is to be tracked
 * @returns The previous value
 */
declare function usePreviousDifferent<T>(currentValue: T): T | null;

/**
 * usePreviousImmediate hook for React
 *
 * @param currentValue The value whose previous value is to be tracked
 * @returns The previous value
 */
declare function usePreviousImmediate<T>(currentValue: T): T | null;

declare function useQueueState(initialList: any[]): [
    any[],
    {
        enqueue: (item: any) => number;
        dequeue: () => any | undefined;
        peek: () => any | undefined;
        length: number;
    }
];

/**
 *
 * useRaf
 * Uses a polyfilled version of requestAnimationFrame
 *
 * @param {Function} callback The callback function to be executed
 * @param {boolean} [isActive=true] The value which while true, keeps the raf running infinitely
 */
declare function useRaf(callback: (timeElapsed: number) => void, isActive: boolean): void;

declare type SelectHandler<T> = {
    index: number;
    item: T;
    setIndex: (newIndex: number) => void;
    setItem: (newItem: T) => void;
};
/**
 * useSelect hook
 * Helps easily select a value from a list of values
 *
 * @param list List of values to select a value from
 * @param [initialIndex=0] Initial index which is selected
 * @returns handler
 */
declare function useSelect<T>(list: T[], initialIndex?: number): SelectHandler<T>;

/**
 * useSelectableList
 * Easily select a single value from a list of values. very useful for radio buttons, select inputs  etc.
 *
 * @param list
 * @param initialIndex
 * @param allowUnselected
 */
declare function useSelectableList<T>(list?: T[], initialIndex?: number, allowUnselected?: boolean): [
    Array<T | number>,
    {
        updateSelection: (parameters: OptionalIndexValue<T>) => () => void;
        toggleSelection: (parameters: OptionalIndexValue<T>) => () => void;
        matchSelection: (parameters: OptionalIndexValue<T>) => void;
    }
];

declare type StorageHandlerAsObject = {
    value: any;
    set: (newValue: any) => void;
    remove: () => void;
};
declare type StorageHandlerAsArray = [any, (newValue: any) => void, () => void];
declare type StorageHandler = StorageHandlerAsArray & StorageHandlerAsObject;
/**
 * useSessionstorage
 * Tracks a value within sessionStorage and updates it
 *
 * @param key Key of the value to be stored
 * @param defaultValue Default value of the stored item
 */
declare function useSessionstorage(key: string, defaultValue?: any): StorageHandler;

/**
 * useSessionstorageState hook
 * Tracks a value within sessionStorage and updates it
 *
 * @param {string} key - Key of the sessionStorage object
 * @param {any} initialState - Default initial value
 */
declare function useSessionstorageState<S>(key: string, initialState?: S | (() => S)): [S, Dispatch<SetStateAction<S>>, () => void];

declare function useStackState(initialList: any[]): [
    any[],
    {
        push: (item: any) => number;
        pop: () => any | undefined;
        peek: () => any | undefined;
        length: number;
    },
    any[]
];

/**
 * useThrottle
 * Throttles a function with a timeout and ensures
 * that the callback function runs at most once in that duration
 *
 * @param fn The callback to throttle
 * @param timeout Throttle timeout
 */
declare function useThrottle(function_: Function, timeout?: number): [(...args: any) => any, boolean];

declare type UseTimeoutHandler = {
    start: () => any;
    clear: () => any;
    stop: () => any;
    isActive: boolean;
};
/**
 * A setTimeout hook that calls a callback after a timeout duration
 *
 * @param cb The callback to be invoked after timeout
 * @param timeoutDelayMs Amount of time in ms after which to invoke
 */
declare function useTimeout(callback_: () => void, timeoutDelayMs?: number): UseTimeoutHandler;

/**
 * A setTimeout hook that calls a callback after a timeout duration
 * when a condition is true
 *
 * @param cb The callback to be invoked after timeout
 * @param timeoutDelayMs Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the timeout
 */
declare function useTimeoutWhen(callback_: () => void, timeoutDelayMs?: number, when?: boolean): void;

/**
 * Use toggle hook helps you easily toggle a value
 *
 * @param initialValue Initial value of the toggle
 * @param toggleFunction A toggle function. This allows for non boolean toggles
 */
declare function useToggle(initialValue?: any, toggleFunction?: (state: any, action: any) => any): [any, (action: any) => any];

declare type UndoStateOptions = {
    maxSize: number;
};
/**
 * useUndoState hook
 * Drop in replacement for useState hook but with undo functionality.
 *
 * @param {any} defaultValue
 * @param {UndoStateOptions} [{ maxSize }=defaultOptions]
 * @returns {[any, Function, Function]}
 */
declare const useUndoState: (defaultValue: any, options?: UndoStateOptions | undefined) => [any, (previousState: any) => any, () => void];

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
declare function useUpdateEffect(callback: () => any, conditions?: any[]): void;

/**
 * useVisibilitySensor hook
 * Tracks the visibility of a ref
 *
 * @param ref The ref to track visibility of
 * @param opts Options
 */
declare function useVisibilitySensor(ref: any, options: any): any;

/**
 * useWillUnmount hook
 * Fires a callback just before component unmounts
 *
 * @param {Function} callback Callback to be called before unmount
 */
declare function useWillUnmount(callback: () => any): void;

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
declare function useWindowEventListener(eventName: string, callback: (...args: any) => void, listenerOptions?: any, isLayoutEffect?: boolean): void;

declare type ScrollPosition = {
    scrollX: number;
    scrollY: number;
};
/**
 *
 * useWindowScrollPosition hook
 * A React hook to get the scroll position of the window
 *
 * @returns an object containing scrollX and scrollY values
 */
declare function useWindowScrollPosition(): ScrollPosition;

declare type WindowDimensions = {
    innerWidth: number | null;
    innerHeight: number | null;
    outerWidth: number | null;
    outerHeight: number | null;
};
/**
 * useWindowSize hook
 * A hook that provides information of the dimensions of the window
 *
 * @returns Dimensions of the window
 */
declare function useWindowSize(): WindowDimensions;

export { useBoundingclientrect, useBoundingclientrectRef, useCountdown, useCounter, useDebounce, useDidMount, useDidUpdate, useDimensionsRef, useDocumentEventListener, useEffectOnceWhen, useEventListenerRef, useForkRef, useFreshRef, useFreshTick, useFullscreen, useGeolocation, useInViewRef, useInput, useIntersectionObserverRef, useInterval, useIntervalWhen, useIsomorphicEffect, useKey, useKeyBindings, useKeyRef, useKeys, useLifecycleLogger, useLocalstorage, useLocalstorageState, useMapOrObjectState as useMapState, useMediaMatch, useMergeReferences as useMergeRefs, useMouse, useMultiSelectableList, useMutationObserver, useMutationObserverRef, useNavigatorLanguage, useOnWindowResize, useOnWindowScroll, useOnline, useOutsideClick, useOutsideClickRef, usePrevious, usePreviousDifferent, usePreviousImmediate, useQueueState, useRaf, useSelect, useSelectableList, useSessionstorage, useSessionstorageState, useStackState, useThrottle, useTimeout, useTimeoutWhen, useToggle, useUndoState, useUpdateEffect, useVisibilitySensor, useWillUnmount, useWindowEventListener, useWindowScrollPosition, useWindowSize };

/**
 * A setInterval hook that calls a callback after a interval duration
 * when a condition is true
 *
 * @param cb The callback to be invoked after interval
 * @param intervalDurationMs Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the interval
 */
declare function useIntervalWhen(callback_: () => void, intervalDurationMs?: number, when?: boolean): void;
export { useIntervalWhen };

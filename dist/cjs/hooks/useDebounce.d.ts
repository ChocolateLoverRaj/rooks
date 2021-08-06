/**
 * Debounce hook
 * Debounces a function
 *
 * @param {Function} callback The callback to debounce
 * @param {number} wait The duration to debounce
 * @returns {Function} The debounced callback
 */
declare function useDebounce(callback: Function, wait: number, options?: {}): Function;
export { useDebounce };

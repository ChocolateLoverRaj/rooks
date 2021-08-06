import { useKey } from './useKey';
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
export { useKeyBindings };

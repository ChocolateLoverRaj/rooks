"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrevious = void 0;
var react_1 = require("react");
/**
 * usePrevious hook for React
 *
 * @param currentValue The value whose previous value is to be tracked
 * @returns The previous value
 */
function usePrevious(currentValue) {
    var previousRef = react_1.useRef(null);
    react_1.useEffect(function () {
        previousRef.current = currentValue;
    }, [currentValue]);
    return previousRef.current;
}
exports.usePrevious = usePrevious;

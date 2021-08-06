import { useRef, useEffect } from 'react';
/**
 * usePreviousImmediate hook for React
 *
 * @param currentValue The value whose previous value is to be tracked
 * @returns The previous value
 */
function usePreviousImmediate(currentValue) {
    var previousRef = useRef(null);
    useEffect(function () {
        previousRef.current = currentValue;
    });
    return previousRef.current;
}
export { usePreviousImmediate };

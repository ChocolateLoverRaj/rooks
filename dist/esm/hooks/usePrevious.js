import { useRef, useEffect } from 'react';
/**
 * usePrevious hook for React
 *
 * @param currentValue The value whose previous value is to be tracked
 * @returns The previous value
 */
function usePrevious(currentValue) {
    var previousRef = useRef(null);
    useEffect(function () {
        previousRef.current = currentValue;
    }, [currentValue]);
    return previousRef.current;
}
export { usePrevious };

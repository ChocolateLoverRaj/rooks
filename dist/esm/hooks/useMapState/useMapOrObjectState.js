import { usePrevious } from "../usePrevious";
import { useMapState } from "./useMapState";
import { useObjectState } from "./useObjectState";
export function useMapOrObjectState(initialValue) {
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

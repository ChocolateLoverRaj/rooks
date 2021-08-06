export declare type UseObjectStateResult = [
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
/**
 * useMapState hook
 * A hook to manage state in the form of a map or object.
 *
 * @param initialValue Initial value of the map
 */
declare function useObjectState(initialValue: object): UseObjectStateResult;
export { useObjectState };

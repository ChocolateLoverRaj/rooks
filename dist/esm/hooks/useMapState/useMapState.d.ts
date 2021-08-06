export declare type MapControls<K, V> = Omit<Omit<Map<K, V>, "delete">, "set"> & {
    setMultiple: (additionalMap: Map<K, V>) => void;
    delete: (key: K) => void;
    deleteMultiple: (...keys: K[]) => void;
    set: (key: K, value: V) => void;
};
/**
 * useMapState hook
 * A hook to manage state in the form of a map or object.
 *
 * @param initialValue Initial value of the map
 */
declare function useMapState<K, V>(initialValue: Map<K, V>): MapControls<K, V>;
export { useMapState };

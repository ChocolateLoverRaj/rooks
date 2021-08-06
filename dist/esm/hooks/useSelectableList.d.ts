import type { OptionalIndexValue } from "@/types/index-value";
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
export { useSelectableList };

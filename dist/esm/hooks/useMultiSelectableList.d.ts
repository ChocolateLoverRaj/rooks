import type { OptionalIndexValue, OptionalIndicesValues } from "@/types/index-value";
/**
 * useMultiSelectableList
 * A custom hook to easily select multiple values from a list
 *
 * @param list
 * @param initialSelectIndices
 * @param allowUnselected
 */
declare function useMultiSelectableList<T>(list?: T[], initialSelectIndices?: number[], allowUnselected?: boolean): [
    Array<number[] | T[]>,
    {
        toggleSelection: (parameters: OptionalIndexValue<T>) => () => void;
        matchSelection: (parameters: OptionalIndexValue<T>) => void;
        updateSelections: ({ indices, values, }: OptionalIndicesValues<T>) => () => void;
    }
];
export { useMultiSelectableList };

import type { MapControls } from "./useMapState";
import type { UseObjectStateResult } from "./useObjectState";
export declare function useMapOrObjectState<K, V>(initialValue: Map<K, V>): MapControls<K, V>;
export declare function useMapOrObjectState(initialValue: object): UseObjectStateResult;

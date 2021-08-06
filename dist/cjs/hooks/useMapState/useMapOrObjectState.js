"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMapOrObjectState = void 0;
var usePrevious_1 = require("../usePrevious");
var useMapState_1 = require("./useMapState");
var useObjectState_1 = require("./useObjectState");
function useMapOrObjectState(initialValue) {
    var isMap = initialValue instanceof Map;
    var wasMap = usePrevious_1.usePrevious(isMap);
    if (wasMap !== null && isMap !== wasMap)
        throw new Error("Cannot switch from using map to object or vice versa");
    /* eslint-disable react-hooks/rules-of-hooks */
    if (isMap)
        return useMapState_1.useMapState(initialValue);
    else
        return useObjectState_1.useObjectState(initialValue);
    /* eslint-enable react-hooks/rules-of-hooks */
}
exports.useMapOrObjectState = useMapOrObjectState;

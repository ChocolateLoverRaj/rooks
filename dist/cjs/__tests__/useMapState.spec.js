"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_hooks_1 = require("@testing-library/react-hooks");
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var useMapState_1 = require("../hooks/useMapState");
var act = react_test_renderer_1.default.act;
describe("useMapState", function () {
    describe("with object", function () {
        it("should be defined", function () {
            expect(useMapState_1.useMapState).toBeDefined();
        });
        it("should initialize correctly", function () {
            var result = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1 }); }).result;
            expect(result.current[0]).toEqual({ a: 1 });
        });
        it("should set a new value correctly", function () {
            var _a = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1 }); }), result = _a.result, rerender = _a.rerender;
            // test memo
            var setBeforeRerender = result.current[1].set;
            rerender();
            var setAfterRerender = result.current[1].set;
            expect(setBeforeRerender).toBe(setAfterRerender);
            act(function () {
                result.current[1].set("b", 2);
            });
            expect(result.current[0]).toEqual({ a: 1, b: 2 });
            // test memo after rerender
            act(function () {
                result.current[1].set("c", 2);
            });
            expect(result.current[0]).toEqual({ a: 1, b: 2, c: 2 });
        });
        it("should update old value correctly", function () {
            var result = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1 }); }).result;
            act(function () {
                result.current[1].set("a", 2);
            });
            expect(result.current[0]).toEqual({ a: 2 });
        });
        it("should set multiple new values correctly", function () {
            var _a = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1 }); }), result = _a.result, rerender = _a.rerender;
            // test memo
            var setMultipleBeforeRerender = result.current[1].setMultiple;
            rerender();
            var setMultipleAfterRerender = result.current[1].setMultiple;
            expect(setMultipleBeforeRerender).toBe(setMultipleAfterRerender);
            // should reflect to new value
            act(function () {
                result.current[1].set("d", 4);
                result.current[1].setMultiple({
                    b: 2,
                    c: 3,
                });
            });
            expect(result.current[0]).toEqual({ a: 1, b: 2, c: 3, d: 4 });
        });
        it("should update old value correctly", function () {
            var _a = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1 }); }), result = _a.result, rerender = _a.rerender;
            act(function () {
                result.current[1].setMultiple({
                    a: 2,
                    b: 3,
                });
            });
            // test memo
            var hasBeforeRerender = result.current[1].has;
            rerender();
            var hasAfterRerender = result.current[1].has;
            expect(hasBeforeRerender).toBe(hasAfterRerender);
            expect(result.current[0]).toEqual({ a: 2, b: 3 });
            expect(result.current[1].has("a")).toBeTruthy();
            expect(result.current[1].has("b")).toBeTruthy();
            // test recreate fn usecallback
            act(function () {
                result.current[1].set("c", 4);
            });
            expect(result.current[1].has("c")).toBeTruthy();
        });
        it("should remove existing values correctly", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState({ a: 1, b: 3 });
            }), result = _a.result, rerender = _a.rerender;
            // test memo
            var hasBeforeRerender = result.current[1].has;
            rerender();
            var hasAfterRerender = result.current[1].has;
            expect(hasBeforeRerender).toBe(hasAfterRerender);
            act(function () {
                result.current[1].set("c", 2);
            });
            act(function () {
                result.current[1].remove("a");
            });
            expect(result.current[0]).toEqual({ b: 3, c: 2 });
            act(function () {
                result.current[1].remove("c");
            });
            expect(result.current[0]).toEqual({ b: 3 });
        });
        it("should work when value to remove does not exist", function () {
            var result = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1, b: 2, c: 3 }); }).result;
            act(function () {
                result.current[1].remove("d");
            });
            expect(result.current[0]).toEqual({ a: 1, b: 2, c: 3 });
        });
        it("should remove multiple existing values correctly", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState({ a: 1, b: 3, c: 5 });
            }), result = _a.result, rerender = _a.rerender;
            // test memo
            var removeMultipleBeforeRerender = result.current[1].removeMultiple;
            rerender();
            var removeMultipleAfterRerender = result.current[1].removeMultiple;
            expect(removeMultipleBeforeRerender).toBe(removeMultipleAfterRerender);
            // load new items
            act(function () {
                result.current[1].set("e", 6);
            });
            expect(result.current[0]).toEqual({ a: 1, b: 3, c: 5, e: 6 });
            // should be reactive against new value
            act(function () {
                result.current[1].removeMultiple("a", "c");
            });
            expect(result.current[0]).toEqual({ b: 3, e: 6 });
        });
        it("should work when value to removeMultiple does not exist", function () {
            var result = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1, b: 2, c: 3 }); }).result;
            act(function () {
                result.current[1].removeMultiple("d", "e");
            });
            expect(result.current[0]).toEqual({ a: 1, b: 2, c: 3 });
        });
        it("should work when some values to removeMultiple does not exist", function () {
            var result = react_hooks_1.renderHook(function () { return useMapState_1.useMapState({ a: 1, b: 2, c: 3 }); }).result;
            act(function () {
                result.current[1].removeMultiple("a", "e");
            });
            expect(result.current[0]).toEqual({ b: 2, c: 3 });
        });
        it("should removeAll values", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState({ a: 1, b: 2, c: 3 });
            }), result = _a.result, rerender = _a.rerender;
            // test memo
            var removeAllBeforeRerender = result.current[1].removeAll;
            rerender();
            var removeAllAfterRerender = result.current[1].removeAll;
            expect(removeAllBeforeRerender).toBe(removeAllAfterRerender);
            act(function () {
                result.current[1].removeAll();
            });
            expect(result.current[0]).toEqual({});
        });
    });
    describe("with map", function () {
        it("should be defined", function () {
            expect(useMapState_1.useMapState).toBeDefined();
        });
        it("should initialize correctly", function () {
            var result = react_hooks_1.renderHook(function () { return useMapState_1.useMapState(new Map([["a", 1]])); }).result;
            expect(__spreadArray([], __read(result.current))).toEqual([["a", 1]]);
        });
        it("should set a new value correctly", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([["a", 1]]));
            }), result = _a.result, rerender = _a.rerender;
            // test memo
            var setBeforeRerender = result.current.set;
            rerender();
            var setAfterRerender = result.current.set;
            expect(setBeforeRerender).toBe(setAfterRerender);
            act(function () {
                result.current.set("b", 2);
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["a", 1],
                ["b", 2],
            ]);
            // test memo after rerender
            act(function () {
                result.current.set("c", 2);
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["a", 1],
                ["b", 2],
                ["c", 2],
            ]);
        });
        it("should update old value correctly", function () {
            var result = react_hooks_1.renderHook(function () { return useMapState_1.useMapState(new Map([["a", 1]])); }).result;
            act(function () {
                result.current.set("a", 2);
            });
            expect(__spreadArray([], __read(result.current))).toEqual([["a", 2]]);
        });
        it("should set multiple new values correctly", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([["a", 1]]));
            }), result = _a.result, rerender = _a.rerender;
            // test memo
            var setMultipleBeforeRerender = result.current.setMultiple;
            rerender();
            var setMultipleAfterRerender = result.current.setMultiple;
            expect(setMultipleBeforeRerender).toBe(setMultipleAfterRerender);
            // should reflect to new value
            act(function () {
                result.current.set("d", 4);
                result.current.setMultiple(new Map([
                    ["b", 2],
                    ["c", 3],
                ]));
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["a", 1],
                ["d", 4],
                ["b", 2],
                ["c", 3],
            ]);
        });
        it("should update old value correctly", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([["a", 1]]));
            }), result = _a.result, rerender = _a.rerender;
            act(function () {
                result.current.setMultiple(new Map([
                    ["a", 2],
                    ["b", 3],
                ]));
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["a", 2],
                ["b", 3],
            ]);
            // test recreate fn usecallback
            act(function () {
                result.current.set("c", 4);
            });
            expect(result.current.has("c")).toBe(true);
        });
        it("should remove existing values correctly", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([
                    ["a", 1],
                    ["b", 3],
                ]));
            }), result = _a.result, rerender = _a.rerender;
            act(function () {
                result.current.set("c", 2);
            });
            act(function () {
                result.current.delete("a");
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["b", 3],
                ["c", 2],
            ]);
            act(function () {
                result.current.delete("c");
            });
            expect(__spreadArray([], __read(result.current))).toEqual([["b", 3]]);
        });
        it("should work when value to remove does not exist", function () {
            var result = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([
                    ["a", 1],
                    ["b", 2],
                    ["c", 3],
                ]));
            }).result;
            act(function () {
                result.current.delete("d");
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]);
        });
        it("should delete multiple existing values correctly", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([
                    ["a", 1],
                    ["b", 3],
                    ["c", 5],
                ]));
            }), result = _a.result, rerender = _a.rerender;
            // test memo
            var deleteMultipleBeforeRerender = result.current.deleteMultiple;
            rerender();
            var removeMultipleAfterRerender = result.current.deleteMultiple;
            expect(deleteMultipleBeforeRerender).toBe(removeMultipleAfterRerender);
            // load new items
            act(function () {
                result.current.set("e", 6);
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["a", 1],
                ["b", 3],
                ["c", 5],
                ["e", 6],
            ]);
            // should be reactive against new value
            act(function () {
                result.current.deleteMultiple("a", "c");
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["b", 3],
                ["e", 6],
            ]);
        });
        it("should work when value to removeMultiple does not exist", function () {
            var result = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([
                    ["a", 1],
                    ["b", 2],
                    ["c", 3],
                ]));
            }).result;
            act(function () {
                result.current.deleteMultiple("d", "e");
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["a", 1],
                ["b", 2],
                ["c", 3],
            ]);
        });
        it("should work when some values to removeMultiple does not exist", function () {
            var result = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([
                    ["a", 1],
                    ["b", 2],
                    ["c", 3],
                ]));
            }).result;
            act(function () {
                result.current.deleteMultiple("a", "e");
            });
            expect(__spreadArray([], __read(result.current))).toEqual([
                ["b", 2],
                ["c", 3],
            ]);
        });
        it("should clear values", function () {
            var _a = react_hooks_1.renderHook(function () {
                return useMapState_1.useMapState(new Map([
                    ["a", 1],
                    ["b", 2],
                    ["c", 3],
                ]));
            }), result = _a.result, rerender = _a.rerender;
            // test memo
            var removeAllBeforeRerender = result.current.clear;
            rerender();
            var clearAfterRerender = result.current.clear;
            expect(removeAllBeforeRerender).toBe(clearAfterRerender);
            act(function () {
                result.current.clear();
            });
            expect(__spreadArray([], __read(result.current))).toEqual([]);
        });
    });
});

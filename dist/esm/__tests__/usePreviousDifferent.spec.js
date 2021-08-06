var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
/**
 * @jest-environment jsdom
 */
import { act, renderHook } from '@testing-library/react-hooks';
import { useState } from 'react';
import { usePreviousDifferent } from '../hooks/usePreviousDifferent';
describe('usePreviousDifferent', function () {
    var useHook;
    beforeEach(function () {
        useHook = function () {
            var _a = __read(useState(0), 2), value = _a[0], setValue = _a[1];
            var _b = __read(useState(0), 2), value2 = _b[0], setValue2 = _b[1];
            var previousValue = usePreviousDifferent(value);
            var increment = function () {
                setValue(value + 1);
            };
            var increment2 = function () {
                setValue2(value2 + 1);
            };
            return { increment: increment, increment2: increment2, previousValue: previousValue, value: value, value2: value2 };
        };
    });
    it('isDefined', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(usePreviousDifferent).toBeDefined();
            return [2 /*return*/];
        });
    }); });
    it('initially returns null', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            result = renderHook(function () { return useHook(); }).result;
            expect(result.current.previousValue).toBeNull();
            return [2 /*return*/];
        });
    }); });
    it('holds the previous value', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            result = renderHook(function () { return useHook(); }).result;
            act(function () {
                result.current.increment();
            });
            expect(result.current.value).toBe(1);
            expect(result.current.previousValue).toBe(0);
            return [2 /*return*/];
        });
    }); });
    it('does not update the previous value if current value is unchanged', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            result = renderHook(function () { return useHook(); }).result;
            act(function () {
                result.current.increment();
            });
            expect(result.current.value).toBe(1);
            expect(result.current.previousValue).toBe(0);
            act(function () {
                result.current.increment2();
            });
            expect(result.current.value2).toBe(1);
            expect(result.current.value).toBe(1);
            expect(result.current.previousValue).toBe(0);
            act(function () {
                result.current.increment2();
            });
            act(function () {
                result.current.increment();
            });
            act(function () {
                result.current.increment2();
            });
            expect(result.current.value2).toBe(3);
            expect(result.current.value).toBe(2);
            expect(result.current.previousValue).toBe(1);
            return [2 /*return*/];
        });
    }); });
});
// figure out tests

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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { cleanup, render, act, fireEvent, waitFor, } from "@testing-library/react";
import React, { useState } from "react";
import { useThrottle } from "../hooks/useThrottle";
describe("useThrottle hook", function () {
    var App;
    var TIMEOUT = 300;
    var consoleError = console.error;
    // This is a temporary fix for weird error in testing library. It has something to do with react-dom.
    // There's a ticket here - https://github.com/facebook/react/issues/14769
    // Tests are passing correctly, so that's just for clean console.
    beforeAll(function () {
        jest.spyOn(console, "error").mockImplementation(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!args[0].includes("Warning: An update to %s inside a test was not wrapped in act")) {
                consoleError.apply(void 0, __spreadArray([], __read(args)));
            }
        });
    });
    beforeEach(function () {
        App = function () {
            var _a = __read(useState(0), 2), number = _a[0], setNumber = _a[1];
            var _b = __read(useState(0), 2), argumentNumber = _b[0], setArgumentNumber = _b[1];
            var addNumber = function () { return setNumber(number + 1); };
            var _c = __read(useThrottle(addNumber, TIMEOUT), 1), addNumberThrottled = _c[0];
            var addNumberWithParameter = function (argumentNumber_) {
                setArgumentNumber(argumentNumber_ + 2);
                setNumber(number + 1);
            };
            var _d = __read(useThrottle(function () { return addNumberWithParameter(5); }, 1000), 1), addNumberThrottledWithParameter = _d[0];
            return (React.createElement("div", null,
                React.createElement("span", { "data-testid": "throttle-value" }, number),
                React.createElement("span", { "data-testid": "throttle-value-with-param" }, argumentNumber),
                React.createElement("button", { "data-testid": "throttle-button", onClick: addNumberThrottled }, "Add number throttled"),
                React.createElement("button", { "data-testid": "throttle-button-with-param", onClick: addNumberThrottledWithParameter }, "Add number throttled")));
        };
    });
    afterEach(cleanup);
    it("should be defined", function () {
        expect(useThrottle).toBeDefined();
    });
    it("should update value when used once", function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var throttleButton = getByTestId("throttle-button");
        var throttleValue = getByTestId("throttle-value");
        act(function () {
            fireEvent.click(throttleButton);
        });
        expect(Number.parseInt(throttleValue.innerHTML)).toBe(1);
    });
    it("should update value once when clicked multiple times, one after another", function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var throttleButton = getByTestId("throttle-button");
        var throttleValue = getByTestId("throttle-value");
        act(function () {
            fireEvent.click(throttleButton);
        });
        act(function () {
            fireEvent.click(throttleButton);
        });
        act(function () {
            fireEvent.click(throttleButton);
        });
        expect(Number.parseInt(throttleValue.innerHTML)).toBe(1);
    });
    it("should update value twice when clicked twice, with 300ms break between them", function () { return __awaiter(void 0, void 0, void 0, function () {
        var getByTestId, throttleButton, throttleValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    getByTestId = render(React.createElement(App, null)).getByTestId;
                    throttleButton = getByTestId("throttle-button");
                    throttleValue = getByTestId("throttle-value");
                    act(function () {
                        fireEvent.click(throttleButton);
                    });
                    return [4 /*yield*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                act(function () {
                                    fireEvent.click(throttleButton);
                                    resolve(0);
                                });
                            }, TIMEOUT);
                        })];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, waitFor(function () {
                            expect(Number.parseInt(throttleValue.innerHTML)).toBe(2);
                        }, {
                            timeout: TIMEOUT,
                        })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should update value of state acording to argument passed in callback", function () { return __awaiter(void 0, void 0, void 0, function () {
        var getByTestId, throttleButtonWithParameter, throttleValueWithParameter, throttleValue;
        return __generator(this, function (_a) {
            getByTestId = render(React.createElement(App, null)).getByTestId;
            throttleButtonWithParameter = getByTestId("throttle-button-with-param");
            throttleValueWithParameter = getByTestId("throttle-value-with-param");
            throttleValue = getByTestId("throttle-value");
            act(function () {
                fireEvent.click(throttleButtonWithParameter);
            });
            expect(Number.parseInt(throttleValue.innerHTML)).toBe(1);
            expect(Number.parseInt(throttleValueWithParameter.innerHTML)).toBe(7);
            return [2 /*return*/];
        });
    }); });
});

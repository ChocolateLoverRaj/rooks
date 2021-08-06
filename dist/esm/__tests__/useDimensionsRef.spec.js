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
import { render, cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import React from "react";
import { useDimensionsRef } from "../hooks/useDimensionsRef";
import { DOMRectPolyfill } from "../utils/domrect-polyfill";
describe("useDimensionsRef", function () {
    it("should be defined", function () {
        expect(useDimensionsRef).toBeDefined();
    });
    describe("base", function () {
        it("runs immediately after mount", function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                expect.assertions(1);
                result = renderHook(function () { return useDimensionsRef(); }).result;
                expect(result.current[0]).toBeDefined();
                return [2 /*return*/];
            });
        }); });
    });
    describe("usage", function () {
        var App;
        beforeEach(function () {
            if (typeof window !== "undefined" && !window.DOMRect) {
                window.DOMRect = DOMRectPolyfill;
            }
            jest
                .spyOn(Element.prototype, "getBoundingClientRect")
                .mockImplementation(function () { return new DOMRect(0, 0, 120, 300); });
            App = function () {
                var _a;
                var _b = __read(useDimensionsRef(), 2), ref = _b[0], dimensions = _b[1];
                return (React.createElement("div", null,
                    React.createElement("span", { "data-testid": "value" }, (_a = dimensions === null || dimensions === void 0 ? void 0 : dimensions.width) !== null && _a !== void 0 ? _a : "null"),
                    React.createElement("span", { "data-testid": "element", ref: ref }, "Hello")));
            };
        });
        afterEach(cleanup);
        it("gets called if a state value changes", function () {
            var getByTestId = render(React.createElement(App, null)).getByTestId;
            var valueElement = getByTestId("value");
            expect(valueElement.textContent).toEqual("120");
        });
    });
    beforeEach(function () {
        // eslint-disable-next-line promise/prefer-await-to-callbacks
        jest
            .spyOn(window, "requestAnimationFrame")
            .mockImplementation(function (callback) { return callback(); });
    });
    afterEach(function () {
        window.requestAnimationFrame.mockRestore();
    });
});

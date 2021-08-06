"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
var react_1 = require("@testing-library/react");
var react_2 = __importStar(require("react"));
var useDidUpdate_1 = require("../hooks/useDidUpdate");
describe('useDidUpdate', function () {
    var App;
    beforeEach(function () {
        App = function () {
            var _a = __read(react_2.useState(0), 2), value = _a[0], setValue = _a[1];
            var _b = __read(react_2.useState(0), 2), hasUpdated = _b[0], setHasUpdated = _b[1];
            useDidUpdate_1.useDidUpdate(function () {
                setHasUpdated(hasUpdated + 1);
            }, [value > 0]);
            return (react_2.default.createElement("div", null,
                react_2.default.createElement("button", { "data-testid": "trigger-btn", onClick: function () { return setValue(value + 1); } }, "Trigger updation"),
                react_2.default.createElement("span", { "data-testid": "value" }, value.toString()),
                react_2.default.createElement("span", { "data-testid": "element" }, hasUpdated)));
        };
    });
    afterEach(react_1.cleanup); // <-- add this
    it('should be defined', function () {
        expect(useDidUpdate_1.useDidUpdate).toBeDefined();
    });
    it('initializes correctly', function () {
        var getByTestId = react_1.render(react_2.default.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
    });
    it('does not get called on mount', function () {
        var getByTestId = react_1.render(react_2.default.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
    });
    it('gets called if a state value changes', function () {
        var getByTestId = react_1.render(react_2.default.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        var valueElement = getByTestId('value');
        var triggerElement = getByTestId('trigger-btn');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
        react_1.act(function () {
            react_1.fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(1);
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(1);
    });
    it('does not get called if state value has not updated', function () {
        var getByTestId = react_1.render(react_2.default.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        var valueElement = getByTestId('value');
        var triggerElement = getByTestId('trigger-btn');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
        react_1.act(function () {
            react_1.fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(1);
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(1);
        react_1.act(function () {
            react_1.fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(2);
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(1);
    });
});
describe('useDidUpdate', function () {
    var App;
    beforeEach(function () {
        App = function () {
            var _a = __read(react_2.useState(0), 2), value = _a[0], setValue = _a[1];
            var _b = __read(react_2.useState(0), 2), hasUpdated = _b[0], setHasUpdated = _b[1];
            useDidUpdate_1.useDidUpdate(function () {
                setHasUpdated(hasUpdated + 1);
            }, []);
            return (react_2.default.createElement("div", null,
                react_2.default.createElement("button", { "data-testid": "trigger-btn", onClick: function () { return setValue(value + 1); } }, "Trigger updation"),
                react_2.default.createElement("span", { "data-testid": "value" }, value.toString()),
                react_2.default.createElement("span", { "data-testid": "element" }, hasUpdated)));
        };
    });
    afterEach(react_1.cleanup);
    it('warns if conditionals is empty array', function () {
        var spy = jest.spyOn(global.console, 'warn');
        react_1.render(react_2.default.createElement(App, null));
        expect(spy).toHaveBeenCalled();
    });
});

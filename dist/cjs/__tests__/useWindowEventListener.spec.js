"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_2 = __importDefault(require("react"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var useCounter_1 = require("../hooks/useCounter");
var useWindowEventListener_1 = require("../hooks/useWindowEventListener");
var act = react_test_renderer_1.default.act;
describe('useWindowEventListener', function () {
    it('should be defined', function () {
        expect(useWindowEventListener_1.useWindowEventListener).toBeDefined();
    });
    it('should return a undefined', function () {
        var result = react_hooks_1.renderHook(function () {
            return useWindowEventListener_1.useWindowEventListener('click', function () {
                console.log('clicked');
            });
        }).result;
        expect(typeof result.current).toBe('undefined');
    });
});
describe('useWindowEventListener jsx', function () {
    var mockCallback;
    var TestJSX;
    beforeEach(function () {
        mockCallback = jest.fn(function () { });
        TestJSX = function () {
            useWindowEventListener_1.useWindowEventListener('click', mockCallback);
            return null;
        };
    });
    it('should not call callback by default', function () {
        react_1.render(react_2.default.createElement(TestJSX, null));
        expect(mockCallback).toHaveBeenCalledTimes(0);
    });
    it('should not call callback when event fires', function () {
        react_1.render(react_2.default.createElement(TestJSX, null));
        act(function () {
            react_1.fireEvent.click(window);
        });
        expect(mockCallback).toHaveBeenCalledTimes(1);
        act(function () {
            react_1.fireEvent.click(window);
            react_1.fireEvent.click(window);
            react_1.fireEvent.click(window);
        });
        expect(mockCallback).toHaveBeenCalledTimes(4);
    });
});
describe('useWindowEventListener state variables', function () {
    var TestJSX;
    beforeEach(function () {
        TestJSX = function () {
            var _a = useCounter_1.useCounter(0), increment = _a.increment, value = _a.value;
            useWindowEventListener_1.useWindowEventListener('click', increment);
            return react_2.default.createElement("div", { "data-testid": "value" }, value);
        };
    });
    it('should not call callback by default', function () {
        var container = react_1.render(react_2.default.createElement(TestJSX, null)).container;
        var valueElement = react_1.getByTestId(container, 'value');
        expect(Number.parseInt(valueElement.innerHTML)).toBe(0);
    });
    it('should not call callback when event fires', function () {
        var container = react_1.render(react_2.default.createElement(TestJSX, null)).container;
        var valueElement = react_1.getByTestId(container, 'value');
        expect(Number.parseInt(valueElement.innerHTML)).toBe(0);
        act(function () {
            react_1.fireEvent.click(window);
            react_1.fireEvent.click(window);
            react_1.fireEvent.click(window);
        });
        expect(Number.parseInt(valueElement.innerHTML)).toBe(3);
    });
});

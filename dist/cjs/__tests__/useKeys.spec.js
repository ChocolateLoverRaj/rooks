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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var useKeys_1 = require("../hooks/useKeys");
describe('useKeys', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var documentRef = react_2.default.useRef(document);
            var inputRef = react_2.default.useRef(null);
            var _a = __read(react_2.default.useState(true), 2), isEventActive = _a[0], setIsEventActive = _a[1];
            var _b = __read(react_2.default.useState(0), 1), testValue = _b[0];
            var _c = __read(react_2.default.useState(0), 2), firstCallbackCallCount = _c[0], setFirstCallbackCallCount = _c[1];
            useKeys_1.useKeys(['ControlLeft', 's'], function () {
                setFirstCallbackCallCount(firstCallbackCallCount + 1);
            }, {
                target: documentRef,
                when: isEventActive,
            });
            useKeys_1.useKeys(['m', 'r'], function () {
                setFirstCallbackCallCount(firstCallbackCallCount + 1);
            }, {
                target: inputRef,
                when: isEventActive,
            });
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { id: "test-id" }, testValue),
                react_2.default.createElement("p", { "data-testid": "first-callback" }, firstCallbackCallCount),
                react_2.default.createElement("button", { "data-testid": "toggle", onClick: function () {
                        setIsEventActive(!isEventActive);
                    } }, "Toggle event enabled"),
                react_2.default.createElement("div", { className: "grid-container" },
                    react_2.default.createElement("input", { className: "box1", "data-testid": "input-dom", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(react_1.cleanup);
    it('should be defined', function () {
        expect(useKeys_1.useKeys).toBeDefined();
    });
    it('should trigger the calback when pressed m + r', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var firstcallbackP = react_1.getByTestId(container, 'first-callback');
        var InputDom = react_1.getByTestId(container, 'input-dom');
        react_1.act(function () {
            react_1.fireEvent.keyDown(InputDom, { charCode: 77, code: 'keyM', key: 'm' });
        });
        react_1.act(function () {
            react_1.fireEvent.keyDown(InputDom, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(firstcallbackP.innerHTML).toBe('1');
    });
    it('should trigger the callback when pressed ctrlLeft + s', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var firstcallbackP = react_1.getByTestId(container, 'first-callback');
        // let InputDom = getByTestId(container, "input-dom");
        react_1.fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(firstcallbackP.innerHTML).toBe('1');
    });
    it("should not trigger whenever 'when ' value is false and trigger whenever'when' value is true", function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var firstcallbackP = react_1.getByTestId(container, 'first-callback');
        var ToggleButton = react_1.getByTestId(container, 'toggle');
        react_1.fireEvent.click(ToggleButton);
        react_1.fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(firstcallbackP.innerHTML).toBe('0');
        react_1.fireEvent.click(ToggleButton);
        // now the callback should run
        react_1.fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(firstcallbackP.innerHTML).toBe('1');
    });
});
describe('useKeys: continuous mode', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(react_2.default.useState(0), 2), testValue = _a[0], setTestValue = _a[1];
            useKeys_1.useKeys(['ControlLeft', 's'], function () {
                setTestValue(testValue + 1);
            }, {
                continuous: true,
            });
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { "data-testid": "value", id: "value" }, testValue)));
        };
        // end
    });
    afterEach(react_1.cleanup);
    it("should trigger continuously whenever 'continuous' is true", function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var testValueElement = react_1.getByTestId(container, 'value');
        react_1.fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(testValueElement.innerHTML).toBe('1');
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(testValueElement.innerHTML).toBe('6');
        // now it should no longer increment after keyup
        react_1.fireEvent.keyUp(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        react_1.fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(testValueElement.innerHTML).toBe('6');
    });
});

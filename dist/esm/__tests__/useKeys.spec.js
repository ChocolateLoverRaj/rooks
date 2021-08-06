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
import { render, cleanup, fireEvent, act, getByTestId, } from '@testing-library/react';
import React from 'react';
import { useKeys } from '../hooks/useKeys';
describe('useKeys', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var documentRef = React.useRef(document);
            var inputRef = React.useRef(null);
            var _a = __read(React.useState(true), 2), isEventActive = _a[0], setIsEventActive = _a[1];
            var _b = __read(React.useState(0), 1), testValue = _b[0];
            var _c = __read(React.useState(0), 2), firstCallbackCallCount = _c[0], setFirstCallbackCallCount = _c[1];
            useKeys(['ControlLeft', 's'], function () {
                setFirstCallbackCallCount(firstCallbackCallCount + 1);
            }, {
                target: documentRef,
                when: isEventActive,
            });
            useKeys(['m', 'r'], function () {
                setFirstCallbackCallCount(firstCallbackCallCount + 1);
            }, {
                target: inputRef,
                when: isEventActive,
            });
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { id: "test-id" }, testValue),
                React.createElement("p", { "data-testid": "first-callback" }, firstCallbackCallCount),
                React.createElement("button", { "data-testid": "toggle", onClick: function () {
                        setIsEventActive(!isEventActive);
                    } }, "Toggle event enabled"),
                React.createElement("div", { className: "grid-container" },
                    React.createElement("input", { className: "box1", "data-testid": "input-dom", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useKeys).toBeDefined();
    });
    it('should trigger the calback when pressed m + r', function () {
        var container = render(React.createElement(App, null)).container;
        var firstcallbackP = getByTestId(container, 'first-callback');
        var InputDom = getByTestId(container, 'input-dom');
        act(function () {
            fireEvent.keyDown(InputDom, { charCode: 77, code: 'keyM', key: 'm' });
        });
        act(function () {
            fireEvent.keyDown(InputDom, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(firstcallbackP.innerHTML).toBe('1');
    });
    it('should trigger the callback when pressed ctrlLeft + s', function () {
        var container = render(React.createElement(App, null)).container;
        var firstcallbackP = getByTestId(container, 'first-callback');
        // let InputDom = getByTestId(container, "input-dom");
        fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(firstcallbackP.innerHTML).toBe('1');
    });
    it("should not trigger whenever 'when ' value is false and trigger whenever'when' value is true", function () {
        var container = render(React.createElement(App, null)).container;
        var firstcallbackP = getByTestId(container, 'first-callback');
        var ToggleButton = getByTestId(container, 'toggle');
        fireEvent.click(ToggleButton);
        fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(firstcallbackP.innerHTML).toBe('0');
        fireEvent.click(ToggleButton);
        // now the callback should run
        fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(firstcallbackP.innerHTML).toBe('1');
    });
});
describe('useKeys: continuous mode', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(React.useState(0), 2), testValue = _a[0], setTestValue = _a[1];
            useKeys(['ControlLeft', 's'], function () {
                setTestValue(testValue + 1);
            }, {
                continuous: true,
            });
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value", id: "value" }, testValue)));
        };
        // end
    });
    afterEach(cleanup);
    it("should trigger continuously whenever 'continuous' is true", function () {
        var container = render(React.createElement(App, null)).container;
        var testValueElement = getByTestId(container, 'value');
        fireEvent.keyDown(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(testValueElement.innerHTML).toBe('1');
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(testValueElement.innerHTML).toBe('6');
        // now it should no longer increment after keyup
        fireEvent.keyUp(document, {
            charCode: 17,
            code: 'ControlLeft',
            key: 'Control',
        });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        fireEvent.keyDown(document, { charCode: 83, code: 'keyS', key: 's' });
        expect(testValueElement.innerHTML).toBe('6');
    });
});

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
import { useKeyRef } from '../hooks/useKeyRef';
describe('useKeyRef', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(React.useState(0), 2), value = _a[0], setValue = _a[1];
            var inputRef = useKeyRef(['r'], function () {
                setValue(value + 1);
            });
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, value),
                React.createElement("div", { className: "grid-container" },
                    React.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useKeyRef).toBeDefined();
    });
    it('should trigger the calback when pressed on document or target', function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, 'value');
        var inputElement = getByTestId(container, 'input');
        act(function () {
            fireEvent.keyDown(window, { charCode: 83, code: 'keyS', key: 's' });
        });
        expect(valueElement.innerHTML).toBe('0');
        act(function () {
            fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('1');
    });
});
describe('non array input', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(React.useState(0), 2), value = _a[0], setValue = _a[1];
            var inputRef = useKeyRef('r', function () {
                setValue(value + 1);
            });
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, value),
                React.createElement("div", { className: "grid-container" },
                    React.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useKeyRef).toBeDefined();
    });
    it('should trigger the calback when pressed on document or target', function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, 'value');
        var inputElement = getByTestId(container, 'input');
        act(function () {
            fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('1');
    });
});
describe('when', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(React.useState(true), 2), when = _a[0], setWhen = _a[1];
            function toggleWhen() {
                setWhen(!when);
            }
            var _b = __read(React.useState(0), 2), value = _b[0], setValue = _b[1];
            var inputRef = useKeyRef(['r'], function () {
                setValue(value + 1);
            }, {
                when: when,
            });
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, value),
                React.createElement("button", { "data-testid": "toggle-when", onClick: toggleWhen },
                    ' ',
                    "Toggle when"),
                React.createElement("div", { className: "grid-container" },
                    React.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useKeyRef).toBeDefined();
    });
    it("should not trigger whenever 'when ' value is false and trigger when 'when' is true", function () {
        var container = render(React.createElement(App, null)).container;
        console.log('container.innerHTML before', container.innerHTML);
        var valueElement = getByTestId(container, 'value');
        var inputElement = getByTestId(container, 'input');
        var toggleWhenElement = getByTestId(container, 'toggle-when');
        act(function () {
            fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('1');
        // disable when
        act(function () {
            fireEvent.click(toggleWhenElement);
        });
        expect(valueElement.innerHTML).toBe('1');
        // enable when
        act(function () {
            fireEvent.click(toggleWhenElement);
        });
        act(function () {
            fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('2');
        act(function () {
            fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('3');
    });
});

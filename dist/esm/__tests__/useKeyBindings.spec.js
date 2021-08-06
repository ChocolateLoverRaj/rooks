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
import { useKeyBindings } from '../hooks/useKeyBindings';
describe('useKeyBindings', function () {
    var App;
    beforeEach(function () {
        App = function () {
            var inputRef = React.useRef(null);
            var _a = __read(React.useState(0), 2), value = _a[0], setValue = _a[1];
            useKeyBindings({
                s: function () {
                    setValue(value + 1);
                },
            });
            useKeyBindings({
                r: function () {
                    setValue(value + 1);
                },
                v: function () {
                    setValue(value + 1);
                },
            }, {
                target: inputRef,
            });
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, value),
                React.createElement("div", { className: "grid-container" },
                    React.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useKeyBindings).toBeDefined();
    });
    it('should trigger the calback when pressed on document or target', function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, 'value');
        var inputElement = getByTestId(container, 'input');
        act(function () {
            fireEvent.keyDown(window, { charCode: 83, code: 'keyS', key: 's' });
        });
        expect(valueElement.innerHTML).toBe('1');
        act(function () {
            fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('2');
        act(function () {
            fireEvent.keyDown(inputElement, { charCode: 86, code: 'keyV', key: 'v' });
        });
        expect(valueElement.innerHTML).toBe('3');
    });
});

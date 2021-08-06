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
import { render, cleanup, getByTestId, fireEvent, act, } from '@testing-library/react';
import React from 'react';
import { useSessionstorageState } from '../hooks/useSessionstorageState';
describe('useSessionstorageState defined', function () {
    it('should be defined', function () {
        expect(useSessionstorageState).toBeDefined();
    });
});
describe('useSessionstorageState basic', function () {
    var App;
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(useSessionstorageState('test-value', 'hello'), 3), value = _a[0], set = _a[1], remove = _a[2];
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, value),
                React.createElement("button", { "data-testid": "new-value", onClick: function () {
                        set('new value');
                    } }, "Set to new value"),
                React.createElement("button", { "data-testid": "unset-value", onClick: remove }, "Unset the value")));
        };
        // end
    });
    afterEach(cleanup);
    it('initializes correctly', function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, 'value');
        expect(valueElement.innerHTML).toBe('hello');
    });
    it('setting the new value', function () {
        var container = render(React.createElement(App, null)).container;
        var setToNewValueButton = getByTestId(container, 'new-value');
        act(function () {
            fireEvent.click(setToNewValueButton);
        });
        var valueElement = getByTestId(container, 'value');
        expect(valueElement.innerHTML).toBe('new value');
    });
    it.skip('unsetting the value', function () {
        var container = render(React.createElement(App, null)).container;
        var unsetValueButton = getByTestId(container, 'unset-value');
        act(function () {
            fireEvent.click(unsetValueButton);
        });
        var valueElement = getByTestId(container, 'value');
        expect(valueElement.innerHTML).toBe('');
    });
});

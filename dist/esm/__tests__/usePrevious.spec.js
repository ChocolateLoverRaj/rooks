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
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import React, { useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';
describe('usePrevious', function () {
    var App;
    beforeEach(function () {
        App = function () {
            var _a = __read(useState(0), 2), currentValue = _a[0], setCurrentValue = _a[1];
            var previousValue = usePrevious(currentValue);
            function increment() {
                setCurrentValue(currentValue + 1);
            }
            return (React.createElement("div", null,
                React.createElement("p", { "data-testid": "current-element", onClick: increment }, currentValue),
                React.createElement("p", { "data-testid": "previous-element" }, previousValue)));
        };
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(usePrevious).toBeDefined();
    });
    it('sets initial value to null and updates after change in tracked value', function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var currentElement = getByTestId('current-element');
        var previousElement = getByTestId('previous-element');
        expect(currentElement.innerHTML).toBe('0');
        expect(previousElement.innerHTML).toBe('');
        act(function () {
            fireEvent.click(currentElement);
        });
        expect(currentElement.innerHTML).toBe('1');
        expect(previousElement.innerHTML).toBe('0');
    });
});
// figure out tests

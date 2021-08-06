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
import { useUpdateEffect } from '../hooks/useUpdateEffect';
describe('useUpdateEffect', function () {
    var App;
    beforeEach(function () {
        App = function () {
            var _a = __read(useState(0), 2), value = _a[0], setValue = _a[1];
            var _b = __read(useState(0), 2), hasUpdated = _b[0], setHasUpdated = _b[1];
            useUpdateEffect(function () {
                setHasUpdated(hasUpdated + 1);
            }, [value > 0]);
            return (React.createElement("div", null,
                React.createElement("button", { "data-testid": "trigger-btn", onClick: function () { return setValue(value + 1); } }, "Trigger updation"),
                React.createElement("span", { "data-testid": "value" }, value.toString()),
                React.createElement("span", { "data-testid": "element" }, hasUpdated)));
        };
    });
    afterEach(cleanup); // <-- add this
    it('should be defined', function () {
        expect(useUpdateEffect).toBeDefined();
    });
    it('initializes correctly', function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
    });
    it('does not get called on mount', function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
    });
    it('gets called if a state value changes', function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        var valueElement = getByTestId('value');
        var triggerElement = getByTestId('trigger-btn');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
        act(function () {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(1);
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(1);
    });
    it('does not get called if state value has not updated', function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var renderedElement = getByTestId('element');
        var valueElement = getByTestId('value');
        var triggerElement = getByTestId('trigger-btn');
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(0);
        act(function () {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(1);
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(1);
        act(function () {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(2);
        expect(Number.parseInt(String(renderedElement.textContent))).toEqual(1);
    });
});
describe('useUpdateEffect with []', function () {
    var App;
    beforeEach(function () {
        App = function () {
            var _a = __read(useState(0), 2), value = _a[0], setValue = _a[1];
            var _b = __read(useState(0), 2), hasUpdated = _b[0], setHasUpdated = _b[1];
            useUpdateEffect(function () {
                setHasUpdated(hasUpdated + 1);
            }, []);
            return (React.createElement("div", null,
                React.createElement("button", { "data-testid": "trigger-btn", onClick: function () { return setValue(value + 1); } }, "Trigger updation"),
                React.createElement("span", { "data-testid": "value" }, value.toString()),
                React.createElement("span", { "data-testid": "element" }, hasUpdated)));
        };
    });
    afterEach(cleanup);
    it('warns if conditionals is empty array', function () {
        var spy = jest.spyOn(global.console, 'warn');
        render(React.createElement(App, null));
        expect(spy).toHaveBeenCalled();
    });
});
describe('useUpdateEffect with cleanup phase', function () {
    var App;
    var mockCallback;
    beforeEach(function () {
        mockCallback = jest.fn(function () { return console.log('cleanup'); });
        App = function () {
            var _a = __read(useState(0), 2), value = _a[0], setValue = _a[1];
            useUpdateEffect(function () {
                console.log(value);
                return mockCallback;
            }, [value]);
            return (React.createElement("div", null,
                React.createElement("button", { "data-testid": "trigger-btn", onClick: function () { return setValue(value + 1); } }, "Trigger updation"),
                React.createElement("span", { "data-testid": "value" }, value.toString())));
        };
    });
    afterEach(cleanup);
    it('cleanup is called', function () {
        var getByTestId = render(React.createElement(App, null)).getByTestId;
        var valueElement = getByTestId('value');
        var triggerElement = getByTestId('trigger-btn');
        expect(mockCallback).toHaveBeenCalledTimes(0);
        act(function () {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(1);
        expect(mockCallback).toHaveBeenCalledTimes(0);
        act(function () {
            fireEvent.click(triggerElement);
        });
        expect(Number.parseInt(String(valueElement.textContent))).toEqual(2);
        expect(mockCallback).toHaveBeenCalledTimes(1);
    });
});

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
import { useWillUnmount } from '../hooks/useWillUnmount';
describe('useWillUnmount', function () {
    var App;
    var mockCallback = jest.fn(function () { return null; });
    // let firstCallback
    beforeEach(function () {
        function Child() {
            useWillUnmount(mockCallback);
            return null;
        }
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(React.useState(false), 2), isChildVisible = _a[0], setIsChildVisible = _a[1];
            var _b = __read(React.useState(0), 2), value = _b[0], setValue = _b[1];
            function toggleIsChildVisible() {
                setIsChildVisible(!isChildVisible);
            }
            return (React.createElement("div", null,
                React.createElement("p", { "data-testid": "value", onClick: function () { return setValue(value + 1); } }, value),
                React.createElement("button", { "data-testid": "toggle-child", onClick: toggleIsChildVisible }, "Toggle child visibility"),
                isChildVisible && React.createElement(Child, null)));
        };
        // end
    });
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useWillUnmount).toBeDefined();
    });
    it('should only call the unmount function only when unmount', function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, 'value');
        var toggleChildElement = getByTestId(container, 'toggle-child');
        expect(mockCallback.mock.calls.length).toBe(0);
        act(function () {
            fireEvent.click(valueElement);
        });
        expect(mockCallback.mock.calls.length).toBe(0);
        act(function () {
            fireEvent.click(toggleChildElement);
        });
        expect(mockCallback.mock.calls.length).toBe(0);
        act(function () {
            fireEvent.click(toggleChildElement);
        });
        expect(mockCallback.mock.calls.length).toBe(1);
        act(function () {
            fireEvent.click(valueElement);
        });
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});

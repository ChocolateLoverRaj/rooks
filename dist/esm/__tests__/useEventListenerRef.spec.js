import { render, getByTestId, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { useCounter } from '../hooks/useCounter';
import { useEventListenerRef } from '../hooks/useEventListenerRef';
var act = TestRenderer.act;
describe('useEventListenerRef', function () {
    it('should be defined', function () {
        expect(useEventListenerRef).toBeDefined();
    });
    it('should return a callback ref', function () {
        var result = renderHook(function () {
            return useEventListenerRef('click', function () {
                console.log('clicked');
            });
        }).result;
        expect(typeof result.current).toBe('function');
    });
});
describe('useEventListenerRef jsx', function () {
    var mockCallback;
    var TestJSX;
    beforeEach(function () {
        mockCallback = jest.fn(function () { });
        TestJSX = function () {
            var ref = useEventListenerRef('click', mockCallback);
            return (React.createElement("div", { "data-testid": "element", ref: ref }, "Click me"));
        };
    });
    it('should not call callback by default', function () {
        render(React.createElement(TestJSX, null));
        expect(mockCallback).toHaveBeenCalledTimes(0);
    });
    it('should not call callback when event fires', function () {
        var container = render(React.createElement(TestJSX, null)).container;
        var displayElement = getByTestId(container, 'element');
        act(function () {
            fireEvent.click(displayElement);
        });
        expect(mockCallback).toHaveBeenCalledTimes(1);
        act(function () {
            fireEvent.click(displayElement);
            fireEvent.click(displayElement);
            fireEvent.click(displayElement);
        });
        expect(mockCallback).toHaveBeenCalledTimes(4);
    });
});
describe('useEventListenerRef state variables', function () {
    var mockCallback;
    var TestJSX;
    beforeEach(function () {
        mockCallback = jest.fn(function () { });
        TestJSX = function () {
            var _a = useCounter(0), increment = _a.increment, value = _a.value;
            var ref = useEventListenerRef('click', increment);
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { "data-testid": "element", ref: ref }, "Click me"),
                React.createElement("div", { "data-testid": "value" }, value)));
        };
    });
    it('should not call callback by default', function () {
        var container = render(React.createElement(TestJSX, null)).container;
        var displayElement = getByTestId(container, 'element');
        var valueElement = getByTestId(container, 'value');
        expect(Number.parseInt(valueElement.innerHTML)).toBe(0);
    });
    it('should not call callback when event fires', function () {
        var container = render(React.createElement(TestJSX, null)).container;
        var displayElement = getByTestId(container, 'element');
        var valueElement = getByTestId(container, 'value');
        expect(Number.parseInt(valueElement.innerHTML)).toBe(0);
        act(function () {
            fireEvent.click(displayElement);
            fireEvent.click(displayElement);
            fireEvent.click(displayElement);
        });
        expect(Number.parseInt(valueElement.innerHTML)).toBe(3);
    });
});

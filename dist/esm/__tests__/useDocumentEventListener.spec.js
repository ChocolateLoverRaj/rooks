import { render, getByTestId, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { useCounter } from '../hooks/useCounter';
import { useDocumentEventListener } from '../hooks/useDocumentEventListener';
var act = TestRenderer.act;
describe('useDocumentEventListener', function () {
    it('should be defined', function () {
        expect(useDocumentEventListener).toBeDefined();
    });
    it('should return a undefined', function () {
        var result = renderHook(function () {
            return useDocumentEventListener('click', function () {
                console.log('clicked');
            });
        }).result;
        expect(typeof result.current).toBe('undefined');
    });
});
describe('useDocumentEventListener jsx', function () {
    var mockCallback;
    var TestJSX;
    beforeEach(function () {
        mockCallback = jest.fn(function () { });
        TestJSX = function () {
            useDocumentEventListener('click', mockCallback);
            return null;
        };
    });
    it('should not call callback by default', function () {
        render(React.createElement(TestJSX, null));
        expect(mockCallback).toHaveBeenCalledTimes(0);
    });
    it('should not call callback when event fires', function () {
        render(React.createElement(TestJSX, null));
        act(function () {
            fireEvent.click(document);
        });
        expect(mockCallback).toHaveBeenCalledTimes(1);
        act(function () {
            fireEvent.click(document);
            fireEvent.click(document);
            fireEvent.click(document);
        });
        expect(mockCallback).toHaveBeenCalledTimes(4);
    });
});
describe('useDocumentEventListener state variables', function () {
    var TestJSX;
    beforeEach(function () {
        TestJSX = function () {
            var _a = useCounter(0), increment = _a.increment, value = _a.value;
            useDocumentEventListener('click', increment);
            return React.createElement("div", { "data-testid": "value" }, value);
        };
    });
    it('should not call callback by default', function () {
        var container = render(React.createElement(TestJSX, null)).container;
        var valueElement = getByTestId(container, 'value');
        expect(Number.parseInt(valueElement.innerHTML)).toBe(0);
    });
    it('should not call callback when event fires', function () {
        var container = render(React.createElement(TestJSX, null)).container;
        var valueElement = getByTestId(container, 'value');
        expect(Number.parseInt(valueElement.innerHTML)).toBe(0);
        act(function () {
            fireEvent.click(document);
            fireEvent.click(document);
            fireEvent.click(document);
        });
        expect(Number.parseInt(valueElement.innerHTML)).toBe(3);
    });
});

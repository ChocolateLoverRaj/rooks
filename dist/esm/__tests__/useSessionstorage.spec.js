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
import { useSessionstorage } from '../hooks/useSessionstorage';
/**
 * @jest-environment jsdom
 */
describe('useSessionstorage defined', function () {
    it('should be defined', function () {
        expect(useSessionstorage).toBeDefined();
    });
});
describe('useSessionstorage with object destructuring', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var value = useSessionstorage('test-value', 'hello').value;
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, value)));
        };
        // end
    });
    afterEach(cleanup);
    it('initializes correctly', function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, 'value');
        expect(valueElement.innerHTML).toBe('hello');
    });
});
describe('useSessionstorage with array destructuring', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(useSessionstorage('test-value', 'hello'), 1), currentValue = _a[0];
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, currentValue)));
        };
        // end
    });
    afterEach(cleanup);
    it('initializes correctly', function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, 'value');
        expect(valueElement.innerHTML).toBe('hello');
    });
});
// figure out tests
describe('useSessionstorage', function () {
    var App;
    beforeEach(function () {
        sessionStorage.clear();
        function SubApp1() {
            var _a = useSessionstorage('titan', 'eren'), titan = _a.value, set = _a.set, remove = _a.remove;
            return (React.createElement("div", null,
                React.createElement("button", { "data-testid": "new-value", onClick: function () { return set('mikasa'); } }, "Add"),
                React.createElement("button", { "data-testid": "unset-value", onClick: function () { return remove(); } }, "Remove"),
                React.createElement("p", { "data-testid": "element1" }, titan)));
        }
        function SubApp2() {
            var titan = useSessionstorage('titan').value;
            return (React.createElement("div", null,
                React.createElement("p", { "data-testid": "element2" }, titan)));
        }
        App = function () {
            return (React.createElement(React.Fragment, null,
                React.createElement(SubApp1, null),
                React.createElement(SubApp2, null)));
        };
    });
    afterEach(cleanup); // <-- add this
    it.skip('updating one component should update the other automatically', function () {
        var getByTestId1 = render(React.createElement(App, null)).getByTestId;
        var renderedElement1 = getByTestId1('element1');
        var renderedElement2 = getByTestId1('element2');
        expect(renderedElement1.textContent).toEqual('');
        expect(renderedElement2.textContent).toEqual('');
        expect(renderedElement1.textContent).toEqual('eren');
        // expect(renderedElement2.textContent).toEqual("eren");
    });
    it('setting the new value', function () {
        var container = render(React.createElement(App, null)).container;
        var setToNewValueButton = getByTestId(container, 'new-value');
        act(function () {
            fireEvent.click(setToNewValueButton);
        });
        var valueElement = getByTestId(container, 'element1');
        expect(valueElement.innerHTML).toBe('mikasa');
    });
    it('unsetting the value', function () {
        var container = render(React.createElement(App, null)).container;
        var unsetValueButton = getByTestId(container, 'unset-value');
        act(function () {
            fireEvent.click(unsetValueButton);
        });
        var valueElement = getByTestId(container, 'element1');
        expect(valueElement.innerHTML).toBe('');
    });
});
// figure out tests

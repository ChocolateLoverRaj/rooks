"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
var react_1 = require("@testing-library/react");
var react_2 = __importDefault(require("react"));
var useSessionstorage_1 = require("../hooks/useSessionstorage");
/**
 * @jest-environment jsdom
 */
describe('useSessionstorage defined', function () {
    it('should be defined', function () {
        expect(useSessionstorage_1.useSessionstorage).toBeDefined();
    });
});
describe('useSessionstorage with object destructuring', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var value = useSessionstorage_1.useSessionstorage('test-value', 'hello').value;
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { "data-testid": "value" }, value)));
        };
        // end
    });
    afterEach(react_1.cleanup);
    it('initializes correctly', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var valueElement = react_1.getByTestId(container, 'value');
        expect(valueElement.innerHTML).toBe('hello');
    });
});
describe('useSessionstorage with array destructuring', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(useSessionstorage_1.useSessionstorage('test-value', 'hello'), 1), currentValue = _a[0];
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { "data-testid": "value" }, currentValue)));
        };
        // end
    });
    afterEach(react_1.cleanup);
    it('initializes correctly', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var valueElement = react_1.getByTestId(container, 'value');
        expect(valueElement.innerHTML).toBe('hello');
    });
});
// figure out tests
describe('useSessionstorage', function () {
    var App;
    beforeEach(function () {
        sessionStorage.clear();
        function SubApp1() {
            var _a = useSessionstorage_1.useSessionstorage('titan', 'eren'), titan = _a.value, set = _a.set, remove = _a.remove;
            return (react_2.default.createElement("div", null,
                react_2.default.createElement("button", { "data-testid": "new-value", onClick: function () { return set('mikasa'); } }, "Add"),
                react_2.default.createElement("button", { "data-testid": "unset-value", onClick: function () { return remove(); } }, "Remove"),
                react_2.default.createElement("p", { "data-testid": "element1" }, titan)));
        }
        function SubApp2() {
            var titan = useSessionstorage_1.useSessionstorage('titan').value;
            return (react_2.default.createElement("div", null,
                react_2.default.createElement("p", { "data-testid": "element2" }, titan)));
        }
        App = function () {
            return (react_2.default.createElement(react_2.default.Fragment, null,
                react_2.default.createElement(SubApp1, null),
                react_2.default.createElement(SubApp2, null)));
        };
    });
    afterEach(react_1.cleanup); // <-- add this
    it.skip('updating one component should update the other automatically', function () {
        var getByTestId1 = react_1.render(react_2.default.createElement(App, null)).getByTestId;
        var renderedElement1 = getByTestId1('element1');
        var renderedElement2 = getByTestId1('element2');
        expect(renderedElement1.textContent).toEqual('');
        expect(renderedElement2.textContent).toEqual('');
        expect(renderedElement1.textContent).toEqual('eren');
        // expect(renderedElement2.textContent).toEqual("eren");
    });
    it('setting the new value', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var setToNewValueButton = react_1.getByTestId(container, 'new-value');
        react_1.act(function () {
            react_1.fireEvent.click(setToNewValueButton);
        });
        var valueElement = react_1.getByTestId(container, 'element1');
        expect(valueElement.innerHTML).toBe('mikasa');
    });
    it('unsetting the value', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var unsetValueButton = react_1.getByTestId(container, 'unset-value');
        react_1.act(function () {
            react_1.fireEvent.click(unsetValueButton);
        });
        var valueElement = react_1.getByTestId(container, 'element1');
        expect(valueElement.innerHTML).toBe('');
    });
});
// figure out tests

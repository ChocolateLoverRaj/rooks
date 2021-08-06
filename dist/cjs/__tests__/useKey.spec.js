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
var useKey_1 = require("../hooks/useKey");
describe('useKey', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var inputRef = react_2.default.useRef(null);
            var _a = __read(react_2.default.useState(0), 2), value = _a[0], setValue = _a[1];
            useKey_1.useKey(['s'], function () {
                setValue(value + 1);
            });
            useKey_1.useKey(['r'], function () {
                setValue(value + 1);
            }, {
                target: inputRef,
            });
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { "data-testid": "value" }, value),
                react_2.default.createElement("div", { className: "grid-container" },
                    react_2.default.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(react_1.cleanup);
    it('should be defined', function () {
        expect(useKey_1.useKey).toBeDefined();
    });
    it('should trigger the calback when pressed on document or target', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var valueElement = react_1.getByTestId(container, 'value');
        var inputElement = react_1.getByTestId(container, 'input');
        react_1.act(function () {
            react_1.fireEvent.keyDown(window, { charCode: 83, code: 'keyS', key: 's' });
        });
        expect(valueElement.innerHTML).toBe('1');
        react_1.act(function () {
            react_1.fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('2');
    });
});
describe('non array input', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var inputRef = react_2.default.useRef(null);
            var _a = __read(react_2.default.useState(0), 2), value = _a[0], setValue = _a[1];
            useKey_1.useKey('s', function () {
                setValue(value + 1);
            });
            useKey_1.useKey('r', function () {
                setValue(value + 1);
            }, {
                target: inputRef,
            });
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { "data-testid": "value" }, value),
                react_2.default.createElement("div", { className: "grid-container" },
                    react_2.default.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(react_1.cleanup);
    it('should be defined', function () {
        expect(useKey_1.useKey).toBeDefined();
    });
    it('should trigger the calback when pressed on document or target', function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        var valueElement = react_1.getByTestId(container, 'value');
        var inputElement = react_1.getByTestId(container, 'input');
        react_1.act(function () {
            react_1.fireEvent.keyDown(window, { charCode: 83, code: 'keyS', key: 's' });
        });
        expect(valueElement.innerHTML).toBe('1');
        react_1.act(function () {
            react_1.fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('2');
    });
});
describe('when', function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var inputRef = react_2.default.useRef(null);
            var _a = __read(react_2.default.useState(true), 2), when = _a[0], setWhen = _a[1];
            function toggleWhen() {
                setWhen(!when);
            }
            var _b = __read(react_2.default.useState(0), 2), value = _b[0], setValue = _b[1];
            useKey_1.useKey(['s'], function () {
                setValue(value + 1);
            }, {
                when: when,
            });
            useKey_1.useKey(['r'], function () {
                setValue(value + 1);
            }, {
                target: inputRef,
                when: when,
            });
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { "data-testid": "value" }, value),
                react_2.default.createElement("button", { "data-testid": "toggle-when", onClick: toggleWhen },
                    ' ',
                    "Toggle when"),
                react_2.default.createElement("div", { className: "grid-container" },
                    react_2.default.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
        // end
    });
    afterEach(react_1.cleanup);
    it('should be defined', function () {
        expect(useKey_1.useKey).toBeDefined();
    });
    it("should not trigger whenever 'when ' value is false and trigger when 'when' is true", function () {
        var container = react_1.render(react_2.default.createElement(App, null)).container;
        console.log('container.innerHTML before', container.innerHTML);
        var valueElement = react_1.getByTestId(container, 'value');
        var inputElement = react_1.getByTestId(container, 'input');
        var toggleWhenElement = react_1.getByTestId(container, 'toggle-when');
        react_1.act(function () {
            react_1.fireEvent.keyDown(window, { charCode: 83, code: 'keyS', key: 's' });
        });
        expect(valueElement.innerHTML).toBe('1');
        react_1.act(function () {
            react_1.fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('2');
        // disable when
        react_1.act(function () {
            react_1.fireEvent.click(toggleWhenElement);
        });
        react_1.act(function () {
            react_1.fireEvent.keyDown(window, { charCode: 83, code: 'keyS', key: 's' });
        });
        expect(valueElement.innerHTML).toBe('2');
        react_1.act(function () {
            react_1.fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('2');
        // enable when
        react_1.act(function () {
            react_1.fireEvent.click(toggleWhenElement);
        });
        react_1.act(function () {
            react_1.fireEvent.keyDown(window, { charCode: 83, code: 'keyS', key: 's' });
        });
        expect(valueElement.innerHTML).toBe('3');
        react_1.act(function () {
            react_1.fireEvent.keyDown(inputElement, { charCode: 82, code: 'keyR', key: 'r' });
        });
        expect(valueElement.innerHTML).toBe('4');
    });
});

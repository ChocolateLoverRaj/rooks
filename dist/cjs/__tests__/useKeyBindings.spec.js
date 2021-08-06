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
var useKeyBindings_1 = require("../hooks/useKeyBindings");
describe('useKeyBindings', function () {
    var App;
    beforeEach(function () {
        App = function () {
            var inputRef = react_2.default.useRef(null);
            var _a = __read(react_2.default.useState(0), 2), value = _a[0], setValue = _a[1];
            useKeyBindings_1.useKeyBindings({
                s: function () {
                    setValue(value + 1);
                },
            });
            useKeyBindings_1.useKeyBindings({
                r: function () {
                    setValue(value + 1);
                },
                v: function () {
                    setValue(value + 1);
                },
            }, {
                target: inputRef,
            });
            return (react_2.default.createElement("div", { "data-testid": "container" },
                react_2.default.createElement("p", { "data-testid": "value" }, value),
                react_2.default.createElement("div", { className: "grid-container" },
                    react_2.default.createElement("input", { className: "box1", "data-testid": "input", ref: inputRef, tabIndex: 1 }))));
        };
    });
    afterEach(react_1.cleanup);
    it('should be defined', function () {
        expect(useKeyBindings_1.useKeyBindings).toBeDefined();
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
        react_1.act(function () {
            react_1.fireEvent.keyDown(inputElement, { charCode: 86, code: 'keyV', key: 'v' });
        });
        expect(valueElement.innerHTML).toBe('3');
    });
});

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
import { render, cleanup, getByTestId, fireEvent, act, } from "@testing-library/react";
import { renderHook, act as actHook } from "@testing-library/react-hooks";
import React from "react";
import { useLocalstorage } from "../hooks/useLocalstorage";
describe("useLocalstorage defined", function () {
    it("should be defined", function () {
        expect(useLocalstorage).toBeDefined();
    });
});
describe("useLocalstorage with object destructuring", function () {
    var App;
    // let firstCallback
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var value = useLocalstorage("test-value", "hello").value;
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, value)));
        };
        // end
    });
    afterEach(cleanup);
    it("initializes correctly", function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, "value");
        expect(valueElement.innerHTML).toBe("hello");
    });
});
describe("useLocalstorage with array destructuring", function () {
    var App;
    beforeEach(function () {
        // firstCallback = jest.fn()
        App = function () {
            var _a = __read(useLocalstorage("test-value", "hello"), 3), currentValue = _a[0], set = _a[1], remove = _a[2];
            return (React.createElement("div", { "data-testid": "container" },
                React.createElement("p", { "data-testid": "value" }, currentValue),
                React.createElement("button", { "data-testid": "new-value", onClick: function () {
                        set("new value");
                    } }, "Set to new value"),
                React.createElement("button", { "data-testid": "unset-value", onClick: remove }, "Unset the value")));
        };
        // end
    });
    afterEach(cleanup);
    it("initializes correctly", function () {
        var container = render(React.createElement(App, null)).container;
        var valueElement = getByTestId(container, "value");
        expect(valueElement.innerHTML).toBe("hello");
    });
    test("set ", function () {
        var _a = renderHook(function () {
            return useLocalstorage("test-value", "hello");
        }), result = _a.result, rerender = _a.rerender;
        // tests equality after emo
        var setBeforeRerender = result.current.set;
        rerender();
        var setAfterRerender = result.current.set;
        expect(setBeforeRerender).toBe(setAfterRerender);
        // work after rerender
        actHook(function () {
            setAfterRerender("value");
        });
        expect(result.current.value).toBe("value");
    });
    it("setting the new value", function () {
        var container = render(React.createElement(App, null)).container;
        var setToNewValueButton = getByTestId(container, "new-value");
        act(function () {
            fireEvent.click(setToNewValueButton);
        });
        var valueElement = getByTestId(container, "value");
        expect(valueElement.innerHTML).toBe("new value");
    });
    it("unsetting the value", function () {
        var container = render(React.createElement(App, null)).container;
        var unsetValueButton = getByTestId(container, "unset-value");
        act(function () {
            fireEvent.click(unsetValueButton);
        });
        var valueElement = getByTestId(container, "value");
        expect(valueElement.innerHTML).toBe("");
    });
});
// figure out tests

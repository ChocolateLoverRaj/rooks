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
import { render, cleanup, fireEvent, act, getByTestId, } from "@testing-library/react";
import React, { useRef, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
var VolumeOn = function () { return (React.createElement("svg", { fill: "none", stroke: "currentColor", width: "60", height: "60", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" }))); };
var VolumeOff = function () { return (React.createElement("svg", { fill: "none", width: "60", height: "60", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z", clipRule: "evenodd" }),
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" }))); };
var Button = function () {
    var _a = __read(useState(false), 2), clicked = _a[0], setClicked = _a[1];
    return (React.createElement("div", { onClick: function () { return setClicked(!clicked); }, "data-testid": "button" }, clicked ? React.createElement(VolumeOn, null) : React.createElement(VolumeOff, null)));
};
describe("useOutsideClick", function () {
    var App;
    beforeEach(function () {
        App = function () {
            var _a = __read(useState(""), 2), message = _a[0], setMessage = _a[1];
            var ref = useRef(null);
            useOutsideClick(ref, callback);
            function callback() {
                setMessage("clicked outside");
            }
            return (React.createElement("div", { className: "App", style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }, "data-testid": "app" },
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        backgroundColor: "lightblue",
                    } },
                    React.createElement("div", { className: "inside", style: { backgroundColor: "lightgreen" }, ref: ref },
                        React.createElement("h2", null, "This is inside"),
                        React.createElement(Button, null))),
                React.createElement("div", { "data-testid": "message" }, message)));
        };
    });
    afterEach(cleanup);
    it("should be defined", function () {
        expect(useOutsideClick).toBeDefined();
    });
    it("should trigger the calback when click on outide", function () {
        var container = render(React.createElement(App, null)).container;
        var app = getByTestId(container, "app");
        var message = getByTestId(container, "message");
        act(function () {
            fireEvent.click(app);
        });
        expect(message.innerHTML).toBe("clicked outside");
    });
    it("should not trigger the calback when click the volumn button (inside)", function () {
        var container = render(React.createElement(App, null)).container;
        var button = getByTestId(container, "button");
        var message = getByTestId(container, "message");
        act(function () {
            fireEvent.click(button);
        });
        expect(message.innerHTML).toBe("");
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @jest-environment jsdom
 */
var react_1 = require("@testing-library/react");
var react_hooks_1 = require("@testing-library/react-hooks");
var useOnWindowResize_1 = require("../hooks/useOnWindowResize");
describe('useOnWindowResize', function () {
    it('should be defined', function () {
        expect(useOnWindowResize_1.useOnWindowResize).toBeDefined();
    });
    describe('basic', function () {
        var mockCallback = jest.fn(function () { });
        it('should call callback after resize', function () {
            react_hooks_1.renderHook(function () { return useOnWindowResize_1.useOnWindowResize(mockCallback); });
            react_1.fireEvent(window, new Event('resize'));
            expect(mockCallback.mock.calls.length).toBe(1);
            react_1.fireEvent(window, new Event('resize'));
            react_1.fireEvent(window, new Event('resize'));
            expect(mockCallback.mock.calls.length).toBe(3);
        });
    });
});
// figure out tests

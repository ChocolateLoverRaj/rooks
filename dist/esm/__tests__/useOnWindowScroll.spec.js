/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useOnWindowScroll } from '../hooks/useOnWindowScroll';
describe('useOnWindowScroll', function () {
    it('should be defined', function () {
        expect(useOnWindowScroll).toBeDefined();
    });
    describe('basic', function () {
        var mockCallback = jest.fn(function () { });
        it('should call callback after resize', function () {
            renderHook(function () { return useOnWindowScroll(mockCallback); });
            fireEvent(window, new Event('scroll'));
            expect(mockCallback.mock.calls.length).toBe(1);
            fireEvent(window, new Event('scroll'));
            fireEvent(window, new Event('scroll'));
            expect(mockCallback.mock.calls.length).toBe(3);
        });
    });
});
// figure out tests

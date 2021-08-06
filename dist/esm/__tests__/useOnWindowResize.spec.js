/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useOnWindowResize } from '../hooks/useOnWindowResize';
describe('useOnWindowResize', function () {
    it('should be defined', function () {
        expect(useOnWindowResize).toBeDefined();
    });
    describe('basic', function () {
        var mockCallback = jest.fn(function () { });
        it('should call callback after resize', function () {
            renderHook(function () { return useOnWindowResize(mockCallback); });
            fireEvent(window, new Event('resize'));
            expect(mockCallback.mock.calls.length).toBe(1);
            fireEvent(window, new Event('resize'));
            fireEvent(window, new Event('resize'));
            expect(mockCallback.mock.calls.length).toBe(3);
        });
    });
});
// figure out tests

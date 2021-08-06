/**
 * @jest-environment jsdom
 */
import { fireEvent } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { useWindowScrollPosition } from '../hooks/useWindowScrollPosition';
describe('useWindowScrollPosition', function () {
    it('should be defined', function () {
        expect(useWindowScrollPosition).toBeDefined();
    });
    describe('basic', function () {
        it('should call callback after resize', function () {
            var result = renderHook(function () { return useWindowScrollPosition(); }).result;
            expect(result.current.scrollX).toBe(0);
            expect(result.current.scrollY).toBe(0);
            act(function () {
                fireEvent.scroll(window, { target: { pageYOffset: 100 } });
            });
            expect(result.current.scrollX).toBe(0);
            expect(result.current.scrollY).toBe(100);
            act(function () {
                fireEvent.scroll(window, { target: { pageXOffset: 300 } });
            });
            expect(result.current.scrollX).toBe(300);
            expect(result.current.scrollY).toBe(100);
        });
    });
});
// figure out tests

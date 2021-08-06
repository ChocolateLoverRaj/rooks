/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react-hooks';
import { useWindowSize } from '../hooks/useWindowSize';
describe('useWindowSize', function () {
    it('should be defined', function () {
        expect(useWindowSize).toBeDefined();
    });
    describe('basic', function () {
        it('should have an initial value on first render', function () {
            var result = renderHook(function () { return useWindowSize(); }).result;
            expect(result.current.innerHeight).not.toBeNull();
        });
    });
});

/* eslint-disable jest/no-disabled-tests */
/**
 * @jest-environment jsdom
 */
import { renderHook, cleanup } from '@testing-library/react-hooks';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { useMouse } from '../hooks/useMouse';
function TestMouse() {
    var mouse = useMouse();
    return React.createElement("div", null, JSON.stringify(mouse));
}
describe.skip('useMouse', function () {
    afterEach(cleanup);
    it('should be defined', function () {
        expect(useMouse).toBeDefined();
    });
    it('should default with null values', function () {
        var result = renderHook(function () { return useMouse(); }).result;
        expect(result.current).toBe({
            x: null,
            screenX: null,
            y: null,
            pageX: null,
            screenY: null,
            clientX: null,
            pageY: null,
            clientY: null,
            movementX: null,
            movementY: null,
            offsetX: null,
            offsetY: null,
        });
    });
    it('should update client position when mouse is moved', function () {
        var result = renderHook(function () { return useMouse(); }).result;
        var expected = '{"screenX":0,"screenY":0,"clientX":80,"clientY":20,"x":0,"y":0}';
        // fireEvent.mouseMove(document, { clientX: 80, clientY: 20 });
        // expect(getByText(expected)).toBeInTheDocument()
    });
    it('should update screen position when mouse is moved', function () {
        var result = renderHook(function () { return useMouse(); }).result;
        var expected = '{"screenX":80,"screenY":20,"clientX":0,"clientY":0,"x":80,"y":20}';
        // fireEvent.mouseMove(document, { screenX: 80, screenY: 20 });
        // expect(getByText(expected)).toBeInTheDocument()
    });
});

import { renderHook, act } from "@testing-library/react-hooks";
import { useFullscreen } from "../hooks/useFullscreen";
describe("useFullscreen", function () {
    it("should forward requestFullscreenOptions to requestFullscreen", function () {
        document.exitFullscreen = jest.fn();
        var element = { requestFullscreen: jest.fn() };
        var mockRequestFullscreenOptions = { navigationUI: "show" };
        var result = renderHook(function () {
            return useFullscreen({ requestFullscreenOptions: { navigationUI: "show" } });
        }).result;
        expect(typeof result.current).toBe("object");
        act(function () {
            var _a;
            (_a = result.current) === null || _a === void 0 ? void 0 : _a.request(element);
        });
        expect(element.requestFullscreen).toHaveBeenCalledWith(mockRequestFullscreenOptions);
    });
});

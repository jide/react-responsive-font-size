"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var resize_observer_1 = require("@juggle/resize-observer");
var ResizeObserver = window.ResizeObserver || resize_observer_1.ResizeObserver;
var useResponsiveFontSize = function (ratio, optionsObject) {
    if (optionsObject === void 0) { optionsObject = {}; }
    var _a = react_1.useState(null), ref = _a[0], setRef = _a[1];
    var _b = optionsObject.setFontSize, setFontSize = _b === void 0 ? true : _b, globalVariableName = optionsObject.globalVariableName;
    var set = react_1.useCallback(function () {
        if (!ref)
            return;
        var fontSize = ref.clientHeight * ratio;
        var fontSizePx = fontSize + "px";
        if (setFontSize)
            ref.style.fontSize = fontSizePx;
        if (globalVariableName)
            document.documentElement.style.setProperty(globalVariableName, fontSizePx);
    }, [ref, setFontSize, globalVariableName, ratio]);
    var resizeObserver = react_1.useMemo(function () { return new ResizeObserver(set); }, [set]);
    var onRefChange = react_1.useCallback(function (node) {
        if (!node)
            return;
        setRef(node);
        resizeObserver.observe(node);
    }, [resizeObserver]);
    return react_1.useMemo(function () { return onRefChange; }, [onRefChange]);
};
exports.default = useResponsiveFontSize;
//# sourceMappingURL=useResponsiveFontSize.js.map
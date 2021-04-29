"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var resize_observer_1 = require("@juggle/resize-observer");
var ResizeObserver = window.ResizeObserver || resize_observer_1.ResizeObserver;
var useResponsiveFontSize = function (ratio, optionsObject) {
    if (optionsObject === void 0) { optionsObject = {}; }
    var _a = optionsObject.setFontSize, setFontSize = _a === void 0 ? true : _a, globalVariableName = optionsObject.globalVariableName, _b = optionsObject.lockFontSize, lockFontSize = _b === void 0 ? false : _b;
    var ref = react_1.useRef(null);
    var locked = react_1.useRef();
    locked.current = lockFontSize;
    var set = function () {
        if (!ref.current || locked.current)
            return;
        var fontSize = ref.current.clientHeight * ratio;
        var fontSizePx = fontSize + "px";
        if (setFontSize)
            ref.current.style.fontSize = fontSizePx;
        if (globalVariableName)
            document.documentElement.style.setProperty(globalVariableName, fontSizePx);
    };
    var resizeObserver = new ResizeObserver(set);
    var onRefChange = function (node) {
        if (!node)
            return;
        ref.current = node;
        resizeObserver.observe(node);
    };
    return onRefChange;
};
exports.default = useResponsiveFontSize;
//# sourceMappingURL=useResponsiveFontSize.js.map
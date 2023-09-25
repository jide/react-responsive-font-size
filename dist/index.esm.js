import React from 'react';

var action = function (node, ratio, optionsObject, overrideLock) {
    var _a = optionsObject.lockFontSize, lockFontSize = _a === void 0 ? false : _a, _b = optionsObject.setFontSize, setFontSize = _b === void 0 ? true : _b, globalVariableName = optionsObject.globalVariableName;
    if (!node)
        return;
    if (lockFontSize && !overrideLock)
        return;
    var fontSize = Math.max(optionsObject.minSize, Math.min(optionsObject.maxSize, node.clientHeight * ratio));
    var fontSizePx = fontSize + "px";
    if (setFontSize)
        node.style.fontSize = fontSizePx;
    if (globalVariableName)
        document.documentElement.style.setProperty(globalVariableName, fontSizePx);
};
var useResponsiveFontSize = function (ratio, optionsObject) {
    if (optionsObject === void 0) { optionsObject = {}; }
    return function (node) {
        if (!node)
            return;
        action(node, ratio, optionsObject, true);
        new ResizeObserver(function () { return action(node, ratio, optionsObject); }).observe(node);
        return node;
    };
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var ResponsiveFontSize = function (_a) {
    var children = _a.children, ratio = _a.ratio, className = _a.className, style = _a.style, optionsObject = _a.optionsObject;
    var ref = useResponsiveFontSize(ratio, optionsObject);
    return (React.createElement("div", { ref: ref, className: className !== null && className !== void 0 ? className : "", style: __assign(__assign({}, style), { width: "100%", height: "100%", boxSizing: "border-box" }) }, children));
};

export { ResponsiveFontSize, useResponsiveFontSize };
//# sourceMappingURL=index.esm.js.map

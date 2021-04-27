"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var useResponsiveFontSize_1 = require("./useResponsiveFontSize");
var ResponsiveFontSize = function (_a) {
    var children = _a.children, ratio = _a.ratio, optionsObject = _a.optionsObject;
    var ref = useResponsiveFontSize_1.default(ratio, optionsObject);
    return (jsx_runtime_1.jsx("div", __assign({ ref: ref, style: { width: "100%", height: "100%" } }, { children: children }), void 0));
};
exports.default = ResponsiveFontSize;
//# sourceMappingURL=ResponsiveFontSize.js.map
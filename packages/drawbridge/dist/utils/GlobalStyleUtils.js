"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var defaultGlobalStyle = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, body {\n    height: 100%;\n  }\n"], ["\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  html, body {\n    height: 100%;\n  }\n"])));
function extendGlobalStyle(extra) {
    if (!extra)
        return (0, styled_components_1.createGlobalStyle)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), defaultGlobalStyle);
    return (0, styled_components_1.createGlobalStyle)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), defaultGlobalStyle, extra);
}
var GlobalStyledUtils = {
    extendGlobalStyle: extendGlobalStyle
};
exports.default = GlobalStyledUtils;
var templateObject_1, templateObject_2, templateObject_3;

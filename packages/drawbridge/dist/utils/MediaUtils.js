"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
function up(breakpoint, styles) {
    return (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media screen and (min-width: ", ") {\n        ", "\n      }\n    "], ["\n      @media screen and (min-width: ", ") {\n        ", "\n      }\n    "])), breakpoint, styles);
}
function down(breakpoint, styles) {
    return (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      @media screen and (max-width: ", ") {\n        ", "\n      }\n    "], ["\n      @media screen and (max-width: ", ") {\n        ", "\n      }\n    "])), breakpoint, styles);
}
var MediaUtils = {
    up: up,
    down: down
};
exports.default = MediaUtils;
var templateObject_1, templateObject_2;

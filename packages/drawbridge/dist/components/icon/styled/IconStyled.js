"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var IconStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  color: ", ";\n\n  svg {\n    width: ", ";\n    height: ", ";\n  }\n"], ["\n  width: ", ";\n  height: ", ";\n  color: ", ";\n\n  svg {\n    width: ", ";\n    height: ", ";\n  }\n"])), function (p) { return "".concat(p.width, "px"); }, function (p) { return "".concat(p.height, "px"); }, function (p) { return p.theme.color.dark; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; });
exports.default = IconStyled;
var templateObject_1;

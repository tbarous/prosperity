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
var TextStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n"], ["\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n"])), function (p) { return p.theme.fontSize.md; }, function (p) { return p.theme.color.dark; }, function (p) { return p.theme.fontWeight.normal; }, function (p) { return p.theme.fontFamily.primary; });
exports.default = TextStyled;
var templateObject_1;

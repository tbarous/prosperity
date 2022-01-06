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
var InputStyledLabel = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: ", ";\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  pointer-events: none;\n  transform: ", ";\n  transition: ", ";\n  font-family: ", ";\n"], ["\n  position: ", ";\n  font-size: ", ";\n  color: ", ";\n  font-weight: ", ";\n  pointer-events: none;\n  transform: ", ";\n  transition: ", ";\n  font-family: ", ";\n"])), function (p) { return p.theme.position.absolute; }, function (p) { return p.focused || p.hasValue ? p.theme.fontSize.xs : p.theme.fontSize.md; }, function (p) { return p.focused ? p.theme.color.primary : p.theme.color.light; }, function (p) { return p.theme.fontWeight.bold; }, function (p) { return p.focused || p.hasValue ? "translateY(-20px)" : ""; }, function (p) { return "transform .2s linear"; }, function (p) { return p.theme.fontFamily.primary; });
exports.default = InputStyledLabel;
var templateObject_1;

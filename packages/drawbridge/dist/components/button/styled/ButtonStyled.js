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
var ThemeUtils_1 = require("../../../utils/ThemeUtils");
var ButtonStyled = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: ", ";\n  border: ", ";\n  border-radius: ", ";\n  font-family: ", ";\n  box-shadow: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  width: ", ";\n  height: ", ";\n  letter-spacing: ", ";\n  transition: ", ";\n  padding: ", ";\n  background-color: ", ";\n  color: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    filter: ", ";\n  }\n\n  &:active {\n    filter: ", ";\n  }\n\n  &:visited {\n    filter: ", ";\n  }\n"], ["\n  cursor: ", ";\n  border: ", ";\n  border-radius: ", ";\n  font-family: ", ";\n  box-shadow: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  width: ", ";\n  height: ", ";\n  letter-spacing: ", ";\n  transition: ", ";\n  padding: ", ";\n  background-color: ", ";\n  color: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    filter: ", ";\n  }\n\n  &:active {\n    filter: ", ";\n  }\n\n  &:visited {\n    filter: ", ";\n  }\n"])), function (p) { return p.theme.cursor.pointer; }, function (p) { return p.theme.border.none; }, function (p) { return p.theme.borderRadius.xlarge; }, function (p) { return p.theme.fontFamily.primary; }, function (p) { return p.theme.shadow.light; }, function (p) { return p.theme.fontSize.md; }, function (p) { return p.theme.fontWeight.bold; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.letterSpacing.small; }, function (p) { return p.theme.transition.elevation; }, function (p) { return p.small ? (0, ThemeUtils_1.px)(p.theme.spacing.s4) : (p.medium ? (0, ThemeUtils_1.px)(p.theme.spacing.s5) : (p.large ? (0, ThemeUtils_1.px)(p.theme.spacing.s6) : (0, ThemeUtils_1.px)(p.theme.spacing.s5))); }, function (p) { return p.primary ? p.theme.color.primary : (p.secondary ? p.theme.color.secondary : p.theme.color.primary); }, function (p) { return p.primary ? p.theme.color.white : (p.secondary ? p.theme.color.dark : p.theme.color.white); }, function (p) { return p.theme.shadow.elevate; }, function (p) { return p.theme.brightness.darken; }, function (p) { return p.theme.brightness.darken; }, function (p) { return p.theme.brightness.darken; });
exports.default = ButtonStyled;
var templateObject_1;
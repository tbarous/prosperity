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
var RadioCheckmarkStyled = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  position: ", ";\n  top: ", ";\n  left: ", ";\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n  box-sizing: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: ", ";\n    left: ", ";\n    top: ", ";\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n    display: ", ";\n    background: ", ";\n  }\n"], ["\n  background-color: ", ";\n  position: ", ";\n  top: ", ";\n  left: ", ";\n  height: ", ";\n  width: ", ";\n  border-radius: ", ";\n  box-sizing: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: ", ";\n    left: ", ";\n    top: ", ";\n    width: ", ";\n    height: ", ";\n    border-radius: ", ";\n    display: ", ";\n    background: ", ";\n  }\n"])), function (p) { return p.checked ? p.theme.color.primary : "none"; }, function (p) { return p.theme.position.absolute; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s8); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s8); }, function (p) { return p.theme.borderRadius.circle; }, function (p) { return p.theme.boxSizing.contentBox; }, function (p) { return p.theme.shadow.light; }, function (p) { return p.theme.position.absolute; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s3); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s2); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s2); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s4); }, function (p) { return p.theme.borderRadius.circle; }, function (p) { return p.checked ? p.theme.display.block : p.theme.display.none; }, function (p) { return p.theme.color.white; });
exports.default = RadioCheckmarkStyled;
var templateObject_1;

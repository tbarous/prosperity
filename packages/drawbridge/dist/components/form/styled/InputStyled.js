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
var InputStyled = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  height: ", ";\n  width: ", ";\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  font-family: ", ";\n  outline: none;\n"], ["\n  border: ", ";\n  height: ", ";\n  width: ", ";\n  padding: ", ";\n  margin: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  font-family: ", ";\n  outline: none;\n"])), function (p) { return p.theme.border.none; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return p.theme.fontSize.md; }, function (p) { return p.theme.borderRadius.medium; }, function (p) { return p.theme.fontFamily.primary; });
exports.default = InputStyled;
var templateObject_1;

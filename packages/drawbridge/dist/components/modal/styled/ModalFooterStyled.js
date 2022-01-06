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
var ModalFooterStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow-y: ", ";\n  position: ", ";\n  box-sizing: ", ";\n  box-shadow: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  font-size: ", ";\n  padding: ", ";\n  width: ", ";\n  height: ", ";\n  bottom: ", ";\n  background-color: ", ";\n"], ["\n  overflow-y: ", ";\n  position: ", ";\n  box-sizing: ", ";\n  box-shadow: ", ";\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  font-size: ", ";\n  padding: ", ";\n  width: ", ";\n  height: ", ";\n  bottom: ", ";\n  background-color: ", ";\n"])), function (p) { return p.theme.overflow.auto; }, function (p) { return p.theme.position.absolute; }, function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return p.theme.shadow.medium; }, function (p) { return p.theme.borderRadius.medium; }, function (p) { return p.theme.borderRadius.medium; }, function (p) { return p.theme.fontSize.md; }, function (p) { return "".concat((0, ThemeUtils_1.px)(p.theme.spacing.s3), " ").concat((0, ThemeUtils_1.px)(p.theme.spacing.s5)); }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d20; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return p.theme.color.white; });
exports.default = ModalFooterStyled;
var templateObject_1;

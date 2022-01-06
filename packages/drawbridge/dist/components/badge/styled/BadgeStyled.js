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
var BadgeStyled = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: ", ";\n  display: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  background-color: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  box-shadow: ", ";\n  transition: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"], ["\n  position: ", ";\n  display: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  background-color: ", ";\n  color: ", ";\n  padding: ", ";\n  border-radius: ", ";\n  font-size: ", ";\n  box-shadow: ", ";\n  transition: ", ";\n  font-weight: ", ";\n  font-family: ", ";\n\n  &:hover {\n    box-shadow: ", ";\n  }\n"])), function (p) { return p.theme.position.absolute; }, function (p) { return p.theme.display.inlineFlex; }, function (p) { return p.theme.alignItems.center; }, function (p) { return p.theme.justifyContent.center; }, function (p) { return p.theme.color.primary; }, function (p) { return p.theme.color.white; }, function (p) { return "".concat((0, ThemeUtils_1.px)(p.theme.spacing.s2), " ").concat((0, ThemeUtils_1.px)(p.theme.spacing.s4)); }, function (p) { return p.theme.borderRadius.large; }, function (p) { return p.theme.fontSize.sm; }, function (p) { return p.theme.shadow.light; }, function (p) { return p.theme.transition.elevation; }, function (p) { return p.theme.fontWeight.bold; }, function (p) { return p.theme.fontFamily.primary; }, function (p) { return p.theme.shadow.elevate; });
exports.default = BadgeStyled;
var templateObject_1;

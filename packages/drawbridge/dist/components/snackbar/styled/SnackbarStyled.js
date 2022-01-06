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
var SnackbarStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  display: ", ";\n  align-items: ", ";\n  font-family: ", ";\n  position: ", ";\n  box-sizing: ", ";\n  bottom: ", ";\n  left: ", ";\n  width: ", ";\n  padding: ", ";\n  font-weight: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  background-color: ", ";\n  transform: ", ";\n  transition: ", ";\n"], ["\n  height: ", ";\n  display: ", ";\n  align-items: ", ";\n  font-family: ", ";\n  position: ", ";\n  box-sizing: ", ";\n  bottom: ", ";\n  left: ", ";\n  width: ", ";\n  padding: ", ";\n  font-weight: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  background-color: ", ";\n  transform: ", ";\n  transition: ", ";\n"])), function (p) { return p.theme.dimension.d10; }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.alignItems.center; }, function (p) { return p.theme.fontFamily.primary; }, function (p) { return p.theme.position.fixed; }, function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return p.theme.dimension.d100; }, function (p) { return "".concat((0, ThemeUtils_1.px)(p.theme.spacing.s0), " ").concat((0, ThemeUtils_1.px)(p.theme.spacing.s6)); }, function (p) { return p.theme.fontWeight.bold; }, function (p) { return p.theme.shadow.medium; }, function (p) { return function (p) { return p.danger ? p.theme.color.white : (p.warning ? p.theme.color.dark : (p.success ? p.theme.color.white : p.theme.color.white)); }; }, function (p) { return p.danger ? p.theme.color.danger : (p.warning ? p.theme.color.warning : (p.success ? p.theme.color.success : p.theme.color.danger)); }, function (p) { return p.mount ? "translateX(0)" : "translateY(150%)"; }, function (p) { return p.mount ? "transform ".concat(p.entryDelay / 1000, "s") : "transform ".concat(p.exitDelay / 1000, "s"); });
exports.default = SnackbarStyled;
var templateObject_1;

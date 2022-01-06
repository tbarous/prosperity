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
var NavbarFixedStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  z-index: ", ";\n  top: ", ";\n  position: ", ";\n  display: ", ";\n  align-items: ", ";\n  width: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transform: ", ";\n  transition: ", ";\n"], ["\n  height: ", ";\n  z-index: ", ";\n  top: ", ";\n  position: ", ";\n  display: ", ";\n  align-items: ", ";\n  width: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  transform: ", ";\n  transition: ", ";\n"])), function (p) { return "100px"; }, function (p) { return p.theme.zIndex.navbar; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return p.theme.position.fixed; }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.alignItems.center; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.color.white; }, function (p) { return p.theme.shadow.light; }, function (p) { return p.mount ? "translateY(0)" : "translateY(-100%)"; }, function (p) { return "transform ".concat(p.mount ? "".concat(p.entryDelay / 1000, "s") : "".concat(p.exitDelay / 1000, "s")); });
exports.default = NavbarFixedStyled;
var templateObject_1;

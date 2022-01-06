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
var ModalOverlayStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  display: ", ";\n  position: ", ";\n  width: ", ";\n  height: ", ";\n  align-items: ", ";\n  left: ", ";\n  top: ", ";\n  justify-content: ", ";\n  opacity: ", ";\n  transition: ", ";\n"], ["\n  background-color: ", ";\n  display: ", ";\n  position: ", ";\n  width: ", ";\n  height: ", ";\n  align-items: ", ";\n  left: ", ";\n  top: ", ";\n  justify-content: ", ";\n  opacity: ", ";\n  transition: ", ";\n"])), function (p) { return p.theme.color.dark; }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.position.fixed; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.alignItems.center; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return p.theme.justifyContent.center; }, function (p) { return p.mount ? 0.8 : 0; }, function (p) { return p.mount ? "opacity ".concat(p.entryDelay / 1000, "s") : "opacity ".concat(p.exitDelay / 1000, "s"); });
exports.default = ModalOverlayStyled;
var templateObject_1;

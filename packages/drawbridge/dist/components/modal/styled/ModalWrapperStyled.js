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
var ModalWrapperStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  width: ", ";\n  height: ", ";\n  position: ", ";\n  top: ", ";\n  left: ", ";\n"], ["\n  display: ", ";\n  align-items: ", ";\n  justify-content: ", ";\n  width: ", ";\n  height: ", ";\n  position: ", ";\n  top: ", ";\n  left: ", ";\n"])), function (p) { return p.theme.display.flex; }, function (p) { return p.theme.alignItems.center; }, function (p) { return p.theme.justifyContent.center; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.position.fixed; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); });
exports.default = ModalWrapperStyled;
var templateObject_1;

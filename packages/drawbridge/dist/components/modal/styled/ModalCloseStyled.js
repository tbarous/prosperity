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
var Icon_1 = __importDefault(require("../../icon/Icon"));
var ThemeUtils_1 = require("../../../utils/ThemeUtils");
var ModalCloseStyled = (0, styled_components_1.default)(Icon_1.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: ", ";\n  top: ", ";\n  right: ", ";\n  position: ", ";\n  cursor: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: ", ";\n  display: ", ";\n  background-color: ", ";\n  border: ", ";\n"], ["\n  align-items: ", ";\n  top: ", ";\n  right: ", ";\n  position: ", ";\n  cursor: ", ";\n  border-radius: ", ";\n  color: ", ";\n  padding: ", ";\n  display: ", ";\n  background-color: ", ";\n  border: ", ";\n"])), function (p) { return p.theme.alignItems.center; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s2); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s2); }, function (p) { return p.theme.position.fixed; }, function (p) { return p.theme.cursor.pointer; }, function (p) { return p.theme.borderRadius.circle; }, function (p) { return p.theme.color.dark; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s2); }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.color.white; }, function (p) { return p.theme.border.medium; });
exports.default = ModalCloseStyled;
var templateObject_1;

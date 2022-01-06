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
var RadioStyled = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  position: ", ";\n  padding-left: ", ";\n  margin-bottom: ", ";\n  cursor: ", ";\n  font-size: ", ";\n  user-select: ", ";\n"], ["\n  display: ", ";\n  position: ", ";\n  padding-left: ", ";\n  margin-bottom: ", ";\n  cursor: ", ";\n  font-size: ", ";\n  user-select: ", ";\n"])), function (p) { return p.theme.display.block; }, function (p) { return p.theme.position.relative; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s13); }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s6); }, function (p) { return p.theme.cursor.pointer; }, function (p) { return p.theme.fontSize.lg; }, function (p) { return "none"; });
exports.default = RadioStyled;
var templateObject_1;

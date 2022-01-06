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
var InputStyledWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  display: ", ";\n  align-items: ", ";\n  position: ", ";\n  border-bottom: ", ";\n  border-color: ", ";\n"], ["\n  height: ", ";\n  display: ", ";\n  align-items: ", ";\n  position: ", ";\n  border-bottom: ", ";\n  border-color: ", ";\n"])), function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s10); }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.alignItems.center; }, function (p) { return p.theme.position.relative; }, function (p) { return p.theme.border.light; }, function (p) { return p.theme.color.light; });
exports.default = InputStyledWrapper;
var templateObject_1;

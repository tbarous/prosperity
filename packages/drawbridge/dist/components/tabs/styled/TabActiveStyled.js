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
var TabActiveStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  background-color: ", ";\n  position: ", ";\n  bottom: ", ";\n  width: ", ";\n  transform: ", ";\n  transition: ", ";\n"], ["\n  height: ", ";\n  background-color: ", ";\n  position: ", ";\n  bottom: ", ";\n  width: ", ";\n  transform: ", ";\n  transition: ", ";\n"])), function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s2); }, function (p) { return p.theme.color.secondary; }, function (p) { return p.theme.position.absolute; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return "".concat(p.width, "%"); }, function (p) { return "translateX(".concat(p.left, "%)"); }, function (p) { return "transform ".concat(p.speed, "s"); });
exports.default = TabActiveStyled;
var templateObject_1;

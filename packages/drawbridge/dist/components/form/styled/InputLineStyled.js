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
var InputLineStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: ", ";\n  background-color: ", ";\n  left: ", ";\n  width: ", ";\n  height: ", ";\n  transform: ", ";\n  transition: ", ";\n  bottom: ", ";\n"], ["\n  position: ", ";\n  background-color: ", ";\n  left: ", ";\n  width: ", ";\n  height: ", ";\n  transform: ", ";\n  transition: ", ";\n  bottom: ", ";\n"])), function (p) { return p.theme.position.absolute; }, function (p) { return p.theme.color.primary; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s0); }, function (p) { return p.theme.dimension.d100; }, function (p) { return (0, ThemeUtils_1.px)(p.theme.spacing.s1); }, function (p) { return p.focused ? "scale(1)" : "scale(0)"; }, function (p) { return "transform .5s"; }, function (p) { return "-1px"; });
exports.default = InputLineStyled;
var templateObject_1;

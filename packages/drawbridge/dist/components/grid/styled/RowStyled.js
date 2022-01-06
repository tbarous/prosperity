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
var RowStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-left: ", ";\n  margin-right: ", ";\n  height: ", ";\n  box-sizing: ", ";\n  display: ", ";\n  flex-wrap: ", ";\n  height: ", ";\n"], ["\n  margin-left: ", ";\n  margin-right: ", ";\n  height: ", ";\n  box-sizing: ", ";\n  display: ", ";\n  flex-wrap: ", ";\n  height: ", ";\n"])), function (p) { return "-".concat(p.gutter ? (0, ThemeUtils_1.px)((p.gutter * .5) + p.theme.spacing.s5) : (0, ThemeUtils_1.px)(p.theme.spacing.s5)); }, function (p) { return "-".concat(p.gutter ? (0, ThemeUtils_1.px)((p.gutter * .5) + p.theme.spacing.s5) : (0, ThemeUtils_1.px)(p.theme.spacing.s5)); }, function (p) { return p.theme.dimension.auto; }, function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.flexWrap.wrap; }, function (p) { return p.theme.dimension.d100; });
exports.default = RowStyled;
var templateObject_1;

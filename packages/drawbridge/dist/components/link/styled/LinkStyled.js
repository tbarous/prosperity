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
var LinkStyled = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  text-decoration: ", ";\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  position: ", ";\n"], ["\n  display: ", ";\n  text-decoration: ", ";\n  color: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  font-family: ", ";\n  position: ", ";\n"])), function (p) { return p.theme.display.block; }, function (p) { return p.theme.textDecoration.none; }, function (p) { return p.theme.color.dark; }, function (p) { return p.theme.fontWeight.bold; }, function (p) { return p.theme.fontSize.md; }, function (p) { return p.theme.fontFamily.primary; }, function (p) { return p.theme.position.relative; });
exports.default = LinkStyled;
var templateObject_1;

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
var TabStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: ", ";\n  text-align: ", ";\n  cursor: ", ";\n  display: ", ";\n  align-items: ", ";\n  position: ", ";\n  justify-content: ", ";\n  background-color: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n"], ["\n  flex: ", ";\n  text-align: ", ";\n  cursor: ", ";\n  display: ", ";\n  align-items: ", ";\n  position: ", ";\n  justify-content: ", ";\n  background-color: ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n"])), function (p) { return 1; }, function (p) { return p.theme.textAlign.center; }, function (p) { return p.theme.cursor.pointer; }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.alignItems.center; }, function (p) { return p.theme.position.relative; }, function (p) { return p.theme.justifyContent.center; }, function (p) { return p.theme.color.primary; }, function (p) { return p.theme.color.white; }, function (p) { return p.theme.fontFamily.primary; }, function (p) { return p.theme.fontSize.md; });
exports.default = TabStyled;
var templateObject_1;

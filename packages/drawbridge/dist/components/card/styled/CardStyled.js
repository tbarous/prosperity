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
var CardStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: ", ";\n  box-shadow: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  width: ", ";\n  transition: ", ";\n\n  &:hover {\n    box-shadow: ", "\n  }\n"], ["\n  box-sizing: ", ";\n  box-shadow: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  width: ", ";\n  transition: ", ";\n\n  &:hover {\n    box-shadow: ", "\n  }\n"])), function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return p.theme.shadow.light; }, function (p) { return p.theme.color.white; }, function (p) { return p.rounded && p.theme.borderRadius.medium; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.transition.elevation; }, function (p) { return p.theme.shadow.elevate; });
exports.default = CardStyled;
var templateObject_1;

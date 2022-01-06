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
var ModalHeaderStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  box-shadow: ", ";\n  font-size: ", ";\n  width: ", ";\n  font-family: ", ";\n  height: ", ";\n  box-sizing: ", ";\n"], ["\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  box-shadow: ", ";\n  font-size: ", ";\n  width: ", ";\n  font-family: ", ";\n  height: ", ";\n  box-sizing: ", ";\n"])), function (p) { return p.theme.borderRadius.medium; }, function (p) { return p.theme.borderRadius.medium; }, function (p) { return p.theme.shadow.medium; }, function (p) { return p.theme.fontSize.lg; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.fontFamily.secondary; }, function (p) { return p.theme.dimension.d10; }, function (p) { return p.theme.boxSizing.borderBox; });
exports.default = ModalHeaderStyled;
var templateObject_1;

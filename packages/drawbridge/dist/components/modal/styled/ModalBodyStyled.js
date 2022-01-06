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
var ModalBodyStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n  width: ", ";\n  height: ", ";\n  box-sizing: ", ";\n  overflow-y: ", ";\n"], ["\n  font-size: ", ";\n  width: ", ";\n  height: ", ";\n  box-sizing: ", ";\n  overflow-y: ", ";\n"])), function (p) { return p.theme.fontSize.md; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d70; }, function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return p.theme.overflow.auto; });
exports.default = ModalBodyStyled;
var templateObject_1;

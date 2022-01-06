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
var NavbarStaticStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", ";\n  z-index: ", ";\n  align-items: ", ";\n  display: ", ";\n  position: ", ";\n  width: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n"], ["\n  height: ", ";\n  z-index: ", ";\n  align-items: ", ";\n  display: ", ";\n  position: ", ";\n  width: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n"])), function (p) { return "100px"; }, function (p) { return p.theme.zIndex.navbar; }, function (p) { return p.theme.alignItems.center; }, function (p) { return p.theme.display.flex; }, function (p) { return p.theme.position.relative; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.transparent ? "" : p.theme.color.white; }, function (p) { return p.transparent ? "" : p.theme.shadow.light; });
exports.default = NavbarStaticStyled;
var templateObject_1;

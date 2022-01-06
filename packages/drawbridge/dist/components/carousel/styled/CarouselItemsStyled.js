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
var CarouselItemsStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  box-sizing: ", ";\n  transform: ", ";\n  transition: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  box-sizing: ", ";\n  transform: ", ";\n  transition: ", ";\n  padding-left: ", ";\n  padding-right: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"])), function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.boxSizing.contentBox; }, function (p) { return "translateX(-".concat(p.moveDistance, "%)"); }, function (p) { return "transform ".concat(p.speed, "s ease-out"); }, function (p) { return p.gutter && "".concat(p.gutter, "px"); }, function (p) { return p.gutter && "".concat(p.gutter, "px"); }, function (p) { return p.gutter && "-".concat(p.gutter, "px"); }, function (p) { return p.gutter && "-".concat(p.gutter, "px"); });
exports.default = CarouselItemsStyled;
var templateObject_1;

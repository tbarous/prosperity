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
var CarouselItemStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: ", ";\n  box-sizing: ", ";\n  height: ", ";\n  padding: ", ";\n  width: ", ";\n  left: ", ";\n"], ["\n  position: ", ";\n  box-sizing: ", ";\n  height: ", ";\n  padding: ", ";\n  width: ", ";\n  left: ", ";\n"])), function (p) { return p.theme.position.absolute; }, function (p) { return p.theme.boxSizing.borderBox; }, function (p) { return p.theme.dimension.d100; }, function (p) { return "0 ".concat(p.gutter && p.gutter / 2, "px"); }, function (p) { return "".concat(p.width, "%"); }, function (p) { return "".concat(p.leftDistance, "%"); });
exports.default = CarouselItemStyled;
var templateObject_1;

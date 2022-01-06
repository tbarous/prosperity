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
var CarouselStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: ", ";\n  position: ", ";\n  overflow: ", ";\n  width: ", ";\n  height: ", ";\n"], ["\n  display: ", ";\n  position: ", ";\n  overflow: ", ";\n  width: ", ";\n  height: ", ";\n"])), function (p) { return p.theme.display.flex; }, function (p) { return p.theme.position.relative; }, function (p) { return p.theme.overflow.hidden; }, function (p) { return p.theme.dimension.d100; }, function (p) { return p.theme.dimension.d100; });
exports.default = CarouselStyled;
var templateObject_1;

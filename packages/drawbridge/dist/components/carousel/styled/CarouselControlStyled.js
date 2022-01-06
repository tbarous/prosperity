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
var Carousel_1 = require("../../carousel/Carousel");
var CarouselControlStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: ", ";\n  position: ", ";\n  cursor: ", ";\n  left: ", ";\n  right: ", ";\n"], ["\n  z-index: ", ";\n  position: ", ";\n  cursor: ", ";\n  left: ", ";\n  right: ", ";\n"])), function (p) { return p.theme.zIndex.carouselControl; }, function (p) { return p.theme.position.absolute; }, function (p) { return p.theme.cursor.pointer; }, function (p) { return p.direction === Carousel_1.CarouselDirectionEnum.LEFT ? "1rem" : "auto"; }, function (p) { return p.direction === Carousel_1.CarouselDirectionEnum.RIGHT ? "1rem" : "auto"; });
exports.default = CarouselControlStyled;
var templateObject_1;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CarouselItemStyled_1 = __importDefault(require("../carousel/styled/CarouselItemStyled"));
var CarouselItem = function (props) {
    var children = props.children, className = props.className, itemWidth = props.itemWidth, leftDistance = props.leftDistance, gutter = props.gutter;
    return (react_1.default.createElement(CarouselItemStyled_1.default, { className: className, width: itemWidth, leftDistance: leftDistance, gutter: gutter }, children));
};
exports.default = CarouselItem;

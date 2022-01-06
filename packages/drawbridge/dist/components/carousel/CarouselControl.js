"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CarouselControlStyled_1 = __importDefault(require("../carousel/styled/CarouselControlStyled"));
var Carousel_1 = require("../carousel/Carousel");
var CarouselControl = function (props) {
    var children = props.children, className = props.className, _a = props.direction, direction = _a === void 0 ? Carousel_1.CarouselDirectionEnum.RIGHT : _a, _b = props.onMove, onMove = _b === void 0 ? function () { } : _b;
    return (react_1.default.createElement(CarouselControlStyled_1.default, { onClick: function () { return onMove(direction); }, direction: direction, className: className }, children));
};
exports.default = CarouselControl;

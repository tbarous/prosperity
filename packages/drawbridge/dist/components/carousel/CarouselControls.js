"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var CarouselControlsStyled_1 = __importDefault(require("../carousel/styled/CarouselControlsStyled"));
var Carousel_1 = require("../carousel/Carousel");
var CarouselControls = function (props) {
    var children = props.children, className = props.className, onMove = props.onMove, isOnStart = props.isOnStart, isOnEnd = props.isOnEnd;
    /**
     * Renders left handler control component if we are not at the start of the carousel (1st slide).
     * Renders right handler control component if we are not at the end of the carousel.
     * Attaches the onMove function on each handler component.
     * @param child
     * @return ReactElement
     */
    function getChild(child) {
        var direction = child.props.direction;
        if (!direction)
            return;
        if ((direction === Carousel_1.CarouselDirectionEnum.LEFT && isOnStart) || (direction === Carousel_1.CarouselDirectionEnum.RIGHT && isOnEnd))
            return;
        return (0, react_1.isValidElement)(child) && react_1.default.cloneElement(child, { onMove: onMove });
    }
    return (react_1.default.createElement(CarouselControlsStyled_1.default, { className: className }, react_1.Children.map(children, getChild)));
};
exports.default = CarouselControls;

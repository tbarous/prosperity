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
exports.CarouselDirectionEnum = void 0;
var react_1 = __importStar(require("react"));
var CarouselStyled_1 = __importDefault(require("../carousel/styled/CarouselStyled"));
var CarouselDirectionEnum;
(function (CarouselDirectionEnum) {
    CarouselDirectionEnum["LEFT"] = "left";
    CarouselDirectionEnum["RIGHT"] = "right";
})(CarouselDirectionEnum = exports.CarouselDirectionEnum || (exports.CarouselDirectionEnum = {}));
var Carousel = function (props) {
    var children = props.children, className = props.className, _a = props.itemsPerSlide, itemsPerSlide = _a === void 0 ? 1 : _a, _b = props.gutter, gutter = _b === void 0 ? 0 : _b, _c = props.start, start = _c === void 0 ? 0 : _c, change = props.change, _d = props.speed, speed = _d === void 0 ? 1 : _d;
    /**
     * The current position of the carousel.
     * Default: 0
     */
    var _e = (0, react_1.useState)(start), position = _e[0], setPosition = _e[1];
    /**
     * The number of carousel items.
     * This has to be passed from the CarouselItems child component.
     */
    var _f = (0, react_1.useState)(0), count = _f[0], setCount = _f[1];
    /**
     * The carousel is showing the first item.
     */
    var isOnStart = position === 0;
    /**
     * The carousel is showing the last item.
     */
    var isOnEnd = position === count - itemsPerSlide;
    /**
     * Add or subtract from position on each move.
     */
    var onMove = function (direction) { return setPosition(direction === CarouselDirectionEnum.LEFT ? position - 1 : position + 1); };
    /**
     * Gets the total number of items.
     * @param count
     */
    var getCount = function (count) { return setCount(count); };
    /**
     * The width of each item in percentage.
     */
    var itemWidth = 100 / itemsPerSlide;
    /**
     * Calculates the item's distance from the left.
     * @param index
     */
    var getLeftDistance = function (index) { return index * itemWidth; };
    /**
     * How much an item has to move on each swipe.
     */
    var moveDistance = position * itemWidth;
    var childProps = {
        isOnStart: isOnStart,
        isOnEnd: isOnEnd,
        gutter: gutter,
        onMove: onMove,
        getCount: getCount,
        itemWidth: itemWidth,
        moveDistance: moveDistance,
        getLeftDistance: getLeftDistance,
        speed: speed
    };
    (0, react_1.useEffect)(function () {
        if (typeof change === "number" && change <= count - itemsPerSlide && change >= 0)
            setPosition(change);
    }, [change]);
    return (react_1.default.createElement(CarouselStyled_1.default, { className: className }, react_1.Children.map(children, function (child) { return react_1.default.isValidElement(child) && react_1.default.cloneElement(child, childProps); })));
};
exports.default = Carousel;

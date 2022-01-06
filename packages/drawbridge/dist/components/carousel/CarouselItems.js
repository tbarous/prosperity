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
var CarouselItemsStyled_1 = __importDefault(require("../carousel/styled/CarouselItemsStyled"));
var CarouselItems = function (props) {
    var children = props.children, className = props.className, gutter = props.gutter, itemWidth = props.itemWidth, moveDistance = props.moveDistance, speed = props.speed, _a = props.getCount, getCount = _a === void 0 ? function () {
    } : _a, _b = props.getLeftDistance, getLeftDistance = _b === void 0 ? function () { return 1; } : _b;
    (0, react_1.useEffect)(function () { return getCount && getCount(react_1.Children.count(children)); }, []);
    return (react_1.default.createElement(CarouselItemsStyled_1.default, { className: className, moveDistance: moveDistance, gutter: gutter, speed: speed }, react_1.Children.map(children, function (child, index) {
        return react_1.default.isValidElement(child) && react_1.default.cloneElement(child, {
            leftDistance: getLeftDistance(index),
            gutter: gutter,
            itemWidth: itemWidth
        });
    })));
};
exports.default = CarouselItems;

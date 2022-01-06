"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ImageStyled_1 = __importDefault(require("../image/styled/ImageStyled"));
var ImageWrapperStyled_1 = __importDefault(require("./styled/ImageWrapperStyled"));
var Image = function (props) {
    var src = props.src, alt = props.alt, width = props.width, height = props.height, rounded = props.rounded;
    return (react_1.default.createElement(ImageWrapperStyled_1.default, { width: width, height: height },
        react_1.default.createElement(ImageStyled_1.default, { src: src, alt: alt, rounded: rounded, roundedTop: props["rounded-top"], roundedBottom: props["rounded-bottom"] })));
};
exports.default = Image;

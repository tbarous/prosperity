"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CardStyled_1 = __importDefault(require("../card/styled/CardStyled"));
var Card = function (props) {
    var children = props.children, className = props.className, rounded = props.rounded;
    return (react_1.default.createElement(CardStyled_1.default, { rounded: rounded, className: className }, children));
};
exports.default = Card;

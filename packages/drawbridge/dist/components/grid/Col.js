"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ColStyled_1 = __importDefault(require("../grid/styled/ColStyled"));
var Col = function (props) {
    var children = props.children, className = props.className, xs = props.xs, sm = props.sm, md = props.md, lg = props.lg, xl = props.xl, xxl = props.xxl, gutter = props.gutter;
    return (react_1.default.createElement(ColStyled_1.default, { className: className, xs: xs, sm: sm, md: md, lg: lg, xl: xl, xxl: xxl, gutter: gutter }, children));
};
exports.default = Col;

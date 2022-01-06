"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ContainerStyled_1 = __importDefault(require("../grid/styled/ContainerStyled"));
var Container = function (props) {
    var children = props.children, className = props.className, fluid = props.fluid;
    return (react_1.default.createElement(ContainerStyled_1.default, { className: className, fluid: fluid }, children));
};
exports.default = Container;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var NavbarFixedStyled_1 = __importDefault(require("../navbar/styled/NavbarFixedStyled"));
var NavbarFixed = function (props) {
    var children = props.children, className = props.className, unmountComponent = props.unmountComponent, mount = props.mount, entryDelay = props.entryDelay, exitDelay = props.exitDelay;
    return (react_1.default.createElement(NavbarFixedStyled_1.default, { className: className, mount: mount, entryDelay: entryDelay, exitDelay: exitDelay }, children));
};
exports.default = NavbarFixed;

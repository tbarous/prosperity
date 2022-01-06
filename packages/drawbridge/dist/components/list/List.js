"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ListStyled_1 = __importDefault(require("./styled/ListStyled"));
var List = function (props) {
    var children = props.children, className = props.className;
    return (react_1.default.createElement(ListStyled_1.default, { className: className }, children));
};
exports.default = List;

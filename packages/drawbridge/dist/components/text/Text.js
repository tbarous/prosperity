"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextStyled_1 = __importDefault(require("../text/styled/TextStyled"));
var Text = function (props) {
    var children = props.children, className = props.className, bold = props.bold;
    return (react_1.default.createElement(TextStyled_1.default, { className: className, bold: bold }, children));
};
exports.default = Text;

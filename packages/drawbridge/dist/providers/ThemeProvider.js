"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var react_1 = __importDefault(require("react"));
var ThemeProvider = function (props) {
    var children = props.children, className = props.className, theme = props.theme;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: function () { return theme; } }, children));
};
exports.default = ThemeProvider;

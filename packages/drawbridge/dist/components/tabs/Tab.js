"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TabStyled_1 = __importDefault(require("../tabs/styled/TabStyled"));
var Tab = function (props) {
    var children = props.children, className = props.className, _a = props.onClickTab, onClickTab = _a === void 0 ? function () { } : _a;
    return (react_1.default.createElement(TabStyled_1.default, { className: className, onClick: onClickTab }, children));
};
exports.default = Tab;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormStyled_1 = __importDefault(require("../form/styled/FormStyled"));
var Form = function (props) {
    var children = props.children, className = props.className, onSubmit = props.onSubmit;
    function onSubmitHandler(e) {
        e.preventDefault();
        onSubmit && onSubmit();
    }
    return (react_1.default.createElement(FormStyled_1.default, { onSubmit: onSubmitHandler, className: className }, children));
};
exports.default = Form;

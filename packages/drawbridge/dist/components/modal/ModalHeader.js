"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ModalHeaderStyled_1 = __importDefault(require("../modal/styled/ModalHeaderStyled"));
/**
 * Modal Header Component.
 * @param props
 * @constructor
 */
var ModalHeader = function (props) {
    var children = props.children, className = props.className;
    return (react_1.default.createElement(ModalHeaderStyled_1.default, { className: className }, children));
};
exports.default = ModalHeader;

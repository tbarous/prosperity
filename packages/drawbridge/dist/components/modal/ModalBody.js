"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ModalBodyStyled_1 = __importDefault(require("../modal/styled/ModalBodyStyled"));
/**
 * Modal Body Component.
 * @param props
 * @constructor
 */
var ModalBody = function (props) {
    var children = props.children, className = props.className;
    return (react_1.default.createElement(ModalBodyStyled_1.default, { className: className }, children));
};
exports.default = ModalBody;

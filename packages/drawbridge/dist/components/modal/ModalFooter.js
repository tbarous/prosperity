"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ModalFooterStyled_1 = __importDefault(require("../modal/styled/ModalFooterStyled"));
/**
 * Modal Footer Component.
 * @param props
 * @constructor
 */
var ModalFooter = function (props) {
    var children = props.children, className = props.className;
    return (react_1.default.createElement(ModalFooterStyled_1.default, { className: className }, children));
};
exports.default = ModalFooter;

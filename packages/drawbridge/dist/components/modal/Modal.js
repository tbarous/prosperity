"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useOnClickOutside_1 = __importDefault(require("../../hooks/useOnClickOutside"));
var _icons_1 = require("../../icons/index");
var ModalCloseStyled_1 = __importDefault(require("../modal/styled/ModalCloseStyled"));
var ModalOverlayStyled_1 = __importDefault(require("../modal/styled/ModalOverlayStyled"));
var ModalContentStyled_1 = __importDefault(require("../modal/styled/ModalContentStyled"));
var ModalWrapperStyled_1 = __importDefault(require("../modal/styled/ModalWrapperStyled"));
var Modal = function (props) {
    var children = props.children, className = props.className, closeOnClickOutside = props.closeOnClickOutside, dismissible = props.dismissible, unmountComponent = props.unmountComponent, mount = props.mount, entryDelay = props.entryDelay, exitDelay = props.exitDelay;
    var ref = (0, react_1.useRef)(null);
    if (closeOnClickOutside)
        (0, useOnClickOutside_1.default)(ref, function () { return unmountComponent(true); });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ModalOverlayStyled_1.default, { className: className, mount: mount, entryDelay: entryDelay, exitDelay: exitDelay }),
        react_1.default.createElement(ModalWrapperStyled_1.default, null,
            react_1.default.createElement(ModalContentStyled_1.default, { ref: ref, mount: mount, entryDelay: entryDelay, exitDelay: exitDelay },
                dismissible && react_1.default.createElement(ModalCloseStyled_1.default, { onClick: unmountComponent, width: 24, height: 24, icon: _icons_1.Times }),
                children))));
};
exports.default = Modal;

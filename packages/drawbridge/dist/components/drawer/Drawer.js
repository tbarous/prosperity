"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DrawerStyled_1 = __importDefault(require("../drawer/styled/DrawerStyled"));
var DrawerCloseStyled_1 = __importDefault(require("../drawer/styled/DrawerCloseStyled"));
var _icons_1 = require("../../icons/index");
var Drawer = function (props) {
    var children = props.children, className = props.className, overlay = props.overlay, unmountComponent = props.unmountComponent, mount = props.mount, entryDelay = props.entryDelay, exitDelay = props.exitDelay;
    return (react_1.default.createElement(DrawerStyled_1.default, { className: className, mount: mount, overlay: overlay, entryDelay: entryDelay, exitDelay: exitDelay },
        children,
        react_1.default.createElement(DrawerCloseStyled_1.default, { icon: _icons_1.Times, onClick: unmountComponent, width: 20, height: 20 })));
};
exports.default = Drawer;

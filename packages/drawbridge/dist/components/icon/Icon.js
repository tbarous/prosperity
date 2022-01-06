"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconStyled_1 = __importDefault(require("../icon/styled/IconStyled"));
var Icon = function (props) {
    var icon = props.icon, _a = props.width, width = _a === void 0 ? 14 : _a, _b = props.height, height = _b === void 0 ? 14 : _b, className = props.className, _c = props.onClick, onClick = _c === void 0 ? function () {
    } : _c;
    return (react_1.default.createElement(IconStyled_1.default, { onClick: onClick, className: className, width: width, height: height },
        react_1.default.createElement("svg", { "aria-hidden": "true", focusable: "false", "data-icon": icon.data, role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: icon.viewBox },
            react_1.default.createElement("path", { fill: icon.fill, d: icon.d }))));
};
exports.default = Icon;

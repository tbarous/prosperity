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
var LinkStyled_1 = __importDefault(require("./styled/LinkStyled"));
var LInkLineStyled_1 = __importDefault(require("./styled/LInkLineStyled"));
var Link = function (props) {
    var children = props.children, className = props.className, href = props.href, blank = props.blank, active = props.active;
    var _a = (0, react_1.useState)(false), hovered = _a[0], setHovered = _a[1];
    return (react_1.default.createElement(LinkStyled_1.default, { className: className, href: href, target: blank ? "blank" : "", onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); }, active: active },
        children,
        react_1.default.createElement(LInkLineStyled_1.default, { hovered: hovered, active: active })));
};
exports.default = Link;

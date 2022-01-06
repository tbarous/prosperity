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
var TooltipStyled_1 = __importDefault(require("./styled/TooltipStyled"));
var TooltipSeparatorStyled_1 = __importDefault(require("./styled/TooltipSeparatorStyled"));
var Tooltip = function (props) {
    var className = props.className, clickable = props.clickable, children = props.children;
    var _a = (0, react_1.useState)(false), active = _a[0], setActive = _a[1];
    var ref = (0, react_1.useRef)(null);
    clickable && (0, useOnClickOutside_1.default)(ref, function () { return setActive(false); });
    var onClick = function () { return clickable && setActive(!active); };
    var activate = function () { return !clickable && setActive(true); };
    var deactivate = function () { return !clickable && setActive(false); };
    return (react_1.default.createElement(TooltipStyled_1.default, { className: className, onMouseEnter: activate, onMouseLeave: deactivate, ref: ref },
        react_1.Children.map(children, function (child, index) {
            if ((0, react_1.isValidElement)(child) && index === 0)
                return (0, react_1.cloneElement)(child, { onClick: onClick });
        }),
        react_1.default.createElement(TooltipSeparatorStyled_1.default, null),
        active && react_1.Children.map(children, function (child, index) {
            if ((0, react_1.isValidElement)(child) && index === 1)
                return (0, react_1.cloneElement)(child);
        })));
};
exports.default = Tooltip;

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
var InputStyled_1 = __importDefault(require("../form/styled/InputStyled"));
var InputLineStyled_1 = __importDefault(require("../form/styled/InputLineStyled"));
var InputLabelStyled_1 = __importDefault(require("../form/styled/InputLabelStyled"));
var InputWrapperStyled_1 = __importDefault(require("../form/styled/InputWrapperStyled"));
var Input = function (props) {
    var className = props.className, label = props.label, focused = props.focused, value = props.value;
    var _a = (0, react_1.useState)(focused), isFocused = _a[0], setIsFocused = _a[1];
    var _b = (0, react_1.useState)(value), val = _b[0], setVal = _b[1];
    var inputRef = (0, react_1.useRef)(null);
    (0, useOnClickOutside_1.default)(inputRef, function () { return setIsFocused(false); });
    return (react_1.default.createElement(InputWrapperStyled_1.default, { focused: isFocused, ref: inputRef, onClick: function () { return setIsFocused(true); }, className: className },
        label && react_1.default.createElement(InputLabelStyled_1.default, { focused: isFocused, hasValue: !!val }, label),
        react_1.default.createElement(InputStyled_1.default, { onChange: function (e) { return setVal(e.target.value); } }),
        react_1.default.createElement(InputLineStyled_1.default, { focused: isFocused })));
};
exports.default = Input;

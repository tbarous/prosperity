"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonVariationEnum = exports.ButtonTypeEnum = exports.ButtonSizeEnum = void 0;
var react_1 = __importDefault(require("react"));
var ButtonStyled_1 = __importDefault(require("./styled/ButtonStyled"));
var ButtonWrapperStyled_1 = __importDefault(require("./styled/ButtonWrapperStyled"));
var ButtonIconStyled_1 = __importDefault(require("./styled/ButtonIconStyled"));
var ButtonSizeEnum;
(function (ButtonSizeEnum) {
    ButtonSizeEnum["SMALL"] = "Small";
    ButtonSizeEnum["MEDIUM"] = "Medium";
    ButtonSizeEnum["LARGE"] = "Large";
})(ButtonSizeEnum = exports.ButtonSizeEnum || (exports.ButtonSizeEnum = {}));
var ButtonTypeEnum;
(function (ButtonTypeEnum) {
    ButtonTypeEnum["BUTTON"] = "button";
    ButtonTypeEnum["SUBMIT"] = "submit";
    ButtonTypeEnum["RESET"] = "reset";
})(ButtonTypeEnum = exports.ButtonTypeEnum || (exports.ButtonTypeEnum = {}));
var ButtonVariationEnum;
(function (ButtonVariationEnum) {
    ButtonVariationEnum["PRIMARY"] = "Primary";
    ButtonVariationEnum["SECONDARY"] = "Secondary";
})(ButtonVariationEnum = exports.ButtonVariationEnum || (exports.ButtonVariationEnum = {}));
var Button = function (props) {
    var children = props.children, className = props.className, type = props.type, primary = props.primary, secondary = props.secondary, small = props.small, medium = props.medium, large = props.large, icon = props.icon, onClick = props.onClick;
    return (react_1.default.createElement(ButtonStyled_1.default, { className: className, onClick: onClick, type: type, role: "button", primary: primary, secondary: secondary, small: small, medium: medium, large: large },
        react_1.default.createElement(ButtonWrapperStyled_1.default, null,
            icon && react_1.default.createElement(ButtonIconStyled_1.default, { icon: icon, width: 20, height: 20, primary: primary, secondary: secondary }),
            children)));
};
exports.default = Button;

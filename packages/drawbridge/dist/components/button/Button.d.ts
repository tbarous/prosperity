import React from "react";
import { BasicComponentProps } from "../../typings/index";
import { IconInterface } from "../../icons/index";
export declare enum ButtonSizeEnum {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large"
}
export declare enum ButtonTypeEnum {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}
export declare enum ButtonVariationEnum {
    PRIMARY = "Primary",
    SECONDARY = "Secondary"
}
export interface ButtonMapping {
    primary?: boolean;
    secondary?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    icon?: IconInterface | null;
}
export interface ButtonProps extends BasicComponentProps, ButtonMapping {
    onClick?: () => void;
    type?: ButtonTypeEnum;
}
declare const Button: React.FunctionComponent<ButtonProps>;
export default Button;

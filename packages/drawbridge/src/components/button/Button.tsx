import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import ButtonStyled from "./styled/ButtonStyled";

export enum ButtonSizeEnum {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large"
}

export enum ButtonTypeEnum {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}

export enum ButtonVariationEnum {
    PRIMARY = "Primary",
    SECONDARY = "Secondary"
}

export interface ButtonMapping {
    primary?: boolean,
    secondary?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean
}

export interface ButtonProps extends BasicComponentProps, ButtonMapping {
    onClick?: () => void,
    type?: ButtonTypeEnum,
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps): ReactElement => {
    const {
        children,
        className,
        type,
        primary,
        secondary,
        small,
        medium,
        large,
        onClick,
    } = props;

    return (
        <ButtonStyled
            onClick={onClick}
            type={type}
            className={className}
            role="button"
            primary={primary}
            secondary={secondary}
            small={small}
            medium={medium}
            large={large}
        >
            {children}
        </ButtonStyled>
    );
}

export default Button;
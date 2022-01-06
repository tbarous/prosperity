import React, {ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import ButtonStyled from "./styled/ButtonStyled";
import {IconInterface} from "@icons";
import ButtonWrapperStyled from "./styled/ButtonWrapperStyled";
import ButtonIconStyled from "./styled/ButtonIconStyled";

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
    large?: boolean,
    icon?: IconInterface | null
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
        icon,
        onClick
    } = props;

    return (
        <ButtonStyled
            className={className}
            onClick={onClick}
            type={type}
            role="button"
            primary={primary}
            secondary={secondary}
            small={small}
            medium={medium}
            large={large}
        >
            <ButtonWrapperStyled>
                {icon && <ButtonIconStyled
                    icon={icon}
                    width={20}
                    height={20}
                    primary={primary}
                    secondary={secondary}
                />}

                {children}
            </ButtonWrapperStyled>
        </ButtonStyled>
    );
}

export default Button;
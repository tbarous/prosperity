import React, {FunctionComponent, ReactElement} from "react";
import {IconInterface} from "@icons";
import ButtonStyled from "@atoms/button/styled/ButtonStyled";
import ButtonContentIconStyled from "@atoms/button/styled/ButtonContentIconStyled";
import ButtonContentStyled from "@atoms/button/styled/ButtonContentStyled";
import {BasicComponentProps} from "@typings";

export enum ButtonSizes {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large"
}

export enum ButtonTypes {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}

export enum ButtonVariations {
    PRIMARY = "Primary",
    SECONDARY = "Secondary"
}

export enum ButtonRoles {
    BUTTON = "button"
}

export interface ButtonUIProps {
    primary?: boolean,
    secondary?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
}

export interface ButtonProps extends BasicComponentProps, ButtonUIProps {
    onClick?: () => void,
    type?: ButtonTypes,
    icon?: IconInterface,
    role?: string
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps): ReactElement => {
    const {children, className, type, primary, secondary, small, medium, large, icon, role, onClick} = props;

    const UIProps = {small, medium, large, primary, secondary};

    return (
        <ButtonStyled className={className} type={type} role={role} {...UIProps} onClick={onClick}>
            <ButtonContentStyled>
                {icon && <ButtonContentIconStyled icon={icon} {...UIProps} />}

                {children}
            </ButtonContentStyled>
        </ButtonStyled>
    );
}

export default Button;
import React, {ReactElement, ReactNode} from "react";
import {IconInterface} from "@icons";
import ButtonStyled from "@components/button/styled/ButtonStyled";
import ButtonContentIconStyled from "@components/button/styled/ButtonContentIconStyled";
import ButtonContentStyled from "@components/button/styled/ButtonContentStyled";
import {fn} from "@helpers";

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

export interface ButtonProps {
    children?: ReactNode,
    className?: string,
    onClick?: () => void,
    type?: ButtonTypes,
    primary?: boolean,
    secondary?: boolean,
    small?: boolean,
    medium?: boolean,
    large?: boolean,
    icon?: IconInterface,
    role?: string
}

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps): ReactElement => {
    const {
        children,
        className,
        type = ButtonTypes.BUTTON,
        primary = true,
        secondary = false,
        small = false,
        medium = true,
        large = false,
        icon = undefined,
        role = ButtonRoles.BUTTON,
        onClick = fn
    } = props;

    return (
        <ButtonStyled
            className={className}
            type={type}
            role={role}
            primary={primary}
            secondary={secondary}
            small={small}
            medium={medium}
            large={large}
            onClick={onClick}
        >
            <ButtonContentStyled>
                {icon && <ButtonContentIconStyled
                    icon={icon}
                    width={20}
                    height={20}
                    primary={primary}
                    secondary={secondary}
                />}

                {children}
            </ButtonContentStyled>
        </ButtonStyled>
    );
}

export default Button;
import React, {ReactElement, ReactNode} from "react";
import {IconInterface} from "@icons";
import ButtonStyled from "@components/button/styled/ButtonStyled";
import ButtonContentIconStyled from "@components/button/styled/ButtonContentIconStyled";
import ButtonContentStyled from "@components/button/styled/ButtonContentStyled";

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

interface T {
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

const Button: React.FunctionComponent<T> = (props: T): ReactElement => {
    const {
        children,
        className,
        type,
        primary,
        secondary,
        small,
        medium,
        large,
        icon ,
        role,
        onClick
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
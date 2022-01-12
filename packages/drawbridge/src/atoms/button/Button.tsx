import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps, StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

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

export interface ButtonStyledProps extends StyledProps {
    variation?: ButtonVariations
}

function getBackgroundColor(p: ButtonStyledProps) {
    if (p.variation === ButtonVariations.SECONDARY) {
        return p.theme.color.secondary;
    }

    return p.theme.color.primary;
}

function getColor(p: ButtonStyledProps) {
    if (p.variation === ButtonVariations.SECONDARY) {
        return p.theme.color.dark;
    }

    return p.theme.color.surface;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: ${p => px(p.theme.spacing.s4)};
  background-color: ${getBackgroundColor};
  color: ${getColor};
  cursor: ${p => p.theme.cursor.pointer};
  border: ${p => p.theme.border.none};
  border-radius: ${p => p.theme.borderRadius.xlarge};
  font-family: ${p => p.theme.fontFamily.primary};
  box-shadow: ${p => p.theme.shadow.light};
  font-size: ${p => p.theme.fontSize.md};
  font-weight: ${p => p.theme.fontWeight.bold};
  width: ${p => p.theme.dimension.d100};
  letter-spacing: ${p => p.theme.letterSpacing.small};
  transition: ${p => p.theme.transition.elevation};

  &:hover {
    box-shadow: ${p => p.theme.shadow.elevate};
  }

  &:focus {
    filter: ${p => p.theme.brightness.darken};
  }

  &:active {
    filter: ${p => p.theme.brightness.darken};
  }

  &:visited {
    filter: ${p => p.theme.brightness.darken};
  }
`;

export interface ButtonProps extends BasicComponentProps {
    type?: ButtonTypes,
    variation?: ButtonVariations,
    size?: ButtonSizes,
    role?: ButtonRoles,
    onClick?: () => void
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps): ReactElement => {
    const {children} = props;

    return <ButtonStyled {...props}>{children}</ButtonStyled>;
}

export default Button;
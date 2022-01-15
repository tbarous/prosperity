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
    variation?: ButtonVariations,
    size?: ButtonSizes,
    type?: ButtonTypes,
    role?: ButtonRoles,
    onClick?: () => void
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

function getPadding(p: ButtonStyledProps) {
    if (p.size === ButtonSizes.SMALL) {
        return px(p.theme.spacing.s3);
    }

    if (p.size === ButtonSizes.LARGE) {
        return px(p.theme.spacing.s5);
    }

    return px(p.theme.spacing.s4);
}

export const Button = styled.button.attrs(p => ({
    onClick: p.onClick,
    type: p.type,
    role: p.role
}))<ButtonStyledProps>`
  padding: ${getPadding};
  background-color: ${getBackgroundColor};
  color: ${getColor};
  cursor: ${p => p.theme.cursor.pointer};
  border: ${p => p.theme.border.none};
  border-radius: ${p => p.theme.borderRadius.xlarge};
  font-family: ${p => p.theme.fontFamily.primary};
  box-shadow: ${p => p.theme.shadow.light};
  font-size: ${p => px(p.theme.fontSize.fs3)};
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

export default Button;
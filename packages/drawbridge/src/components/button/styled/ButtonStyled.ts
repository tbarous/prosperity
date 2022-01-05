import styled from "styled-components";
import {StyledProps} from "@typings";
import {HTMLAttributes} from "react";
import {ButtonMapping} from "@components/button/Button";
import rules from "@rules";

export interface ButtonStyledProps extends StyledProps, ButtonMapping {
    type?: HTMLAttributes<string>,
    primary?: boolean,
    secondary?: boolean
}

const backgroundColor = (props: ButtonStyledProps) => {
    if (props.primary) return props.theme.color.primary;
    if (props.secondary) return props.theme.color.secondary;

    return props.theme.color.primary;
}

const color = (props: ButtonStyledProps) => {
    if (props.primary) return props.theme.color.white;
    if (props.secondary) return props.theme.color.dark;

    return props.theme.color.white;
}

const padding = (props: ButtonStyledProps) => {
    if (props.small) return props.theme.spacing.s4;
    if (props.medium) return props.theme.spacing.s5;
    if (props.large) return props.theme.spacing.s6;

    return props.theme.spacing.s5;
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  cursor: ${rules.cursor.pointer};
  border: ${(props: ButtonStyledProps) => props.theme.border.none};
  border-radius: ${(props: ButtonStyledProps) => props.theme.borderRadius.xlarge};
  font-family: ${(props: ButtonStyledProps) => props.theme.fontFamily.primary};
  box-shadow: ${(props: ButtonStyledProps) => props.theme.shadow.light};
  font-size: ${(props: ButtonStyledProps) => props.theme.fontSize.md};
  font-weight: ${(props: ButtonStyledProps) => props.theme.fontWeight.bold};
  width: ${(props: ButtonStyledProps) => props.theme.dimension.d100};
  height: ${(props: ButtonStyledProps) => props.theme.dimension.d100};
  letter-spacing: ${(props: ButtonStyledProps) => props.theme.letterSpacing.small};
  transition: ${(props: ButtonStyledProps) => props.theme.transition.elevation};
  padding: ${padding};
  background-color: ${backgroundColor};
  color: ${color};

  &:hover {
    box-shadow: ${(props: ButtonStyledProps) => props.theme.shadow.elevate};
  }

  &:focus {
    filter: ${(props: ButtonStyledProps) => props.theme.brightness.darken};
  }

  &:active {
    filter: ${(props: ButtonStyledProps) => props.theme.brightness.darken};
  }

  &:visited {
    filter: ${(props: ButtonStyledProps) => props.theme.brightness.darken};
  }
`;

export default ButtonStyled;
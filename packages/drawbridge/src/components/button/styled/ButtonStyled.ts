import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {ButtonUIProps} from "@components/button/Button";

export interface ButtonStyledProps extends StyledProps, ButtonUIProps {}

type T = ButtonStyledProps;

function getBackgroundColor(p: T) {
    if (p.primary) {
        return p.theme.color.primary;
    }

    if (p.secondary) {
        return p.theme.color.secondary;
    }

    return p.theme.color.primary;
}

function getColor(p: T) {
    if (p.primary) {
        return p.theme.color.surface;
    }

    if (p.secondary) {
        return p.theme.color.dark;
    }

    return p.theme.color.surface;
}

function getPadding(p: T) {
    if (p.small) {
        return px(p.theme.spacing.s4);
    }

    if (p.medium) {
        return px(p.theme.spacing.s5);
    }

    if (p.large) {
        return px(p.theme.spacing.s6);
    }

    return px(p.theme.spacing.s4);
}

const ButtonStyled = styled.button<T>`
  padding: ${getPadding};
  background-color: ${getBackgroundColor};
  color: ${getColor};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  border: ${(p: T) => p.theme.border.none};
  border-radius: ${(p: T) => p.theme.borderRadius.xlarge};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  font-size: ${(p: T) => p.theme.fontSize.md};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  width: ${(p: T) => p.theme.dimension.d100};
  letter-spacing: ${(p: T) => p.theme.letterSpacing.small};
  transition: ${(p: T) => p.theme.transition.elevation};
  &:hover {box-shadow: ${(p: T) => p.theme.shadow.elevate};}
  &:focus {filter: ${(p: T) => p.theme.brightness.darken};}
  &:active {filter: ${(p: T) => p.theme.brightness.darken};}
  &:visited {filter: ${(p: T) => p.theme.brightness.darken};}
`;

export default ButtonStyled;
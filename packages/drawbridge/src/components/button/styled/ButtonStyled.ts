import styled from "styled-components";
import {ButtonMapping} from "@components/button/Button";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps & ButtonMapping;

const ButtonStyled = styled.button<T>`
  cursor: ${(p: T) => p.theme.cursor.pointer};
  border: ${(p: T) => p.theme.border.none};
  border-radius: ${(p: T) => p.theme.borderRadius.xlarge};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  font-size: ${(p: T) => p.theme.fontSize.md};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  letter-spacing: ${(p: T) => p.theme.letterSpacing.small};
  transition: ${(p: T) => p.theme.transition.elevation};
  padding: ${(p: T) => p.small ? px(p.theme.spacing.s4) : (p.medium ? px(p.theme.spacing.s5) : (p.large ? px(p.theme.spacing.s6) : px(p.theme.spacing.s5)))};
  background-color: ${(p: T) => p.primary ? p.theme.color.primary : (p.secondary ? p.theme.color.secondary : p.theme.color.primary)};
  color: ${(p: T) => p.primary ? p.theme.color.white : (p.secondary ? p.theme.color.dark : p.theme.color.white)};

  &:hover {
    box-shadow: ${(p: T) => p.theme.shadow.elevate};
  }

  &:focus {
    filter: ${(p: T) => p.theme.brightness.darken};
  }

  &:active {
    filter: ${(p: T) => p.theme.brightness.darken};
  }

  &:visited {
    filter: ${(p: T) => p.theme.brightness.darken};
  }
`;

export default ButtonStyled;
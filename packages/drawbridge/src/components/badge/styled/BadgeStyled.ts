import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const BadgeStyled = styled.span<T>`
  position: ${(p: T) => p.theme.position.absolute};
  display: ${(p: T) => p.theme.display.inlineFlex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  background-color: ${(p: T) => p.theme.color.primary};
  color: ${(p: T) => p.theme.color.white};
  padding: ${(p: T) => `${p.theme.spacing.s2} ${p.theme.spacing.s4}`};
  border-radius: ${(p: T) => p.theme.borderRadius.large};
  font-size: ${(p: T) => p.theme.fontSize.sm};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  transition: ${(p: T) => p.theme.transition.elevation};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  font-family: ${(p: T) => p.theme.fontFamily.primary};

  &:hover {
    box-shadow: ${(p: T) => p.theme.shadow.elevate};
  }
`;

export default BadgeStyled;
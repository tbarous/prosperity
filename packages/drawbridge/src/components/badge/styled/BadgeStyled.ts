import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface
}

function getPadding(p: T) {
    return `${px(p.theme.spacing.s2)} ${px(p.theme.spacing.s4)}`
}

const BadgeStyled = styled.span<T>`
  padding: ${getPadding};
  position: ${(p: T) => p.theme.position.absolute};
  display: ${(p: T) => p.theme.display.inlineFlex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  background-color: ${(p: T) => p.theme.color.primary};
  color: ${(p: T) => p.theme.color.white};
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
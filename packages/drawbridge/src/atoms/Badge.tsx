import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface BadgeProps extends StyledProps {}

const Badge = styled.span<BadgeProps>`
  padding: ${p => `${px(p.theme.spacing.s2)} ${px(p.theme.spacing.s4)}`};
  position: ${p => p.theme.position.absolute};
  display: ${p => p.theme.display.inlineFlex};
  align-items: ${p => p.theme.alignItems.center};
  justify-content: ${p => p.theme.justifyContent.center};
  background-color: ${p => p.theme.color.primary};
  color: ${p => p.theme.color.surface};
  border-radius: ${p => p.theme.borderRadius.large};
  font-size: ${p => px(p.theme.fontSize.fs2)};
  box-shadow: ${p => p.theme.shadow.light};
  transition: ${p => p.theme.transition.elevation};
  font-weight: ${p => p.theme.fontWeight.bold};
  font-family: ${p => p.theme.fontFamily.primary};

  &:hover {
    box-shadow: ${p => p.theme.shadow.elevate};
  }
`;

export default Badge;
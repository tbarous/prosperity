import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

interface BadgeStyledProps extends StyledProps {
}

const BadgeStyled = styled.span<BadgeStyledProps>`
  position: ${rules.position.absolute};
  display: ${rules.display.inlineFlex};
  align-items: ${rules.alignItems.center};
  justify-content: ${rules.justifyContent.center};
  background-color: ${(props: BadgeStyledProps) => props.theme.color.primary};
  color: ${(props: BadgeStyledProps) => props.theme.color.white};
  padding: ${(props: BadgeStyledProps) => `${props.theme.spacing.s2} ${props.theme.spacing.s4}`};
  border-radius: ${(props: BadgeStyledProps) => props.theme.borderRadius.large};
  font-size: ${(props: BadgeStyledProps) => props.theme.fontSize.sm};
  box-shadow: ${(props: BadgeStyledProps) => props.theme.shadow.light};
  transition: ${(props: BadgeStyledProps) => props.theme.transition.elevation};
  font-weight: ${(props: BadgeStyledProps) => props.theme.fontWeight.bold};
  font-family: ${(props: BadgeStyledProps) => props.theme.fontFamily.primary};

  &:hover {
    box-shadow: ${(props: BadgeStyledProps) => props.theme.shadow.elevate};
  }
`;

export default BadgeStyled;
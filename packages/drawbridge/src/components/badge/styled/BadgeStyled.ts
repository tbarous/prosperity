import styled from "styled-components";
import {StyledProps} from "@typings";
import BadgeStyledGetters from "@components/badge/styled/BadgeStyledGetters";

export interface BadgeStyledProps extends StyledProps {
}

const BadgeStyled = styled.span<BadgeStyledProps>`
  position: ${BadgeStyledGetters.Position};
  display: ${BadgeStyledGetters.Display};
  align-items: ${BadgeStyledGetters.AlignItems};
  background-color: ${BadgeStyledGetters.BackgroundColor};
  color: ${BadgeStyledGetters.Color};
  justify-content: ${BadgeStyledGetters.JustifyContent};
  padding: ${BadgeStyledGetters.Padding};
  border-radius: ${BadgeStyledGetters.BorderRadius};
  font-size: ${BadgeStyledGetters.FontSize};
`;

export default BadgeStyled;
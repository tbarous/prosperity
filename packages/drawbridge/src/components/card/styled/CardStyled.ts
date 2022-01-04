import styled from "styled-components";
import {StyledProps} from "@typings";
import CardStyledGetters from "@components/card/styled/CardStyledGetters";

export interface CardStyledProps extends StyledProps {
    rounded?: boolean
}

const CardStyled = styled.div<CardStyledProps>`
  box-shadow: ${CardStyledGetters.BoxShadow};
  background-color: ${CardStyledGetters.BackgroundColor};
  border-radius: ${CardStyledGetters.BorderRadius};
  width: ${CardStyledGetters.Width};
  box-sizing: ${CardStyledGetters.BoxSizing};
  transition: ${CardStyledGetters.Transition};

  &:hover {
    box-shadow: ${CardStyledGetters.BoxShadowHovered}
  }
`;

export default CardStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface CardStyledProps extends StyledProps {
    rounded?: boolean
}

const CardStyled = styled.div<CardStyledProps>`
  box-sizing: ${rules.boxSizing.borderBox};
  box-shadow: ${(props: CardStyledProps) => props.theme.shadow.light};
  background-color: ${(props: CardStyledProps) => props.theme.color.white};
  border-radius: ${(props: CardStyledProps) => props.rounded && props.theme.borderRadius.medium};
  width: ${(props: CardStyledProps) => props.theme.dimension.d100};
  transition: ${(props: CardStyledProps) => props.theme.transition.elevation};

  &:hover {
    box-shadow: ${(props: CardStyledProps) => props.theme.shadow.elevate}
  }
`;

export default CardStyled;
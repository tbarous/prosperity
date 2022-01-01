import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    CardBackgroundColor,
    CardBorderRadius,
    CardBoxShadow,
    CardBoxSizing,
    CardWidth
} from "@components/card/styled/CardStyledGetters";

export interface CardStyledProps extends StyledProps {
    rounded?: boolean
}

const CardStyled = styled.div<CardStyledProps>`
  box-shadow: ${CardBoxShadow};
  background-color: ${CardBackgroundColor};
  border-radius: ${CardBorderRadius};
  width: ${CardWidth};
  box-sizing: ${CardBoxSizing};
`;

export default CardStyled;
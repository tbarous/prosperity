import styled from "styled-components";
import {StyledProps} from "@typings";
import TextStyledGetters from "@components/text/styled/TextStyledGetters";

export interface TextStyledProps extends StyledProps {
    bold?: boolean
}

const TextStyled = styled.div<TextStyledProps>`
  font-size: ${TextStyledGetters.FontSize};
  color: ${TextStyledGetters.Color};
  font-weight: ${TextStyledGetters.FontWeight};
`;

export default TextStyled;
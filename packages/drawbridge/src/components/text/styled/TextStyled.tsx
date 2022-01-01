import styled from "styled-components";
import {StyledProps} from "@typings";
import {TextColor, TextFontSize, TextFontWeight} from "@components/text/styled/TextStyledGetters";

export interface TextStyledProps extends StyledProps {
    bold?: boolean
}

const TextStyled = styled.div<TextStyledProps>`
  font-size: ${TextFontSize};
  color: ${TextColor};
  font-weight: ${TextFontWeight};
`;

export default TextStyled;
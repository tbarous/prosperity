import styled from "styled-components";
import {StyledProps} from "@typings";

export interface TextStyledProps extends StyledProps {
    bold?: boolean
}

const TextStyled = styled.div<TextStyledProps>`
  font-size: ${(props: TextStyledProps) => props.theme.fontSize.md};
  color: ${(props: TextStyledProps) => props.theme.color.dark};
  font-weight: ${(props: TextStyledProps) => props.theme.fontWeight.normal};
  font-family: ${(props: TextStyledProps) => props.theme.fontFamily.primary};
`;

export default TextStyled;
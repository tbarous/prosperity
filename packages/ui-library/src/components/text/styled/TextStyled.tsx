import styled from "styled-components";
import {StyledProps} from "@typings";

export interface TextStyledProps extends StyledProps {
    bold?: boolean
}

const TextStyled = styled.div<TextStyledProps>`
  font-size: ${(props: TextStyledProps) => props.theme.font.size.md};
  color: ${(props: TextStyledProps) => props.theme.color.dark};
  font-weight: ${(props: TextStyledProps) => props.bold ? props.theme.font.weight.bold : props.theme.font.weight.normal};
`;

export default TextStyled;
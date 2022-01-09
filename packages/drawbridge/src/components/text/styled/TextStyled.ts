import styled from "styled-components";
import {StyledProps} from "@typings";

interface TextStyledProps extends StyledProps {
    bold?: boolean
}

type T = TextStyledProps;

function getFontWeight(p: T) {
    if (p.bold) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

const TextStyled = styled.div<T>`
  font-size: ${(p: T) => p.theme.fontSize.md};
  color: ${(p: T) => p.theme.color.dark};
  font-weight: ${getFontWeight};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default TextStyled;
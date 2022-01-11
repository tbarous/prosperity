import styled from "styled-components";
import {StyledProps} from "@typings";
import {TextUIProps} from "@components/text/Text";

interface TextStyledProps extends StyledProps, TextUIProps {}

type T = TextStyledProps;

function getFontWeight(p: T) {
    if (p.light) {
        return p.theme.fontWeight.light;
    }

    if (p.bold) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

function getFontSize(p: T) {
    if (p.xs) {
        return p.theme.fontSize.xs;
    }

    if (p.sm) {
        return p.theme.fontSize.sm;
    }

    if (p.lg) {
        return p.theme.fontSize.lg;
    }

    return p.theme.fontSize.md;
}

const TextStyled = styled.div<T>`
  font-weight: ${getFontWeight};
  font-size: ${getFontSize};
  color: ${(p: T) => p.theme.color.dark};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default TextStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import {TextUIProps} from "@atoms/text/Text";
import {lighten, mute} from "@utils/ColorUtils";

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

function getColor(p: T) {
    if (p.muted) {
        return mute(p.theme.color.dark)
    }

    if (p.dark) {
        return p.theme.color.dark;
    }
}

const TextStyled = styled.p<T>`
  margin: 0;
  padding: 0;
  font-weight: ${getFontWeight};
  font-size: ${getFontSize};
  color: ${getColor};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default TextStyled;
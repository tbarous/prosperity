import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export enum TextBoldness {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}

export interface TextProps extends StyledProps {
    boldness?: string
}

function getFontWeight(p: TextProps) {
    if (p.boldness === TextBoldness.LIGHT) {
        return p.theme.fontWeight.light;
    }

    if (p.boldness === TextBoldness.BOLD) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

const Text = styled.p<TextProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${p => px(p.theme.fontSize.fs2)};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.primary};
`;

export default Text;
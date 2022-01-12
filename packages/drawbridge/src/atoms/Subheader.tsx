import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export enum SubheaderBoldness {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}

export interface SubheaderProps extends StyledProps {
    boldness?: string
}

function getFontWeight(p: SubheaderProps) {
    if (p.boldness === SubheaderBoldness.LIGHT) {
        return p.theme.fontWeight.light;
    }

    if (p.boldness === SubheaderBoldness.BOLD) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

const Subheader = styled.h2<SubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${p => px(p.theme.fontSize.fs6)};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

export default Subheader;
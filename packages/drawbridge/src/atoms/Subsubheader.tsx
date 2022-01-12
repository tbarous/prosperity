import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export enum SubsubheaderBoldness {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}

export interface SubsubheaderProps extends StyledProps {
    boldness?: string
}

function getFontWeight(p: SubsubheaderProps) {
    if (p.boldness === SubsubheaderBoldness.LIGHT) {
        return p.theme.fontWeight.light;
    }

    if (p.boldness === SubsubheaderBoldness.BOLD) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

const Subsubheader = styled.h3<SubsubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${p => px(p.theme.fontSize.fs5)};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

export default Subsubheader;
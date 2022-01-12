import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export enum SubsubsubheaderBoldness {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}

export interface SubsubsubheaderProps extends StyledProps {
    boldness?: string
}

function getFontWeight(p: SubsubsubheaderProps) {
    if (p.boldness === SubsubsubheaderBoldness.LIGHT) {
        return p.theme.fontWeight.light;
    }

    if (p.boldness === SubsubsubheaderBoldness.BOLD) {
        return p.theme.fontWeight.bold;
    }

    return p.theme.fontWeight.normal;
}

const Subsubsubheader = styled.h4<SubsubsubheaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${p => px(p.theme.fontSize.fs4)};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

export default Subsubsubheader;
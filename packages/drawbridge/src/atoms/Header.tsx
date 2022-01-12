import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export enum HeaderBoldness {
    LIGHT = "light",
    NORMAL = "normal",
    BOLD = "bold"
}

export interface HeaderProps extends StyledProps {
    boldness?: string
}

function getFontWeight(p: HeaderProps) {
    if (p.boldness === HeaderBoldness.LIGHT) {
        return p.theme.fontWeight.light;
    }

    if (p.boldness === HeaderBoldness.NORMAL) {
        return p.theme.fontWeight.normal;
    }

    return p.theme.fontWeight.bold;
}

const Header = styled.h1<HeaderProps>`
  font-weight: ${getFontWeight};
  margin: ${p => p.theme.spacing.s0};
  padding: ${p => p.theme.spacing.s0};
  font-size: ${p => px(p.theme.fontSize.fs6)};
  color: ${p => p.theme.color.dark};
  font-family: ${p => p.theme.fontFamily.secondary};
`;

export default Header;
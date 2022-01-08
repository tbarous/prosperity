import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

interface T {
    theme: ThemeInterface,
    dark: boolean,
    light: boolean
}

function getColor(p: T) {
    return p.light ? p.theme.color.dark : p.theme.color.white;
}

function getHoveredColor(p: T) {
    return p.light ? p.theme.color.white : p.theme.color.dark;
}

const DrawerLinkStyled = styled.div<T>`
  padding: ${(p: T) => px(p.theme.spacing.s6)};
  width: ${(p: T) => p.theme.dimension.d100};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  font-family: ${p => p.theme.fontFamily.primary};
  color: ${getColor};
  cursor: ${(p: T) => p.theme.cursor.pointer};

  &:hover {
    background: ${(p: T) => "#737373"};
    color: ${getHoveredColor};
  }
`;

export default DrawerLinkStyled;
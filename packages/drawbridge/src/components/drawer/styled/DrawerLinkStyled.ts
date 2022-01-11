import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import {lighten} from "@utils/ColorUtils";

export interface DrawerLinkStyledProps extends StyledProps, DrawerUIProps {}

type T = DrawerLinkStyledProps;

function getColor(p: T) {
    if (p.light) {
        return p.theme.color.dark;
    }

    if (p.dark) {
        return p.theme.color.surface;
    }

    return p.theme.color.dark;
}

function getHoveredColor(p: T) {
    // if (p.light) {
    //     return p.theme.color.dark;
    // }
    //
    // if (p.dark) {
    //     return p.theme.color.surface;
    // }

    return p.theme.color.primary;
}

function getBackgroundColor(p: T) {
    return lighten(p.theme.color.primary, 0.2);
}

const DrawerLinkStyled = styled.div<T>`
  color: ${getColor};
  padding: .75rem .5rem;
  margin: 0 .5rem;
  border-radius: 4px;
    //padding: ${(p: T) => px(p.theme.spacing.s6)};
    //width: ${(p: T) => p.theme.dimension.d100};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  font-family: ${p => p.theme.fontFamily.primary};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  font-weight: bold;
  font-size: ${(p: T) => p.theme.fontSize.md};

  transition: .3s;

  svg {
    color: ${(p: T) => lighten(p.theme.color.dark, 0.8)}
  }

  &:hover {
    background: ${getBackgroundColor};
    color: ${getHoveredColor};

    svg {
      color: ${getHoveredColor};
    }
  }
`;

export default DrawerLinkStyled;
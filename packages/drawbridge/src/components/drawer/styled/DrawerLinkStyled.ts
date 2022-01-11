import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";

export interface DrawerLinkStyledProps extends StyledProps, DrawerUIProps {}

type T = DrawerLinkStyledProps;

function getColor(p: T) {
    if (p.light) {
        return p.theme.color.dark;
    }

    if (p.dark) {
        return p.theme.color.white;
    }
}

function getHoveredColor(p: T) {
    if (p.light) {
        return p.theme.color.white;
    }

    if (p.dark) {
        return p.theme.color.dark;
    }
}

const DrawerLinkStyled = styled.div<T>`
  color: ${getColor};
  padding: 1rem .5rem;
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
  &:hover {
    background: ${(p: T) => p.theme.color.primary}; 
    color: ${getHoveredColor};
  }
`;

export default DrawerLinkStyled;
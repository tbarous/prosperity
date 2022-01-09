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
  padding: ${(p: T) => px(p.theme.spacing.s6)};
  width: ${(p: T) => p.theme.dimension.d100};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  font-family: ${p => p.theme.fontFamily.primary};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  &:hover {background: ${(p: T) => "#737373"}; color: ${getHoveredColor};}
`;

export default DrawerLinkStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";
import {lighten} from "@utils/ColorUtils";
import Icon from "@atoms/Icon";
import Text from "@atoms/Text";

export enum DrawerPositions {
    FIXED = "fixed",
    STATIC = "static"
}

interface Props extends StyledProps {
    position?: DrawerPositions
}

function getPosition(p: Props) {
    if (p.position === DrawerPositions.FIXED) return p.theme.position.fixed;

    return p.theme.position.relative;
}

const Drawer = styled.div<Props>`
  width: ${p => px(p.theme.dimension.drawer.width)};
  max-width: ${p => px(p.theme.dimension.drawer.width)};
  position: ${getPosition};
  background-color: ${p => p.theme.color.dark};
  display: ${p => p.theme.display.flex};
  height: ${p => p.theme.dimension.d100};
  box-shadow: ${p => p.theme.shadow.strong};
  overflow: ${p => p.theme.overflow.hidden};
  z-index: ${p => p.theme.zIndex.drawer};
`;

export default Drawer;

export const DrawerContent = styled.div<StyledProps>`
  z-index: ${p => p.theme.zIndex.drawerContent};
  width: ${p => p.theme.dimension.d100};
`;

export const DrawerLink = styled.div<StyledProps>`
  position: relative;
  color: ${p => p.theme.color.dark};
  padding: .75rem .5rem;
  margin: 0 .5rem;
  border-radius: 4px;
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  font-family: ${p => p.theme.fontFamily.primary};
  cursor: ${p => p.theme.cursor.pointer};
  font-weight: bold;
  font-size: ${p => p.theme.fontSize.fs3};
  transition: .3s;

  svg {
    color: ${p => lighten(p.theme.color.dark, 0.8)}
  }

  &:hover {
    background: ${p => lighten(p.theme.color.primary, 0.2)};
    color: ${p => p.theme.color.primary};

    svg {
      color: ${p => p.theme.color.primary};
    }
  }
`;

export const DrawerLinkIcon = styled(Icon)<StyledProps>`
  width: ${p => px(p.theme.spacing.s6)};
  height: ${p => px(p.theme.spacing.s6)};
`;

export const DrawerLinkText = styled(Text)<StyledProps>`
  margin-left: 2rem;
  //position: absolute;
  //left: 3rem;
  //top: 15px;
`;

export const DrawerOverlay = styled.div<StyledProps>`
  background: ${p => "rgba(255, 255, 255, 0.7)"};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
  position: ${p => p.theme.position.absolute};
  top: ${p => p.theme.spacing.s0};
  left: ${p => p.theme.spacing.s0};
`

export const DrawerToggler = styled.div<StyledProps>`
  width: ${p => px(p.theme.dimension.drawer.toggler.width)};
  height: ${p => px(p.theme.dimension.drawer.toggler.height)};
  background: ${p => p.theme.color.dark};
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  justify-content: ${p => p.theme.justifyContent.center};
  border-radius: ${p => p.theme.borderRadius.small};
  cursor: ${p => p.theme.cursor.pointer};
  position: ${p => p.theme.position.absolute};
  box-shadow: ${p => p.theme.shadow.lighter};
  z-index: ${p => p.theme.zIndex.drawerToggler};
`;

export const DrawerTogglerIcon = styled(Icon)<StyledProps>`
  color: ${p => p.theme.color.dark};
  width: ${p => px(p.theme.dimension.drawer.toggler.icon)};
  height: ${p => px(p.theme.dimension.drawer.toggler.icon)};
`;
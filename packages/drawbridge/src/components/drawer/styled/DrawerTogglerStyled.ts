import styled from "styled-components";
import {px, transition} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    dark?: boolean,
    light?: boolean,
    mount?: boolean
}

function getLeft(p: T) {
    return p.mount ? px(p.theme.dimension.drawerWidth - p.theme.dimension.drawerTogglerWidth / 2) : "-10px";
}

function getTransition(p: T) {
    return transition("left", p.theme.animation.drawer);
}

const DrawerTogglerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  top: ${(p: T) => px(p.theme.spacing.s6)};
  left: ${getLeft};
  border-radius: ${(p: T) => p.theme.borderRadius.small};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  position: ${(p: T) => p.theme.position.absolute};
  background: ${(p: T) => p.light ? p.theme.color.white : p.theme.color.dark};
  box-shadow: ${(p: T) => p.theme.shadow.lighter};
  transition: ${getTransition};
  width: ${(p: T) => px(p.theme.dimension.drawerTogglerWidth)};
  height: ${(p: T) => px(p.theme.dimension.drawerTogglerHeight)};
  z-index: ${(p: T) => p.theme.zIndex.drawerToggler};
`;

export default DrawerTogglerStyled;
import styled from "styled-components";
import {px, transition} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    dark?: boolean,
    light?: boolean,
    unmount: boolean
}

function getLeft(p: T) {
    return p.unmount ? `-${px(p.theme.spacing.s3)}` : px(p.theme.dimension.drawer.width - p.theme.dimension.drawer.toggler.width / 2);
}

function getTransition(p: T) {
    return transition({property: "left", ms: p.theme.animation.drawer});
}

function getTop(p: T) {
    return px(p.theme.spacing.s6);
}

function getWidth(p: T) {
    return px(p.theme.dimension.drawer.toggler.width);
}

function getHeight(p: T) {
    return px(p.theme.dimension.drawer.toggler.height);
}

const DrawerTogglerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  border-radius: ${(p: T) => p.theme.borderRadius.small};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  position: ${(p: T) => p.theme.position.absolute};
  background: ${(p: T) => p.light ? p.theme.color.white : p.theme.color.dark};
  box-shadow: ${(p: T) => p.theme.shadow.lighter};
  z-index: ${(p: T) => p.theme.zIndex.drawerToggler};
  top: ${getTop};
  width: ${getWidth};
  height: ${getHeight};
  left: ${getLeft};
  transition: ${getTransition};
`;

export default DrawerTogglerStyled;
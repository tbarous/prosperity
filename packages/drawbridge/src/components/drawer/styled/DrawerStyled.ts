import styled from "styled-components";
import {px, transition} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    dark?: boolean,
    light?: boolean,
    fixed?: boolean,
    transparent?: boolean,
    unmount?: boolean,
    small?: boolean
}

function getMaxWidth(p: T) {
    if (p.small === undefined) {
        return p.unmount ? 0 : px(p.theme.dimension.drawer.width);
    }

    return p.small ? px(p.theme.dimension.drawer.small) : px(p.theme.dimension.drawer.width);
}

function getBackgroundColor(p: T) {
    return p.transparent ? p.theme.color.transparent : (p.light ? p.theme.color.white : p.theme.color.dark);
}

function getPosition(p: T) {
    return p.fixed ? p.theme.position.fixed : p.theme.position.relative;
}

function getTransition(p: T) {
    return transition({property: "all", ms: p.theme.animation.drawer});
}

function getWidth(p: T) {
    if (p.small === undefined) {
        return p.unmount ? 0 : px(p.theme.dimension.drawer.width);
    }

    return p.small ? px(p.theme.dimension.drawer.small) : px(p.theme.dimension.drawer.width);
}

const DrawerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  height: ${(p: T) => p.theme.dimension.d100};
  box-shadow: ${(p: T) => p.theme.shadow.strong};
  overflow: ${(p: T) => p.theme.overflow.hidden};
  z-index: ${(p: T) => p.theme.zIndex.drawer};
  width: ${getWidth};
  position: ${getPosition};
  background-color: ${getBackgroundColor};
  max-width: ${getMaxWidth};
  transition: ${getTransition};
`;

export default DrawerStyled;
import styled, {keyframes} from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import {animation, px, transition} from "@utils/ThemeUtils";

type T =
    { fixed?: boolean, light?: boolean, dark?: boolean, transparent?: boolean }
    & StyledProps
    & useMountChildStyledProps;

const slideIn = (p: T) => keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: ${px(p.theme.dimension.drawerWidth)};
  }
`;

function getMaxWidth(p: T) {
    return p.mount ? px(p.theme.dimension.drawerWidth) : 0;
}

function getBackgroundColor(p: T) {
    return p.transparent ? "transparent" : (p.light ? p.theme.color.white : p.theme.color.dark);
}

function getPosition(p: T) {
    return p.fixed ? p.theme.position.fixed : p.theme.position.relative;
}

function getEntryAnimation(p: T) {
    return animation(slideIn, p.theme.animation.drawer);
}

function getExitTransition(p: T) {
    return transition("max-width", p.theme.animation.drawer);
}

const DrawerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  width: ${(p: T) => px(p.theme.dimension.drawerWidth)};
  max-width: ${getMaxWidth};
  height: ${(p: T) => p.theme.dimension.d100};
  background-color: ${getBackgroundColor};
  position: ${getPosition};
  box-shadow: ${(p: T) => p.theme.shadow.strong};
  overflow: ${(p: T) => p.theme.overflow.hidden};
  z-index: ${(p: T) => p.theme.zIndex.drawer};
  animation: ${getEntryAnimation};
  transition: ${getExitTransition};
`;

export default DrawerStyled;
import styled, {keyframes} from "styled-components";
import {px, transformY, transition} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    unmount: boolean
}

function getHeight(p: T) {
    return px(p.theme.dimension.navbar.height);
}

function getTransform(p: T) {
    return transformY(p.unmount, -p.theme.dimension.navbar.height);
}

function getTransition(p: T) {
    return transition({ms: p.theme.animation.navbar})
}

function getTop(p: T) {
    return px(p.theme.spacing.s0);
}

const NavbarFixedStyled = styled.div<T>`
  z-index: ${(p: T) => p.theme.zIndex.navbar};
  position: ${(p: T) => p.theme.position.fixed};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  width: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.theme.color.white};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  height: ${getHeight};
  top: ${getTop};
  transform: ${getTransform};
  transition: ${getTransition};
`;

export default NavbarFixedStyled;
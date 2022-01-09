import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

interface T {
    theme: ThemeInterface,
    transparent?: boolean
}

function getHeight(p: T) {
    return px(p.theme.dimension.navbar.height);
}

function getBackgroundColor(p: T) {
    return p.transparent ? p.theme.color.transparent : p.theme.color.white;
}

function getBoxShadow(p: T) {
    if (!p.transparent) {
        return p.theme.shadow.light;
    }
}

const NavbarStaticStyled = styled.div<T>`
  z-index: ${(p: T) => p.theme.zIndex.navbar};
  align-items: ${(p: T) => p.theme.alignItems.center};
  display: ${(p: T) => p.theme.display.flex};
  position: ${(p: T) => p.theme.position.relative};
  width: ${(p: T) => p.theme.dimension.d100};
  background-color: ${getBackgroundColor};
  box-shadow: ${getBoxShadow};
  height: ${getHeight};
`;

export default NavbarStaticStyled;
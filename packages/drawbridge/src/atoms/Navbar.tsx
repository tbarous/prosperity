import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export enum NavbarColorVariations {
    LIGHT = "light",
    DARK = "dark",
    TRANSPARENT = "transparent"
}

export enum NavbarPositionVariations {
    STATIC = "static",
    FIXED = "fixed"
}

interface Props extends StyledProps {
    variation?: NavbarColorVariations,
    position?: NavbarPositionVariations
}

function getBackgroundColor(p: Props) {
    if (p.variation === NavbarColorVariations.TRANSPARENT) {
        return p.theme.color.transparent;
    }

    if (p.variation === NavbarColorVariations.DARK) {
        return p.theme.color.dark;
    }

    return p.theme.color.surface;
}

function getBoxShadow(p: Props) {
    if (p.variation === NavbarColorVariations.TRANSPARENT) {
        return
    }

    return p.theme.shadow.light;
}

function getColor(p: Props) {
    if (p.variation === NavbarColorVariations.DARK) {
        return p.theme.color.surface;
    }

    return p.theme.color.dark;
}

function getPosition(p: Props) {
    if (p.position === NavbarPositionVariations.FIXED) {
        return p.theme.position.fixed;
    }

    return p.theme.position.relative;
}

const Navbar = styled.div<Props>`
  background-color: ${getBackgroundColor};
  color: ${getColor};
  padding-left: ${p => px(p.theme.spacing.s3)};
  padding-right: ${p => px(p.theme.spacing.s3)};
  font-family: ${p => p.theme.fontFamily.primary};
  box-shadow: ${getBoxShadow};
  height: ${p => px(p.theme.dimension.navbar.height)};
  z-index: ${p => p.theme.zIndex.navbar};
  align-items: ${p => p.theme.alignItems.center};
  display: ${p => p.theme.display.flex};
  position: ${getPosition};
  width: ${p => p.theme.dimension.d100};
`;

export default Navbar;
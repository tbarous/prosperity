import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export enum NavbarVariations {
    LIGHT = "light",
    DARK = "dark",
    TRANSPARENT = "transparent"
}

interface Props extends StyledProps {
    variation?: NavbarVariations
}

function getBackgroundColor(p: Props) {
    if (p.variation === NavbarVariations.TRANSPARENT) {
        return p.theme.color.transparent;
    }

    if (p.variation === NavbarVariations.DARK) {
        return p.theme.color.dark;
    }

    return p.theme.color.surface;
}

function getBoxShadow(p: Props) {
    if (p.variation === NavbarVariations.TRANSPARENT) {
        return
    }

    return p.theme.shadow.light;
}

function getColor(p: Props) {
    if (p.variation === NavbarVariations.DARK) {
        return p.theme.color.surface;
    }

    return p.theme.color.dark;
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
  position: ${p => p.theme.position.relative};
  width: ${p => p.theme.dimension.d100};
`;

export default Navbar;
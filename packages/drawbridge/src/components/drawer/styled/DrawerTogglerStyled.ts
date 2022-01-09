import styled from "styled-components";
import {px, transition} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";

interface DrawerToggler extends StyledProps, DrawerUIProps {
    display?: boolean
}

type T = DrawerToggler;

function getLeft(p: T) {
    const open = px(p.theme.dimension.drawer.width - p.theme.dimension.drawer.toggler.width / 2);

    if (p.small === undefined) {
        if (p.display) {
            return `-${px(p.theme.spacing.s3)}`;
        } else {
            return open
        }
    }

    if (p.small) {
        return px(p.theme.dimension.drawer.small - p.theme.dimension.drawer.toggler.width / 2);
    } else {
        return open;
    }
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

function getBackgroundColor(p: T) {
    if (p.light) {
        return p.theme.color.white;
    }

    if (p.dark) {
        return p.theme.color.dark;
    }
}

const DrawerTogglerStyled = styled.div<T>`
  top: ${getTop};
  width: ${getWidth};
  height: ${getHeight};
  left: ${getLeft};
  transition: ${getTransition};
  background: ${getBackgroundColor};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  border-radius: ${(p: T) => p.theme.borderRadius.small};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  position: ${(p: T) => p.theme.position.absolute};
  box-shadow: ${(p: T) => p.theme.shadow.lighter};
  z-index: ${(p: T) => p.theme.zIndex.drawerToggler};
`;

export default DrawerTogglerStyled;
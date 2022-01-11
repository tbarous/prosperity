import styled from "styled-components";
import {px, transition} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";

interface DrawerStyledProps extends StyledProps, DrawerUIProps {
    transition?: boolean,
}

type T = DrawerStyledProps;

function getWidth(p: T) {
    if (p.small === undefined) {
        if (p.transition) {
            return px(p.theme.dimension.drawer.width);
        } else {
            return 0;
        }
    }

    if (p.small) {
        return px(p.theme.dimension.drawer.small);
    } else {
        return px(p.theme.dimension.drawer.width);
    }
}

function getBackgroundColor(p: T) {
    if (p.transparent) {
        return p.theme.color.transparent;
    }

    if (p.light) {
        return p.theme.color.surface;
    }

    if (p.dark) {
        return p.theme.color.dark;
    }

    return p.theme.color.dark;
}

function getPosition(p: T) {
    if (p.fixed) {
        return p.theme.position.fixed;
    }

    return p.theme.position.relative;
}

function getTransition(p: T) {
    return transition({property: "all", ms: p.theme.animation.drawer});
}

const DrawerStyled = styled.div<T>`
  width: ${getWidth};
  max-width: ${getWidth};
  position: ${getPosition};
  background-color: ${getBackgroundColor};
  transition: ${getTransition};
  display: ${(p: T) => p.theme.display.flex};
  height: ${(p: T) => p.theme.dimension.d100};
  box-shadow: ${(p: T) => p.theme.shadow.strong};
  overflow: ${(p: T) => p.theme.overflow.hidden};
  z-index: ${(p: T) => p.theme.zIndex.drawer};
`;

export default DrawerStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";
import {transition} from "@utils/ThemeUtils";

interface DrawerOverlayProps extends StyledProps, DrawerUIProps {
    transition?: boolean
}

type T = DrawerOverlayProps;

function getOpacity(p: T) {
    if (!p.transition) return 0;

    if (p.transition) return 1;
}

function getTransition(p: T) {
    return transition({ms: p.theme.animation.drawer, property: "opacity"})
}

const DrawerPageOverlayStyled = styled.div<T>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: ${(p: T) => p.theme.color.light};
  z-index: 1;
  transition: ${getTransition};
  opacity: ${getOpacity};
`

export default DrawerPageOverlayStyled;
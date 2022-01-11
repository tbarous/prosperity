import styled from "styled-components";
import {StyledProps} from "@typings";
import {DrawerUIProps} from "@components/drawer/Drawer";

interface DrawerOverlayProps extends StyledProps, DrawerUIProps {}

type T = DrawerOverlayProps;

function getBackground(p: T) {
    if (p.light) {
        return "rgba(255, 255, 255, 0.7)";
    }

    if (p.dark) {
        return "rgba(0, 0, 0, 0.7)";
    }
}

const DrawerOverlay = styled.div<T>`
  background: ${getBackground};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  position: ${(p: T) => p.theme.position.absolute};
  top: ${(p: T) => p.theme.spacing.s0};
  left: ${(p: T) => p.theme.spacing.s0};
`

export default DrawerOverlay;
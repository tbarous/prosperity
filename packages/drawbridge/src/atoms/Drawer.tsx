import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export enum DrawerPositions {
    FIXED = "fixed",
    STATIC = "static"
}

interface Props extends StyledProps {
    position?: DrawerPositions
}

function getPosition(p: Props) {
    if (p.position === DrawerPositions.FIXED) return p.theme.position.fixed;

    return p.theme.position.relative;
}

const Drawer = styled.div<Props>`
  width: ${p => px(p.theme.dimension.drawer.width)};
  max-width: ${p => px(p.theme.dimension.drawer.width)};
  position: ${getPosition};
  background-color: ${p => p.theme.color.dark};
  display: ${p => p.theme.display.flex};
  height: ${p => p.theme.dimension.d100};
  box-shadow: ${p => p.theme.shadow.strong};
  overflow: ${p => p.theme.overflow.hidden};
  z-index: ${p => p.theme.zIndex.drawer};
`;

export default Drawer;
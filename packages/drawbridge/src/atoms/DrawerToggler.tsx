import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

const DrawerToggler = styled.div<StyledProps>`
  width: ${p => px(p.theme.dimension.drawer.toggler.width)};
  height: ${p => px(p.theme.dimension.drawer.toggler.height)};
  background: ${p => p.theme.color.dark};
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  justify-content: ${p => p.theme.justifyContent.center};
  border-radius: ${p => p.theme.borderRadius.small};
  cursor: ${p => p.theme.cursor.pointer};
  position: ${p => p.theme.position.absolute};
  box-shadow: ${p => p.theme.shadow.lighter};
  z-index: ${p => p.theme.zIndex.drawerToggler};
`;

export default DrawerToggler
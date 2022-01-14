import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

interface Props extends StyledProps {
    transparent?: boolean
}

const Navbar = styled.div<Props>`
  background-color: ${p => p.transparent ? p.theme.color.transparent : p.theme.color.surface};
  box-shadow: ${p => !p.transparent && p.theme.shadow.light};
  height: ${p => px(p.theme.dimension.navbar.height)};
  z-index: ${p => p.theme.zIndex.navbar};
  align-items: ${p => p.theme.alignItems.center};
  display: ${p => p.theme.display.flex};
  position: ${p => p.theme.position.relative};
  width: ${p => p.theme.dimension.d100};
`;

export default Navbar;
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";
import {lighten} from "@utils/ColorUtils";

const ModalOverlay = styled.div<StyledProps>`
  background-color: ${p => p.theme.color.dark};
  display: ${p => p.theme.display.flex};
  position: ${p => p.theme.position.fixed};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
  align-items: ${p => p.theme.alignItems.center};
  left: ${p => px(p.theme.spacing.s0)};
  top: ${p => px(p.theme.spacing.s0)};
  justify-content: ${p => p.theme.justifyContent.center};
`;

const DrawerPageOverlay = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: ${p => lighten(p.theme.color.dark, 0.8)};
  z-index: 1;
`

export default ModalOverlay;
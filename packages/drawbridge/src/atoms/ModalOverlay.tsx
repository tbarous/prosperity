import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

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

export default ModalOverlay;
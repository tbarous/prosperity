import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

const ModalWrapper = styled.div<StyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  justify-content: ${p => p.theme.justifyContent.center};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
  position: ${p => p.theme.position.fixed};
  top: ${p => px(p.theme.spacing.s0)};
  left: ${p => px(p.theme.spacing.s0)};
`;

export default ModalWrapper;
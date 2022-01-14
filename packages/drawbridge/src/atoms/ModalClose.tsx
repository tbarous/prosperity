import Icon from "@atoms/Icon";
import {StyledProps} from "@typings";
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";

const ModalClose = styled(Icon)<StyledProps>`
  align-items: ${p => p.theme.alignItems.center};
  top: ${p => px(p.theme.spacing.s2)};
  right: ${p => px(p.theme.spacing.s2)};
  position: ${p => p.theme.position.fixed};
  cursor: ${p => p.theme.cursor.pointer};
  border-radius: ${p => p.theme.borderRadius.circle};
  color: ${p => p.theme.color.dark};
  padding: ${p => px(p.theme.spacing.s2)};
  display: ${p => p.theme.display.flex};
  background-color: ${p => p.theme.color.surface};
  border: ${p => p.theme.border.medium};
  width: 24px;
  height: 24px;
`;

export default ModalClose;
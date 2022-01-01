import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";
import {
    ModalCloseAlignItems,
    ModalCloseBackgroundColor,
    ModalCloseBorderRadius,
    ModalCloseColor,
    ModalCloseCursor,
    ModalCloseDisplay,
    ModalClosePadding,
    ModalClosePosition,
    ModalCloseRight,
    ModalCloseTop
} from "@components/modal/styled/ModalCloseStyledGetters";

export interface ModalCloseStyledProps extends StyledProps {
}

const ModalCloseStyled = styled(Icon)<ModalCloseStyledProps>`
  align-items: ${ModalCloseAlignItems};
  top: ${ModalCloseTop};
  right: ${ModalCloseRight};
  position: ${ModalClosePosition};
  cursor: ${ModalCloseCursor};
  border-radius: ${ModalCloseBorderRadius};
  background: ${ModalCloseBackgroundColor};
  color: ${ModalCloseColor};
  padding: ${ModalClosePadding};
  display: ${ModalCloseDisplay};
`;

export default ModalCloseStyled;
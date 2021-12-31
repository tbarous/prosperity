import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";
import {
    ModalCloseBackgroundColor,
    ModalCloseBorderRadius, ModalCloseColor,
    ModalCloseCursor, ModalCloseDisplay, ModalClosePadding,
    ModalClosePosition
} from "@components/modal/styled/ModalCloseStyledGetters";

export interface ModalCloseStyledProps extends StyledProps {

}

const ModalCloseStyled = styled(Icon)<ModalCloseStyledProps>`
  top: .5rem;
  right: .5rem;
  align-items: center;
  position: ${ModalClosePosition};
  cursor: ${ModalCloseCursor};
  border-radius: ${ModalCloseBorderRadius};
  background: ${ModalCloseBackgroundColor};
  color: ${ModalCloseColor};
  padding: ${ModalClosePadding};
  display: ${ModalCloseDisplay};
`;

export default ModalCloseStyled;
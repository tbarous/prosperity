import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";
import ModalCloseStyledGetters from "@components/modal/styled/modal-close/ModalCloseStyledGetters";

export interface ModalCloseStyledProps extends StyledProps {
}

const ModalCloseStyled = styled(Icon)<ModalCloseStyledProps>`
  align-items: ${ModalCloseStyledGetters.AlignItems};
  top: ${ModalCloseStyledGetters.Top};
  right: ${ModalCloseStyledGetters.Right};
  position: ${ModalCloseStyledGetters.Position};
  cursor: ${ModalCloseStyledGetters.Cursor};
  border-radius: ${ModalCloseStyledGetters.BorderRadius};
  color: ${ModalCloseStyledGetters.Color};
  padding: ${ModalCloseStyledGetters.Padding};
  display: ${ModalCloseStyledGetters.Display};
  border: 2px solid;
`;

export default ModalCloseStyled;
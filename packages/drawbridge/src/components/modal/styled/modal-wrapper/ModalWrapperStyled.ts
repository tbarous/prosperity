import styled from "styled-components";
import {StyledProps} from "@typings";
import ModalWrapperStyledGetters from "@components/modal/styled/modal-wrapper/ModalWrapperStyledGetters";

export interface ModalWrapperStyledProps extends StyledProps {
}

const ModalWrapperStyled = styled.div<ModalWrapperStyledProps>`
  display: ${ModalWrapperStyledGetters.Display};
  align-items: ${ModalWrapperStyledGetters.AlignItems};
  justify-content: ${ModalWrapperStyledGetters.JustifyContent};
  width: ${ModalWrapperStyledGetters.Width};
  height: ${ModalWrapperStyledGetters.Height};
  position: ${ModalWrapperStyledGetters.Position};
  top: ${ModalWrapperStyledGetters.Top};
  left: ${ModalWrapperStyledGetters.Left};
`;

export default ModalWrapperStyled;
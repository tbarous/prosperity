import styled from "styled-components";
import {StyledProps} from "@typings";
import ModalOverlayStyledGetters from "@components/modal/styled/modal-overlay/ModalOverlayStyledGetters";

export interface ModalOverlayStyledProps extends StyledProps {
    unmounting: any
}

const ModalOverlayStyled = styled.div`
  background-color: ${ModalOverlayStyledGetters.BackgroundColor};
  display: ${ModalOverlayStyledGetters.Display};
  position: ${ModalOverlayStyledGetters.Position};
  width: ${ModalOverlayStyledGetters.Width};
  height: ${ModalOverlayStyledGetters.Height};
  align-items: ${ModalOverlayStyledGetters.AlignItems};
  left: ${ModalOverlayStyledGetters.Left};
  top: ${ModalOverlayStyledGetters.Top};
  justify-content: ${ModalOverlayStyledGetters.JustifyContent};
  opacity: ${ModalOverlayStyledGetters.Opacity};
  transition: opacity 5s;
`;

export default ModalOverlayStyled;
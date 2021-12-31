import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    ModalOverlayBackgroundColor,
    ModalOverlayDisplay,
    ModalOverlayHeight,
    ModalOverlayPosition,
    ModalOverlayWidth
} from "@components/modal/styled/ModalOverlayStyledGetters";

export interface ModalOverlayStyledProps extends StyledProps {
}

const ModalOverlayStyled = styled.div`
  background: ${ModalOverlayBackgroundColor};
  display: ${ModalOverlayDisplay};
  position: ${ModalOverlayPosition};
  width: ${ModalOverlayWidth};
  height: ${ModalOverlayHeight};
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
`;

export default ModalOverlayStyled;
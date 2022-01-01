import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    ModalOverlayAlignItems,
    ModalOverlayBackgroundColor,
    ModalOverlayDisplay,
    ModalOverlayHeight, ModalOverlayLeft,
    ModalOverlayPosition, ModalOverlayTop,
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
  align-items: ${ModalOverlayAlignItems};
  left: ${ModalOverlayLeft};
  top: ${ModalOverlayTop};
  justify-content: center;
`;

export default ModalOverlayStyled;
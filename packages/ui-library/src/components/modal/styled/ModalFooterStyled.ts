import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    ModalFooterBorderBottomLeftRadius,
    ModalFooterBorderBottomRightRadius, ModalFooterBottom,
    ModalFooterBoxShadow,
    ModalFooterBoxSizing,
    ModalFooterFontSize,
    ModalFooterHeight, ModalFooterOverflowY,
    ModalFooterPadding,
    ModalFooterPosition,
    ModalFooterWidth
} from "@components/modal/styled/ModalFooterStyledGetters";

export interface ModalFooterStyledProps extends StyledProps {
}

const ModalFooterStyled = styled.div`
  box-shadow: ${ModalFooterBoxShadow};
  border-bottom-left-radius: ${ModalFooterBorderBottomLeftRadius};
  border-bottom-right-radius: ${ModalFooterBorderBottomRightRadius};
  font-size: ${ModalFooterFontSize};
  padding: ${ModalFooterPadding};
  width: ${ModalFooterWidth};
  position: ${ModalFooterPosition};
  box-sizing: ${ModalFooterBoxSizing};
  height: ${ModalFooterHeight};
  bottom: ${ModalFooterBottom};
  overflow-y: ${ModalFooterOverflowY};
`;

export default ModalFooterStyled;
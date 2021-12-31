import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    ModalFooterBorderBottomLeftRadius,
    ModalFooterBorderBottomRightRadius,
    ModalFooterBoxShadow,
    ModalFooterBoxSizing,
    ModalFooterFontSize,
    ModalFooterHeight,
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
  bottom: 0;
  overflow-y: auto;
`;

export default ModalFooterStyled;
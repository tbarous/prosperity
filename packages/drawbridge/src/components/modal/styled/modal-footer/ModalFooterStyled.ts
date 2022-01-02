import styled from "styled-components";
import {StyledProps} from "@typings";
import ModalFooterStyledGetters from "@components/modal/styled/modal-footer/ModalFooterStyledGetters";

export interface ModalFooterStyledProps extends StyledProps {
}

const ModalFooterStyled = styled.div`
  box-shadow: ${ModalFooterStyledGetters.BoxShadow};
  border-bottom-left-radius: ${ModalFooterStyledGetters.BorderBottomLeftRadius};
  border-bottom-right-radius: ${ModalFooterStyledGetters.BorderBottomLeftRadius};
  font-size: ${ModalFooterStyledGetters.FontSize};
  padding: ${ModalFooterStyledGetters.Padding};
  width: ${ModalFooterStyledGetters.Width};
  position: ${ModalFooterStyledGetters.Position};
  box-sizing: ${ModalFooterStyledGetters.BoxSizing};
  height: ${ModalFooterStyledGetters.Height};
  bottom: ${ModalFooterStyledGetters.Bottom};
  overflow-y: ${ModalFooterStyledGetters.OverflowY};
`;

export default ModalFooterStyled;
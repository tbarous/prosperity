import styled from "styled-components";
import {StyledProps} from "@typings";
import ModalBodyStyledGetters from "@components/modal/styled/modal-body/ModalBodyStyledGetters";

export interface ModalBodyStyledProps extends StyledProps {
}

const ModalBodyStyled = styled.div<ModalBodyStyledProps>`
  font-size: ${ModalBodyStyledGetters.FontSize};
  width: ${ModalBodyStyledGetters.Width};
  height: ${ModalBodyStyledGetters.Height};
  box-sizing: ${ModalBodyStyledGetters.BoxSizing};
  overflow-y: ${ModalBodyStyledGetters.OverflowY};
`;

export default ModalBodyStyled;
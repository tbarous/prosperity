import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    ModalBodyBoxSizing,
    ModalBodyFontSize,
    ModalBodyHeight,
    ModalBodyOverflowY,
    ModalBodyWidth
} from "@components/modal/styled/ModalBodyStyledGetters";

export interface ModalBodyStyledProps extends StyledProps {
}

const ModalBodyStyled = styled.div<ModalBodyStyledProps>`
  font-size: ${ModalBodyFontSize};
  width: ${ModalBodyWidth};
  height: ${ModalBodyHeight};
  box-sizing: ${ModalBodyBoxSizing};
  overflow-y: ${ModalBodyOverflowY};
`;

export default ModalBodyStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import ModalHeaderStyledGetters from "@components/modal/styled/modal-header/ModalHeaderStyledGetters";

export interface ModalHeaderStyledProps extends StyledProps {
}

const ModalHeaderStyled = styled.div<ModalHeaderStyledProps>`
  border-top-left-radius: ${ModalHeaderStyledGetters.BorderTopLeftRadius};
  border-top-right-radius: ${ModalHeaderStyledGetters.BorderTopRightRadius};
  box-shadow: ${ModalHeaderStyledGetters.BoxShadow};
  font-size: ${ModalHeaderStyledGetters.FontSize};
  width: ${ModalHeaderStyledGetters.Width};
  font-family: ${ModalHeaderStyledGetters.FontFamily};
  height: ${ModalHeaderStyledGetters.Height};
  box-sizing: ${ModalHeaderStyledGetters.BoxSizing};
`;

export default ModalHeaderStyled;
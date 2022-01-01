import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    ModalHeaderBorderBottomLeftRadius,
    ModalHeaderBorderTopLeftRadius,
    ModalHeaderBoxShadow,
    ModalHeaderBoxSizing,
    ModalHeaderFontFamily,
    ModalHeaderFontSize,
    ModalHeaderHeight,
    ModalHeaderWidth
} from "@components/modal/styled/ModalHeaderStyledGetters";

export interface ModalHeaderStyledProps extends StyledProps {
}

const ModalHeaderStyled = styled.div<ModalHeaderStyledProps>`
  border-top-left-radius: ${ModalHeaderBorderBottomLeftRadius};
  border-top-right-radius: ${ModalHeaderBorderTopLeftRadius};
  box-shadow: ${ModalHeaderBoxShadow};
  font-size: ${ModalHeaderFontSize};
  width: ${ModalHeaderWidth};
  font-family: ${ModalHeaderFontFamily};
  height: ${ModalHeaderHeight};
  box-sizing: ${ModalHeaderBoxSizing};
`;

export default ModalHeaderStyled;
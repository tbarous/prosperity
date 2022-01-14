import styled from "styled-components";
import {StyledProps} from "@typings";

const ModalHeader = styled.div<StyledProps>`
  border-top-left-radius: ${p => p.theme.borderRadius.medium};
  border-top-right-radius: ${p => p.theme.borderRadius.medium};
  box-shadow: ${p => p.theme.shadow.medium};
  font-size: ${p => p.theme.fontSize.fs3};
  width: ${p => p.theme.dimension.d100};
  font-family: ${p => p.theme.fontFamily.secondary};
  height: ${p => p.theme.dimension.d10};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
`;

export default ModalHeader;
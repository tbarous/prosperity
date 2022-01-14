import styled from "styled-components";
import {StyledProps} from "@typings";

const ModalBody = styled.div<StyledProps>`
  font-size: ${p => p.theme.fontSize.fs3};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d70};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  overflow-y: ${p => p.theme.overflow.auto};
`;

export default ModalBody;
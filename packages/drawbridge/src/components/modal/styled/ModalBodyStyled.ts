import styled from "styled-components";
import {StyledProps} from "@typings";

interface ModalBodyStyledProps extends StyledProps {}

type T = ModalBodyStyledProps;

const ModalBodyStyled = styled.div<T>`
  font-size: ${(p: T) => p.theme.fontSize.md};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d70};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  overflow-y: ${(p: T) => p.theme.overflow.auto};
`;

export default ModalBodyStyled;
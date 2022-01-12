import styled from "styled-components";
import {StyledProps} from "@typings";

interface ModalHeaderStyledProps extends StyledProps {}

type T = ModalHeaderStyledProps;

const ModalHeaderStyled = styled.div<T>`
  border-top-left-radius: ${(p: T) => p.theme.borderRadius.medium};
  border-top-right-radius: ${(p: T) => p.theme.borderRadius.medium};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
  font-size: ${(p: T) => p.theme.fontSize.lg};
  width: ${(p: T) => p.theme.dimension.d100};
  font-family: ${(p: T) => p.theme.fontFamily.secondary};
  height: ${(p: T) => p.theme.dimension.d10};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
`;

export default ModalHeaderStyled;
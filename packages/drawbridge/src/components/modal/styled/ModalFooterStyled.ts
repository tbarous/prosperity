import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const ModalFooterStyled = styled.div`
  overflow-y: ${(p: T) => p.theme.overflow.auto};
  position: ${(p: T) => p.theme.position.absolute};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
  border-bottom-left-radius: ${(p: T) => p.theme.borderRadius.medium};
  border-bottom-right-radius: ${(p: T) => p.theme.borderRadius.medium};
  font-size: ${(p: T) => p.theme.fontSize.md};
  padding: ${(p: T) => `${p.theme.spacing.s3} ${p.theme.spacing.s5}`};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d20};
  bottom: ${(p: T) => p.theme.spacing.s0};
  background-color: ${(p: T) => p.theme.color.white};
`;

export default ModalFooterStyled;
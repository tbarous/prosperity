import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const ModalWrapperStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  position: ${(p: T) => p.theme.position.fixed};
  top: ${(p: T) => p.theme.spacing.s0};
  left: ${(p: T) => p.theme.spacing.s0};
`;

export default ModalWrapperStyled;
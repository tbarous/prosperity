import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const CheckboxInputStyled = styled.input<T>`
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  opacity: ${(p: T) => p.theme.opacity.hidden};
  height: ${(p: T) => p.theme.dimension.d0};
  width: ${(p: T) => p.theme.dimension.d0};
`;

export default CheckboxInputStyled;
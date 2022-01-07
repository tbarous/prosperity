import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { checked?: boolean };

const RadioInputStyled = styled.input<T>`
  position: ${(p: T) => p.theme.position.absolute};
  opacity: ${(p: T) => p.theme.opacity.hidden};
  cursor: ${(p: T) => p.theme.cursor.pointer};
`;

export default RadioInputStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { checked?: boolean };

const RadioStyled = styled.label<T>`
  display: ${(p: T) => p.theme.display.block};
  position: ${(p: T) => p.theme.position.relative};
  padding-left: ${(p: T) => p.theme.spacing.s13};
  margin-bottom: ${(p: T) => p.theme.spacing.s6};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  font-size: ${(p: T) => p.theme.fontSize.lg};
  user-select: ${(p: T) => `none`};
`;

export default RadioStyled;
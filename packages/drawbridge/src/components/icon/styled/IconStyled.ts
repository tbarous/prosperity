import styled from "styled-components";
import {StyledProps} from "@typings";

export type T = StyledProps & { width?: number, height?: number, color?: number };

const IconStyled = styled.div<T>`
  width: ${(p: T) => `${p.width}px`};
  height: ${(p: T) => `${p.height}px`};
  color: ${(p: T) => p.color || p.theme.color.dark};

  svg {
    width: ${(p: T) => p.theme.dimension.d100};
    height: ${(p: T) => p.theme.dimension.d100};
  }
`;

export default IconStyled;
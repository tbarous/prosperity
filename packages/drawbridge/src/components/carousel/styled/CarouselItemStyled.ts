import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & {width?: number, gutter?: number, leftDistance?: number};

const CarouselItemStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  height: ${(p: T) => p.theme.dimension.d100};
  padding: ${(p: T) => `0 ${p.gutter && p.gutter / 2}px`};
  width: ${(p: T) => `${p.width}%`};
  left: ${(p: T) => `${p.leftDistance}%`};
`;

export default CarouselItemStyled;
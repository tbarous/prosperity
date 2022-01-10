import styled from "styled-components";
import {StyledProps} from "@typings";

export interface CarouselStyledProps extends StyledProps {}

type T = CarouselStyledProps;

const CarouselStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  justify-content: center;
  align-items: center;
  position: ${(p: T) => p.theme.position.relative};
  overflow: ${(p: T) => p.theme.overflow.hidden};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  
  cursor: grabbing;
`;

export default CarouselStyled;
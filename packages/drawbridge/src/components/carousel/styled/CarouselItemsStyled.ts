import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & {moveDistance?: number, gutter?: number, speed?: number};

const CarouselItemsStyled = styled.div<T>`
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  box-sizing: ${(p: T) => p.theme.boxSizing.contentBox};
  transform: ${(p: T) => `translateX(-${p.moveDistance}%)`};
  transition: ${(p: T) => `transform ${p.speed}s ease-out`};
  padding-left: ${(p: T) => p.gutter && `${p.gutter}px`};
  padding-right: ${(p: T) => p.gutter && `${p.gutter}px`};
  margin-left: ${(p: T) => p.gutter && `-${p.gutter}px`};
  margin-right: ${(p: T) => p.gutter && `-${p.gutter}px`};
`;

export default CarouselItemsStyled;
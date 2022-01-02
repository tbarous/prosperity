import styled from "styled-components";
import {StyledProps} from "@typings";
import CarouselItemsStyledGetters from "@components/carousel/styled/carousel-items/CarouselItemsStyledGetters";

export interface CarouselItemsStyledProps extends StyledProps {
    moveDistance?: number,
    gutter?: number
}

const CarouselItemsStyled = styled.div<CarouselItemsStyledProps>`
  width: ${CarouselItemsStyledGetters.Width};
  height: ${CarouselItemsStyledGetters.Height};
  transform: ${CarouselItemsStyledGetters.Transform};
  transition: ${CarouselItemsStyledGetters.Transition};
`;

export default CarouselItemsStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import CarouselItemStyledGetters from "@components/carousel/styled/carousel-item/CarouselItemStyledGetters";

export interface CarouselItemStyledProps extends StyledProps {
    width?: number,
    leftDistance?: number,
    gutter?: number
}

const CarouselItemStyled = styled.div<CarouselItemStyledProps>`
  position: ${CarouselItemStyledGetters.Position};
  height: ${CarouselItemStyledGetters.Height};
  box-sizing: ${CarouselItemStyledGetters.BoxSizing};
  padding: ${CarouselItemStyledGetters.Padding};
  width: ${CarouselItemStyledGetters.Width};
  left: ${CarouselItemStyledGetters.Left};
`;

export default CarouselItemStyled;
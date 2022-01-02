import styled from "styled-components";
import {StyledProps} from "@typings";
import CarouselControlsStyledGetters from "@components/carousel/styled/carousel-controls/CarouselControlsStyledGetters";

export interface CarouselControlsStyledProps extends StyledProps {
}

const CarouselControlsStyled = styled.div<CarouselControlsStyledProps>`
  position: ${CarouselControlsStyledGetters.Position};
  width: ${CarouselControlsStyledGetters.Width};
  height: ${CarouselControlsStyledGetters.Height};
  display: ${CarouselControlsStyledGetters.Display};
  align-items: ${CarouselControlsStyledGetters.AlignItems};
`;

export default CarouselControlsStyled;
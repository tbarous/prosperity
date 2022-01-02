import styled from "styled-components";
import {StyledProps} from "@typings";
import CarouselStyledGetters from "@components/carousel/styled/carousel/CarouselStyledGetters";

export interface CarouselStyledProps extends StyledProps {
}

const CarouselStyled = styled.div<CarouselStyledProps>`
  width: ${CarouselStyledGetters.Width};
  display: ${CarouselStyledGetters.Display};
  height: ${CarouselStyledGetters.Height};
  position: ${CarouselStyledGetters.Position};
  overflow: ${CarouselStyledGetters.Overflow};
`;

export default CarouselStyled;
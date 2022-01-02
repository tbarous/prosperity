import styled from "styled-components";
import {StyledProps} from "@typings";
import CarouselControlStyledGetters from "@components/carousel/styled/carousel-control/CarouselControlStyledGetters";
import CarouselDirectionEnum from "@components/carousel/enums/CarouselDirectionEnum";

export interface CarouselControlStyledProps extends StyledProps {
    direction?: CarouselDirectionEnum
}

const CarouselControlStyled = styled.div<CarouselControlStyledProps>`
  position: ${CarouselControlStyledGetters.Position};
  left: ${CarouselControlStyledGetters.Left};
  right: ${CarouselControlStyledGetters.Right};
  z-index: ${CarouselControlStyledGetters.ZIndex};
  cursor: ${CarouselControlStyledGetters.Cursor};
`;

export default CarouselControlStyled;
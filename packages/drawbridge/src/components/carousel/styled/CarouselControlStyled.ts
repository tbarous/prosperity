import styled from "styled-components";
import {StyledProps} from "@typings";
import {CarouselDirections} from "@components/carousel/Carousel";

type T = StyledProps & { direction?: CarouselDirections };

const CarouselControlStyled = styled.div<T>`
  z-index: ${(p: T) => p.theme.zIndex.carouselControl};
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  left: ${(p: T) => p.direction === CarouselDirections.LEFT ? "1rem" : "auto"};
  right: ${(p: T) => p.direction === CarouselDirections.RIGHT ? "1rem" : "auto"};
`;

export default CarouselControlStyled;
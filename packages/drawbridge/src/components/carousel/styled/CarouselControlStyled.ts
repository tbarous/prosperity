import styled from "styled-components";
import {StyledProps} from "@typings";
import {CarouselDirectionEnum} from "@components/carousel/Carousel";

type T = StyledProps & { direction?: CarouselDirectionEnum };

const CarouselControlStyled = styled.div<T>`
  z-index: ${(p: T) => p.theme.zIndex.carouselControl};
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  left: ${(p: T) => p.direction === CarouselDirectionEnum.LEFT ? "1rem" : "auto"};
  right: ${(p: T) => p.direction === CarouselDirectionEnum.RIGHT ? "1rem" : "auto"};
`;

export default CarouselControlStyled;
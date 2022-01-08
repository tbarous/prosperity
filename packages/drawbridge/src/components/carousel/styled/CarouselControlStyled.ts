import styled from "styled-components";
import {CarouselDirections} from "@components/carousel/Carousel";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

interface T {
    theme: ThemeInterface,
    direction?: CarouselDirections
}

function getLeft(p: T) {
    return p.direction === CarouselDirections.LEFT ? px(p.theme.spacing.s5) : p.theme.spacing.auto;
}

function getRight(p: T) {
    return p.direction === CarouselDirections.RIGHT ? px(p.theme.spacing.s5) : p.theme.spacing.auto;
}

const CarouselControlStyled = styled.div<T>`
  z-index: ${(p: T) => p.theme.zIndex.carouselControl};
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  left: ${getLeft};
  right: ${getRight};
`;

export default CarouselControlStyled;
import styled from "styled-components";
import {CarouselDirections} from "@components/carousel/Carousel";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface CarouselControlStyledProps extends StyledProps {
    direction?: CarouselDirections
}

type T = CarouselControlStyledProps;

function getLeft(p: T) {
    if (p.direction === CarouselDirections.LEFT) {
        return px(p.theme.spacing.s5)
    }

    return p.theme.spacing.auto;
}

function getRight(p: T) {
    if (p.direction === CarouselDirections.RIGHT) {
        return px(p.theme.spacing.s5)
    }

    return p.theme.spacing.auto;
}

const CarouselControlStyled = styled.div<T>`
  left: ${getLeft};
  right: ${getRight};
  z-index: ${(p: T) => p.theme.zIndex.carouselControl};
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
`;

export default CarouselControlStyled;
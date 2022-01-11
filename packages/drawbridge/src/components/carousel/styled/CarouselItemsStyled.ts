import styled from "styled-components";
import {px, transition} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface CarouselItemsStyledProps extends StyledProps {
    distance?: number,
    gutter?: number,
    dragDistance: number
}

type T = CarouselItemsStyledProps;

function getTransform(p: T) {
    if (p.dragDistance) return

    return `translateX(-${p.distance}%)`;
}

function getTransition(p: T) {
    if (p.dragDistance) return;

    return transition({ms: p.theme.animation.carousel});
}

function getMargin(p: T) {
    if (!p.gutter) return;

    return `-${px(p.gutter/2)}`;
}

const CarouselItemsStyled = styled.div<T>`
  transform: ${getTransform};
  transition: ${getTransition};
  margin-left: ${getMargin};
  margin-right: ${getMargin};
  height: ${(p: T) => p.theme.dimension.d100};
  display: ${(p: T) => p.theme.display.flex};
  flex-wrap: wrap;
  //cursor: grabbing;
`;

export default CarouselItemsStyled;
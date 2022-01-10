import styled from "styled-components";
import {px, transition} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface CarouselItemsStyledProps extends StyledProps {
    distance?: number,
    gutter?: number
}

type T = CarouselItemsStyledProps;

function getTransform(p: T) {
    // return `translateX(-${p.distance}%)`;
}

function getTransition(p: T) {
    // return transition({ms: p.theme.animation.carousel});
}

function getPadding(p: T) {
    if (!p.gutter) return;

    return px(p.gutter);
}

function getMargin(p: T) {
    if (!p.gutter) return;

    return `-${px(p.gutter)}`;
}

const CarouselItemsStyled = styled.div<T>`
  //transform: ${getTransform};
  //transition: ${getTransition};
  padding-left: ${getPadding};
  padding-right: ${getPadding};
  margin-left: ${getMargin};
  margin-right: ${getMargin};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  box-sizing: ${(p: T) => p.theme.boxSizing.contentBox};
`;

export default CarouselItemsStyled;
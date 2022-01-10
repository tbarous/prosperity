import styled from "styled-components";
import {percentage, px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface CarouselItemStyledProps extends StyledProps {
    width: number,
    gutter: number,
    distance: number
}

type T = CarouselItemStyledProps;

function getPadding(p: T) {
    if (!p.gutter) return;

    return `${p.theme.spacing.s0} ${px(p.gutter)}`;
}

function getWidth(p: T) {
    return percentage(p.width);
}

function getLeft(p: T) {
    return percentage(p.distance);
}

const CarouselItemStyled = styled.div<T>`
  padding: ${getPadding};
  width: ${getWidth};
  left: ${getLeft};
  position: ${(p: T) => p.theme.position.absolute};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  height: ${(p: T) => p.theme.dimension.d100};
`;

export default CarouselItemStyled;
import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

interface T {
    theme: ThemeInterface,
    distance: number,
    gutter: number
}

function getTransform(p: T): string {
    return `translateX(-${p.distance}%)`;
}

function getTransition(p: T): string {
    return `transform 1s ease-out`;
}

function getPadding(p: T): string | undefined {
    if (!p.gutter) return;

    return px(p.gutter);
}

function getMargin(p: T): string | undefined {
    if (!p.gutter) return;

    return `-${px(p.gutter)}`;
}

const CarouselItemsStyled = styled.div<T>`
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  box-sizing: ${(p: T) => p.theme.boxSizing.contentBox};
  transform: ${getTransform};
  transition: ${getTransition};
  padding-left: ${getPadding};
  padding-right: ${getPadding};
  margin-left: ${getMargin};
  margin-right: ${getMargin};
`;

export default CarouselItemsStyled;
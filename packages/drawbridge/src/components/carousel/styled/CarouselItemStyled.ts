import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

interface T {
    theme: ThemeInterface
    width?: number,
    gutter?: number,
    itemX?: number
}

function getPadding(p: T): undefined | string {
    if (!p.gutter) return;

    return `${p.theme.spacing.s0} ${px(p.gutter)}`;
}

function getWidth(p: T): string {
    return `${p.width}%`;
}

function getLeft(p: T): string {
    return `${p.itemX}%`;
}

const CarouselItemStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  height: ${(p: T) => p.theme.dimension.d100};
  padding: ${getPadding};
  width: ${getWidth};
  left: ${getLeft};
`;

export default CarouselItemStyled;
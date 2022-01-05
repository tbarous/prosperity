import styled from "styled-components";
import {StyledProps} from "@typings";

export interface CarouselItemsStyledProps extends StyledProps {
    moveDistance?: number,
    gutter?: number,
    speed?: number
}

const margin = (props: CarouselItemsStyledProps) => props.gutter && `-${props.gutter}px`;
const padding = (props: CarouselItemsStyledProps) => props.gutter && `${props.gutter}px`;
const transform = (props: CarouselItemsStyledProps) => `translateX(-${props.moveDistance}%)`;
const transition = (props: CarouselItemsStyledProps) => `transform ${props.speed}s ease-out`;

const CarouselItemsStyled = styled.div<CarouselItemsStyledProps>`
  width: ${(props: CarouselItemsStyledProps) => props.theme.dimension.d100};
  height: ${(props: CarouselItemsStyledProps) => props.theme.dimension.d100};
  transform: ${transform};
  transition: ${transition};
  padding-left: ${padding};
  padding-right: ${padding};
  margin-left: ${margin};
  margin-right: ${margin};
  box-sizing: content-box;
`;

export default CarouselItemsStyled;
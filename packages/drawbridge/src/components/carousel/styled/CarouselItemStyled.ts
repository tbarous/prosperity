import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface CarouselItemStyledProps extends StyledProps {
    width?: number,
    leftDistance?: number,
    gutter?: number
}

const padding = (props: CarouselItemStyledProps) => `0 ${props.gutter && props.gutter / 2}px`;
const left = (props: CarouselItemStyledProps) => `${props.leftDistance}%`;
const width = (props: CarouselItemStyledProps) => `${props.width}%`;

const CarouselItemStyled = styled.div<CarouselItemStyledProps>`
  position: ${rules.position.absolute};
  box-sizing: ${rules.boxSizing.borderBox};
  height: ${(props: CarouselItemStyledProps) => props.theme.dimension.d100};
  padding: ${padding};
  width: ${width};
  left: ${left};
`;

export default CarouselItemStyled;
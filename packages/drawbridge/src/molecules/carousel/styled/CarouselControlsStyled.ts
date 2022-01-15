import styled from "styled-components";
import {StyledProps} from "@typings";

export interface CarouselControlsStyledProps extends StyledProps {}

type T = CarouselControlsStyledProps;

const CarouselControlsStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
`;


export default CarouselControlsStyled;
import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

export interface T {
    theme: ThemeInterface
}

const CarouselControlsStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
`;


export default CarouselControlsStyled;
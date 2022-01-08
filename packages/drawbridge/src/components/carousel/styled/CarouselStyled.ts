import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

export interface T {
    theme: ThemeInterface
}

const CarouselStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  position: ${(p: T) => p.theme.position.relative};
  overflow: ${(p: T) => p.theme.overflow.hidden};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
`;

export default CarouselStyled;
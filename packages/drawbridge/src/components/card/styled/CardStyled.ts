import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    rounded?: boolean
}

function getBorderRadius(p: T) {
    return p.rounded && p.theme.borderRadius.medium;
}

const CardStyled = styled.div<T>`
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  background-color: ${(p: T) => p.theme.color.white};
  border-radius: ${getBorderRadius};
  width: ${(p: T) => p.theme.dimension.d100};
  transition: ${(p: T) => p.theme.transition.elevation};

  &:hover {
    box-shadow: ${(p: T) => p.theme.shadow.elevate}
  }
`;

export default CardStyled;
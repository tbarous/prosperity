import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface
}

const TabsStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
`;

export default TabsStyled;
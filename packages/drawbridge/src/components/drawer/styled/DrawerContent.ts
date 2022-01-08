import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface
}

const DrawerContent = styled.div<T>`
  z-index: ${(p: T) => p.theme.zIndex.drawerContent};
  width: ${(p: T) => p.theme.dimension.d100};
`;

export default DrawerContent;
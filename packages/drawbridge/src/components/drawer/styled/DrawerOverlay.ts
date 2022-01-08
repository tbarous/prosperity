import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    dark?: boolean,
    light?: boolean
}

function getBackground(p: T) {
    return p.light ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)";
}

const DrawerOverlay = styled.div<T>`
  background: ${getBackground};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  position: ${(p: T) => p.theme.position.absolute};
  top: ${(p: T) => p.theme.spacing.s0};
  left: ${(p: T) => p.theme.spacing.s0};
`

export default DrawerOverlay;
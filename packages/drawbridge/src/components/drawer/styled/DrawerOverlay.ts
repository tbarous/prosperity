import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { light?: boolean, dark?: boolean, };

const DrawerOverlay = styled.div<T>`
  background: ${(p: T) => p.light ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  position: ${(p: T) => p.theme.position.absolute};
  top: ${(p: T) => p.theme.spacing.s0};
  left: ${(p: T) => p.theme.spacing.s0};
`

export default DrawerOverlay;
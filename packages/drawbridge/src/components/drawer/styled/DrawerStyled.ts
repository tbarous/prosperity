import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";

type T = { overlay?: boolean } & StyledProps & useMountChildStyledProps;

const DrawerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  height: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.theme.color.dark};
  width: ${(p: T) => p.theme.dimension.d20};
  position: ${(p: T) => p.overlay ? p.theme.position.fixed : p.theme.position.relative};
  transform: ${(p: T) => p.mount ? `translateX(0)` : `translateX(-120%)`};
  transition: ${(p: T) => p.mount ? `transform ${p.entryDelay / 1000}s` : `transform ${p.exitDelay / 1000}s`};
`;

export default DrawerStyled;
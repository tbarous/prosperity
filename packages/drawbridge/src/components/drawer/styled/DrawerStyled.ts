import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";

type T = { overlay?: boolean, light?: boolean, dark?: boolean } & StyledProps & useMountChildStyledProps;

const DrawerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  width: ${(p: T) => "250px"};
  max-width: ${(p: T) => p.mount ? "250px" : 0};
  height: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.light ? p.theme.color.white : p.theme.color.dark};
  position: ${(p: T) => p.overlay ? p.theme.position.fixed : p.theme.position.relative};
  transition: ${(p: T) => p.mount ? `max-width ${p.entryDelay / 1000}s` : `max-width ${p.exitDelay / 1000}s`};
  box-shadow: ${(p: T) => p.theme.shadow.strong};
  overflow: ${(p: T) => p.theme.overflow.hidden};
`;

export default DrawerStyled;
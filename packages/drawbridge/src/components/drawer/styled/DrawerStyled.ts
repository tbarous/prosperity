import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";

type T = { fixed?: boolean, light?: boolean, dark?: boolean, transparent?: boolean} & StyledProps & useMountChildStyledProps;

const DrawerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  width: ${(p: T) => "300px"};
  max-width: ${(p: T) => p.mount ? "300px" : 0};
  height: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.transparent ? "transparent" : (p.light ? p.theme.color.white : p.theme.color.dark)};
  position: ${(p: T) => p.fixed ? p.theme.position.fixed : p.theme.position.relative};
  transition: ${(p: T) => p.mount ? `max-width ${p.entryDelay / 1000}s` : `max-width ${p.exitDelay / 1000}s`};
  box-shadow: ${(p: T) => p.theme.shadow.strong};
  overflow: ${(p: T) => p.theme.overflow.hidden};
  z-index: 9999;
`;

export default DrawerStyled;
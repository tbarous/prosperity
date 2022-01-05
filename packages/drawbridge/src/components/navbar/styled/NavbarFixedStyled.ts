import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";

type T = StyledProps & useMountChildStyledProps;

const NavbarFixedStyled = styled.div<T>`
  height: ${(p: T) => p.theme.dimension.d10};
  z-index: ${(p: T) => p.theme.zIndex.navbar};
  top: ${(p: T) => p.theme.spacing.s0};
  position: ${(p: T) => p.theme.position.fixed};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  width: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.theme.color.white};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  transform: ${(p: T) => p.mount ? `translateY(0)` : `translateY(-100%)`};
  transition: ${(p: T) => `transform ${p.mount ? `${p.entryDelay / 1000}s` : `${p.exitDelay / 1000}s`}`};
`;

export default NavbarFixedStyled;
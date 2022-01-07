import styled, {keyframes} from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export type T = StyledProps & useMountChildStyledProps;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0);
  }
`;

const NavbarFixedStyled = styled.div<T>`
  height: ${(p: T) => "100px"};
  z-index: ${(p: T) => p.theme.zIndex.navbar};
  top: ${(p: T) => px(p.theme.spacing.s0)};
  position: ${(p: T) => p.theme.position.fixed};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  width: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.theme.color.white};
  box-shadow: ${(p: T) => p.theme.shadow.light};
  transform: ${(p: T) => p.mount ? `translateY(0)` : `translateY(-100%)`};
  
  animation: ${slideIn} .5s;
  transition: ${(p: T) => `transform ${p.exitDelay / 1000}s`};
`;

export default NavbarFixedStyled;
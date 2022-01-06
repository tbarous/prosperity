import styled from "styled-components";
import {StyledProps} from "@typings";

export type T = StyledProps & { transparent?: boolean };

const NavbarStaticStyled = styled.div<T>`
  height: ${(p: T) => "100px"};
  z-index: ${(p: T) => p.theme.zIndex.navbar};
  align-items: ${(p: T) => p.theme.alignItems.center};
  display: ${(p: T) => p.theme.display.flex};
  position: ${(p: T) => p.theme.position.relative};
  width: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.transparent ? "" : p.theme.color.white};
  box-shadow: ${(p: T) => p.transparent ? "" : p.theme.shadow.light};
`;

export default NavbarStaticStyled;
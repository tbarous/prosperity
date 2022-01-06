import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const NavbarStaticStyled = styled.div<T>`
  height: ${(p: T) => "100px"};
  z-index: ${(p: T) => p.theme.zIndex.navbar};
  align-items: ${(props: T) => props.theme.alignItems.center};
  display: ${(props: T) => props.theme.display.flex};
  position: ${(props: T) => props.theme.position.relative};
  width: ${(props: T) => props.theme.dimension.d100};
  background-color: ${(props: T) => props.theme.color.white};
  box-shadow: ${(props: T) => props.theme.shadow.light};
`;

export default NavbarStaticStyled;
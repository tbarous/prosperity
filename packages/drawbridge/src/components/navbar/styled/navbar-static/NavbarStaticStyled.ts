import styled from "styled-components";
import {StyledProps} from "@typings";
import NavbarStaticStyledGetters from "@components/navbar/styled/navbar-static/NavbarStaticStyledGetters";

export interface NavbarStaticStyledProps extends StyledProps {
}

const NavbarStaticStyled = styled.div<NavbarStaticStyledProps>`
  width: ${NavbarStaticStyledGetters.Width};
  background-color: ${NavbarStaticStyledGetters.BackgroundColor};
  display: ${NavbarStaticStyledGetters.Display};
  box-shadow: ${NavbarStaticStyledGetters.BoxShadow};
  align-items: ${NavbarStaticStyledGetters.AlignItems};
  height: ${NavbarStaticStyledGetters.Height};
  z-index: ${NavbarStaticStyledGetters.ZIndex};
  position: ${NavbarStaticStyledGetters.Position}
`;

export default NavbarStaticStyled;
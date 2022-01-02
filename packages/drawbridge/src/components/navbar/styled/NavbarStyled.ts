import styled from "styled-components";
import {StyledProps} from "@typings";
import NavbarStyledGetters from "@components/navbar/styled/NavbarStyledGetters";

export interface NavbarStyledProps extends StyledProps {
}

const NavbarStyled = styled.div<NavbarStyledProps>`
  width: ${NavbarStyledGetters.Width};
  background-color: ${NavbarStyledGetters.BackgroundColor};
  display: ${NavbarStyledGetters.Display};
  box-shadow: ${NavbarStyledGetters.BoxShadow};
  align-items: ${NavbarStyledGetters.AlignItems};
  height: ${NavbarStyledGetters.Height};
  z-index: ${NavbarStyledGetters.ZIndex};
`;

export default NavbarStyled;
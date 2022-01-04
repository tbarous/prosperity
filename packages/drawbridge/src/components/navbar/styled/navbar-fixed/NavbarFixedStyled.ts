import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import NavbarFixedStyledGetters from "@components/navbar/styled/navbar-fixed/NavbarFixedStyledGetters";

export interface NavbarFixedStyledProps extends StyledProps, useMountChildStyledProps {
}

const NavbarFixedStyled = styled.div<NavbarFixedStyledProps>`
  width: ${NavbarFixedStyledGetters.Width};
  background-color: ${NavbarFixedStyledGetters.BackgroundColor};
  display: ${NavbarFixedStyledGetters.Display};
  box-shadow: ${NavbarFixedStyledGetters.BoxShadow};
  align-items: ${NavbarFixedStyledGetters.AlignItems};
  height: ${NavbarFixedStyledGetters.Height};
  z-index: ${NavbarFixedStyledGetters.ZIndex};
  position: ${NavbarFixedStyledGetters.Position};
  transform: ${NavbarFixedStyledGetters.Transform};
  transition: ${NavbarFixedStyledGetters.Transition};
  top: ${NavbarFixedStyledGetters.Top};
`;

export default NavbarFixedStyled;
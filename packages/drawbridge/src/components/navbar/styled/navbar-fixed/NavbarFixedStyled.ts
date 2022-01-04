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
  transform: ${props => props.mount ? `translateY(0)` : `translateY(-100%)`};
  transition: transform ${props => props.mount ? `${props.entryDelay / 1000}s` : `${props.exitDelay / 1000}s`};
  top: 0;
`;

export default NavbarFixedStyled;
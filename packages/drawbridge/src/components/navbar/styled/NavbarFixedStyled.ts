import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import rules from "@rules";

export interface NavbarFixedStyledProps extends StyledProps, useMountChildStyledProps {
}

const transform = (props: NavbarFixedStyledProps) => props.mount ? `translateY(0)` : `translateY(-100%)`;
const transition = (props: NavbarFixedStyledProps) => `transform ${props.mount ? `${props.entryDelay / 1000}s` : `${props.exitDelay / 1000}s`}`;

const NavbarFixedStyled = styled.div<NavbarFixedStyledProps>`
  height: 60px;
  z-index: 11;
  top: 0;
  position: ${rules.position.fixed};
  display: ${rules.display.flex};
  align-items: ${rules.alignItems.center};
  width: ${(props: NavbarFixedStyledProps) => props.theme.dimension.d100};
  background-color: ${(props: NavbarFixedStyledProps) => props.theme.color.white};
  box-shadow: ${(props: NavbarFixedStyledProps) => props.theme.shadow.light};
  transform: ${transform};
  transition: ${transition};
`;

export default NavbarFixedStyled;
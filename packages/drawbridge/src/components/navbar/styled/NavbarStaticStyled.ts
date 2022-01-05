import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface NavbarStaticStyledProps extends StyledProps {
}

const NavbarStaticStyled = styled.div<NavbarStaticStyledProps>`
  height: 60px;
  z-index: 11;
  align-items: ${rules.alignItems.center};
  display: ${rules.display.flex};
  position: ${rules.position.relative};
  width: ${(props: NavbarStaticStyledProps) => props.theme.dimension.d100};
  background-color: ${(props: NavbarStaticStyledProps) => props.theme.color.white};
  box-shadow: ${(props: NavbarStaticStyledProps) => props.theme.shadow.light};
`;

export default NavbarStaticStyled;
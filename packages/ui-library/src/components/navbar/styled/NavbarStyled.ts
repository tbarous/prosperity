import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    NavbarAlignItems,
    NavbarBackgroundColor,
    NavbarBoxShadow,
    NavbarDisplay,
    NavbarWidth
} from "@components/navbar/styled/NavbarStyledGetters";

export interface NavbarStyledProps extends StyledProps {
}

const NavbarStyled = styled.div<NavbarStyledProps>`
  width: ${NavbarWidth};
  background: ${NavbarBackgroundColor};
  display: ${NavbarDisplay};
  box-shadow: ${NavbarBoxShadow};
  align-items: ${NavbarAlignItems};
  height: 60px;
  z-index: 11;
`;

export default NavbarStyled;
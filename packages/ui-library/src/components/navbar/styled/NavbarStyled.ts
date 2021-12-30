import styled from "styled-components";
import {StyledProps} from "@typings";

interface Props extends StyledProps {

}

const NavbarStyled = styled.div`
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 60px;
  z-index: 11;
  background: white;
  display: flex;
  align-items: center;
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  background: ${(props: Props) => props.theme.color.white};
`;

export default NavbarStyled;
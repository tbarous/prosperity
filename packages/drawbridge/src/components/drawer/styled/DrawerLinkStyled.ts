import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { dark?: boolean, light?: boolean };

const DrawerLinkStyled = styled.div<T>`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${p => p.theme.fontFamily.primary};
  color: ${p => p.light ? p.theme.color.dark : p.theme.color.white};
  cursor: pointer ;
  
  &:hover {
    background: ${(p: T) => "#737373"};
    color: ${p => p.light ? p.theme.color.white : p.theme.color.dark};
  }
`;

export default DrawerLinkStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { dark?: boolean, light?: boolean };

const DrawerLinkStyled = styled.div<T>`
  height: 60px;
  width: ${(p: T) => p.theme.dimension.d100};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  font-family: ${p => p.theme.fontFamily.primary};
  color: ${p => p.light ? p.theme.color.dark : p.theme.color.white};
  cursor: ${(p: T) => p.theme.cursor.pointer};

  &:hover {
    background: ${(p: T) => "#737373"};
    color: ${p => p.light ? p.theme.color.white : p.theme.color.dark};
  }
`;

export default DrawerLinkStyled;
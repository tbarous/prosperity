import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { light?: boolean, dark?: boolean, mount?: boolean };

const DrawerTogglerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  top: ${(p: T) => p.theme.spacing.s0};
  left: ${(p: T) => p.mount ? "225px" : "-10px"};
  border-radius: ${(p: T) => p.theme.borderRadius.medium};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  position: ${(p: T) => p.theme.position.absolute};
  background: ${(p: T) => p.light ? p.theme.color.white : p.theme.color.dark};
  box-shadow: ${(p: T) => p.theme.shadow.lighter};
  transition: left .5s;
  width: 50px;
  height: 40px;
`;

export default DrawerTogglerStyled;
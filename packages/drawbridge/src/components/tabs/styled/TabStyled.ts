import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { onClick?: any };

const TabStyled = styled.div<T>`
  flex: ${(p: T) => 1};
  text-align: ${(p: T) => p.theme.textAlign.center};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  position: ${(p: T) => p.theme.position.relative};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  background-color: ${(p: T) => p.theme.color.primary};
  color: ${(p: T) => p.theme.color.white};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  font-size: ${(p: T) => p.theme.fontSize.md};
`;

export default TabStyled;
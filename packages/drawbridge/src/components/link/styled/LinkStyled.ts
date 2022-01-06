import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { bold?: boolean, active?: boolean };

const LinkStyled = styled.a<T>`
  display: ${(p: T) => p.theme.display.block};
  text-decoration: ${(p: T) => p.theme.textDecoration.none};
  color: ${(p: T) => p.theme.color.dark};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  font-size: ${(p: T) => p.theme.fontSize.md};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  position: ${(p: T) => p.theme.position.relative};
`;

export default LinkStyled;
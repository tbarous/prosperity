import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

export interface T {
    theme: ThemeInterface,
    bold?: boolean
}

const TextStyled = styled.div<T>`
  font-size: ${(p: T) => p.theme.fontSize.md};
  color: ${(p: T) => p.theme.color.dark};
  font-weight: ${(p: T) => p.theme.fontWeight.normal};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default TextStyled;
import styled from "styled-components";
import T from "@components/text/styled/TextStyledProps";

const TextStyled = styled.div<T>`
  font-size: ${(p: T) => p.theme.fontSize.md};
  color: ${(p: T) => p.theme.color.dark};
  font-weight: ${(p: T) => p.theme.fontWeight.normal};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default TextStyled;
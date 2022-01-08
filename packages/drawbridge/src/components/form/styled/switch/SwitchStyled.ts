import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
}

const SwitchStyled = styled.div<T>`
  width: ${(p: T) => p.theme.spacing.s10};
  height: ${(p: T) => p.theme.spacing.s4};
  background: ${(p: T) => p.theme.color.secondary};
  border-radius: ${(p: T) => p.theme.borderRadius.large};
  position: ${(p: T) => p.theme.position.relative};
  cursor: ${(p: T) => p.theme.cursor.pointer};
`;

export default SwitchStyled;
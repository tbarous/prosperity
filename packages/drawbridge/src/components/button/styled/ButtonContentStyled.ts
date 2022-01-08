import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

export interface T {
    theme: ThemeInterface
}

const ButtonContentStyled = styled.div`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
`;

export default ButtonContentStyled;
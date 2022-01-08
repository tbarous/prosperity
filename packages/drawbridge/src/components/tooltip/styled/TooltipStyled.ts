import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface
}

const TooltipTriggerStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.relative};
`;

export default TooltipTriggerStyled;
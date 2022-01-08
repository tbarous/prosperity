import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface
}

const TooltipContentStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  left: ${(p: T) => p.theme.dimension.d40};
  margin-top: ${(p: T) => px(p.theme.spacing.s5)};
`;

export default TooltipContentStyled;
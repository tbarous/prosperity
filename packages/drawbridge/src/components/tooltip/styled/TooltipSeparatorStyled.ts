import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

interface T {
    theme: ThemeInterface
}

const TooltipSeparatorStyled = styled.div<T>`
  height: ${(p: T) => px(p.theme.spacing.s8)};
  bottom: -${(p: T) => px(p.theme.spacing.s8)};
  position: ${(p: T) => p.theme.position.absolute};
  width: ${(p: T) => p.theme.dimension.d100};
`;

export default TooltipSeparatorStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export type T = StyledProps;

const TooltipContentStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  left: ${(p: T) => p.theme.dimension.d40};
  margin-top: ${(p: T) => px(p.theme.spacing.s5)};
`;

export default TooltipContentStyled;
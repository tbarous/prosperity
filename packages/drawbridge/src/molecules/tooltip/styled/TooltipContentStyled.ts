import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface TooltipContentStyledProps extends StyledProps {}

type T = TooltipContentStyledProps;

const TooltipContentStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  left: ${(p: T) => p.theme.dimension.d40};
  margin-top: ${(p: T) => px(p.theme.spacing.s5)};
`;

export default TooltipContentStyled;
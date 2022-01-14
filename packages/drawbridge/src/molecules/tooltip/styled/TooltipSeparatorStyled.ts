import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

export interface TooltipSeparatorStyledProps extends StyledProps {}

type T = TooltipSeparatorStyledProps;

const TooltipSeparatorStyled = styled.div<T>`
  height: ${(p: T) => px(p.theme.spacing.s8)};
  bottom: -${(p: T) => px(p.theme.spacing.s8)};
  position: ${(p: T) => p.theme.position.absolute};
  width: ${(p: T) => p.theme.dimension.d100};
`;

export default TooltipSeparatorStyled;
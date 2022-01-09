import styled from "styled-components";
import {StyledProps} from "@typings";

export interface TooltipStyledProps extends StyledProps {}

type T = TooltipStyledProps;

const TooltipTriggerStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.relative};
`;

export default TooltipTriggerStyled;
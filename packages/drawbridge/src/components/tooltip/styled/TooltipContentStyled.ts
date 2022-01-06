import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export type T = StyledProps;

const TooltipContentStyled = styled.div<T>`
  position: ${(p: T) =>p.theme.position.absolute};
  border: ${(p: T) => p.theme.border.light};
  background: ${(p: T) => p.theme.color.white};
  padding: ${(p: T) => px(p.theme.spacing.s6)};
  right: ${(p: T) => px(p.theme.spacing.s0)};
  margin-top: ${(p: T) => px(p.theme.spacing.s5)};
  box-shadow: ${(p: T) => p.theme.shadow.light};
`;

export default TooltipContentStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";

type T = { fluid?: boolean, gutter?: number } & StyledProps;

const RowStyled = styled.div<T>`
  margin-left: ${(p: T) => `-${!p.gutter ? 15 : (p.gutter * .5) + p.theme.spacing.s9}px`};
  margin-right: ${(p: T) => `-${!p.gutter ? 15 : (p.gutter * .5) + p.theme.spacing.s9}px`};
  height: ${(p: T) => p.theme.dimension.auto};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  display: ${(p: T) => p.theme.display.flex};
  flex-wrap: ${(p: T) => p.theme.flexWrap.wrap};
`;

export default RowStyled;
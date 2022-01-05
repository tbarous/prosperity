import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = { fluid?: boolean, gutter?: number } & StyledProps;

const RowStyled = styled.div<T>`
  margin-left: ${(p: T) => `-${p.gutter ? px((p.gutter * .5) + p.theme.spacing.s9) : p.theme.spacing.s9}`};
  margin-right: ${(p: T) => `-${p.gutter ? px((p.gutter * .5) + p.theme.spacing.s9) : p.theme.spacing.s9}`};
  height: ${(p: T) => p.theme.dimension.auto};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  display: ${(p: T) => p.theme.display.flex};
  flex-wrap: ${(p: T) => p.theme.flexWrap.wrap};
`;

export default RowStyled;
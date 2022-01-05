import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps;

const CheckboxStyled = styled.label<T>`
  display: ${(p: T) => p.theme.display.block};
  position: ${(p: T) => p.theme.position.relative};
  padding-left: ${(p: T) => px(p.theme.spacing.s13)};
  margin-bottom: ${(p: T) => px(p.theme.spacing.s5)};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  font-size: ${(p: T) => p.theme.fontSize.lg};
  border-radius: ${(p: T) => p.theme.borderRadius.large};
  user-select: none;
`;

export default CheckboxStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    focused?: boolean,
}

const InputStyled = styled.input<T>`
  border: ${(p: T) => p.theme.border.none};
  height: ${(p: T) => p.theme.dimension.d100};
  width: ${(p: T) => p.theme.dimension.d100};
  padding: ${(p: T) => px(p.theme.spacing.s0)};
  margin: ${(p: T) => px(p.theme.spacing.s0)};
  font-size: ${(p: T) => p.theme.fontSize.md};
  border-radius: ${(p: T) => p.theme.borderRadius.medium};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  outline: none;
`;

export default InputStyled;
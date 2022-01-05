import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps & { focused?: boolean };

const InputLineStyled = styled.div<T>`
  position: ${(p: T) => p.theme.position.absolute};
  background-color: ${(p: T) => p.theme.color.primary};
  left: ${(p: T) => px(p.theme.spacing.s0)};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => px(p.theme.spacing.s1)};
  transform: ${(p: T) => p.focused ? "scale(1)" : "scale(0)"};
  transition: ${(p: T) => `transform .5s`};
  bottom: ${(p: T) => `-1px`};
`;

export default InputLineStyled;
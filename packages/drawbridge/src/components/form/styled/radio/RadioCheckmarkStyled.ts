import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps & { checked?: boolean };

const RadioCheckmarkStyled = styled.span<T>`
  background-color: ${(p: T) => p.checked ? p.theme.color.primary : "none"};
  position: ${(p: T) => p.theme.position.absolute};
  top: ${(p: T) => px(p.theme.spacing.s0)};
  left: ${(p: T) => px(p.theme.spacing.s0)};
  height: ${(p: T) => px(p.theme.spacing.s8)};
  width: ${(p: T) => px(p.theme.spacing.s8)};
  border-radius: ${(p: T) => p.theme.borderRadius.circle};
  box-sizing: ${(p: T) => p.theme.boxSizing.contentBox};
  box-shadow: ${(p: T) => p.theme.shadow.light};

  &:after {
    content: "";
    position: ${(p: T) => p.theme.position.absolute};
    left: ${(p: T) => px(p.theme.spacing.s3)};
    top: ${(p: T) => px(p.theme.spacing.s2)};
    width: ${(p: T) => px(p.theme.spacing.s2)};
    height: ${(p: T) => px(p.theme.spacing.s4)};
    border-radius: ${(p: T) => p.theme.borderRadius.circle};
    display: ${(p: T) => p.checked ? p.theme.display.block : p.theme.display.none};
    background: ${(p: T) => p.theme.color.white};
  }
`;

export default RadioCheckmarkStyled;
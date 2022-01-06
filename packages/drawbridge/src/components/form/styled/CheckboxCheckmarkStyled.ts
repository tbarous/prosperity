import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps & { checked?: boolean };

const CheckboxCheckmarkStyled = styled.span<T>`
  background-color: ${(p: T) => p.checked ? p.theme.color.primary : "none"};
  position: ${(p: T) => p.theme.position.absolute};
  top: ${(p: T) => px(p.theme.spacing.s0)};
  left: ${(p: T) => px(p.theme.spacing.s0)};
  height: ${(p: T) => px(p.theme.spacing.s6)};
  width: ${(p: T) => px(p.theme.spacing.s6)};
  box-sizing: ${(p: T) => p.theme.boxSizing.contentBox};
  box-shadow: ${(p: T) => p.theme.shadow.light};

  &:after {
    content: "";
    position: ${(p: T) => p.theme.position.absolute};
    left: ${(p: T) => px(p.theme.spacing.s1)};
    top: ${(p: T) => px(p.theme.spacing.s1)};
    width: ${(p: T) => px(p.theme.spacing.s2)};
    height: ${(p: T) => px(p.theme.spacing.s2)};
    border: solid ${(p: T) => p.theme.color.white};
    border-width: ${(p: T) => `${px(p.theme.spacing.s0)} ${px(p.theme.spacing.s2)} ${px(p.theme.spacing.s2)} ${px(p.theme.spacing.s0)}`};
    transform: ${(p: T) => p.theme.transform.rotate45};
    display: ${(p: T) => p.checked ? p.theme.display.block : p.theme.display.none};
  }
`;

export default CheckboxCheckmarkStyled;
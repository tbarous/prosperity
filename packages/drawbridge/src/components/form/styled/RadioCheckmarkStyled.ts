import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { checked?: boolean };

const RadioCheckmarkStyled = styled.span<T>`
  background-color: ${(p: T) => p.checked ? p.theme.color.primary : "none"};
  position: ${(p: T) => p.theme.position.absolute};
  top: ${(p: T) => p.theme.spacing.s0};
  left: ${(p: T) => p.theme.spacing.s0};
  height: ${(p: T) => p.theme.spacing.s8};
  width: ${(p: T) => p.theme.spacing.s8};
  border-radius: ${(p: T) => p.theme.borderRadius.circle};
  box-sizing: ${(p: T) => p.theme.boxSizing.contentBox};
  box-shadow: ${(p: T) => p.theme.shadow.light};

  &:after {
    content: "";
    position: ${(p: T) => p.theme.position.absolute};
    left: ${(p: T) => p.theme.spacing.s3};
    top: ${(p: T) => p.theme.spacing.s2};
    width: ${(p: T) => p.theme.spacing.s2};
    height: ${(p: T) => p.theme.spacing.s4};
    border-radius: ${(p: T) => p.theme.borderRadius.circle};
    display: ${(p: T) => p.checked ? p.theme.display.block : p.theme.display.none};
    background: ${(p: T) => p.theme.color.white};
  }
`;

export default RadioCheckmarkStyled;
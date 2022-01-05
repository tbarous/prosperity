import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { focused?: boolean, hasValue?: boolean };

const InputStyledLabel = styled.label<T>`
  position: ${(p: T) => p.theme.position.absolute};
  font-size: ${(p: T) => p.focused || p.hasValue ? p.theme.fontSize.xs : p.theme.fontSize.md};
  color: ${(p: T) => p.focused ? p.theme.color.primary : p.theme.color.light};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  pointer-events: none;
  transform: ${(p: T) => p.focused || p.hasValue ? "translateY(-20px)" : ""};
  transition: ${(p: T) => "transform .2s linear"};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default InputStyledLabel;
import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {StyledProps} from "@typings";

export interface InputLabelStyledProps extends StyledProps {
    theme: ThemeInterface,
    focused?: boolean,
    filled?: boolean
}

type T = InputLabelStyledProps;

function getColor(p: T) {
    return p.focused ? p.theme.color.primary : p.theme.color.light;
}

function getFontSize(p: T) {
    return p.focused || p.filled ? p.theme.fontSize.xs : p.theme.fontSize.md;
}

function getTransform(p: T) {
    return p.focused || p.filled ? "translateY(-20px)" : "";
}

function getTransition(p: T) {
    return "transform .2s linear";
}

const InputStyledLabel = styled.label<T>`
  font-size: ${getFontSize};
  color: ${getColor};
  transform: ${getTransform};
  transition: ${getTransition};
  position: ${(p: T) => p.theme.position.absolute};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  pointer-events: none;
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default InputStyledLabel;
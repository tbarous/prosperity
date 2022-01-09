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
    if (p.focused) {
        return p.theme.color.primary;
    }

    return p.theme.color.light;
}

function getFontSize(p: T) {
    if (p.focused || p.filled) {
        return p.theme.fontSize.xs;
    }

    return p.theme.fontSize.md;
}

function getTransform(p: T) {
    if (p.focused || p.filled) {
        return "translateY(-20px)";
    }
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
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  pointer-events: none;
`;

export default InputStyledLabel;
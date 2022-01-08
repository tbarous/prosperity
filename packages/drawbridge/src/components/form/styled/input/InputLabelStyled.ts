import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    focused?: boolean,
    hasValue?: boolean
}

function getColor(p: T) {
    return p.focused ? p.theme.color.primary : p.theme.color.light;
}

function getFontSize(p: T) {
    return p.focused || p.hasValue ? p.theme.fontSize.xs : p.theme.fontSize.md;
}

function getTransform(p: T) {
    return p.focused || p.hasValue ? "translateY(-20px)" : "";
}

function getTransition(p: T) {
    return "transform .2s linear";
}

const InputStyledLabel = styled.label<T>`
  position: ${(p: T) => p.theme.position.absolute};
  font-size: ${getFontSize};
  color: ${getColor};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  pointer-events: none;
  transform: ${getTransform};
  transition: ${getTransition};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
`;

export default InputStyledLabel;
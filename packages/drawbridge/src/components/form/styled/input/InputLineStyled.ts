import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

interface InputLineStyledProps extends StyledProps {
    focused?: boolean,
}

type T = InputLineStyledProps;

function getTransform(p: T) {
    return p.focused ? "scale(1)" : "scale(0)";
}

function getTransition(p: T) {
    return `transform .5s`;
}

function getBottom(p: T) {
    return `-1px`;
}

const InputLineStyled = styled.div<T>`
  transform: ${getTransform};
  transition: ${getTransition};
  bottom: ${getBottom};
  position: ${(p: T) => p.theme.position.absolute};
  background-color: ${(p: T) => p.theme.color.primary};
  left: ${(p: T) => px(p.theme.spacing.s0)};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => px(p.theme.spacing.s1)};
`;

export default InputLineStyled;
import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";

interface InputLineStyledProps extends StyledProps {
    focused?: boolean,
}

type T = InputLineStyledProps;

function getTransform(p: T) {
    if (p.focused) {
        return "scale(1)";
    }

    return "scale(0)";
}

function getTransition(p: T) {
    return `transform .5s`;
}

function getBottom(p: T) {
    return `-1px`;
}

function getLeft(p: T) {
    return px(p.theme.spacing.s0);
}

function getHeight(p: T) {
    return px(p.theme.spacing.s1)
}

const InputLineStyled = styled.div<T>`
  transform: ${getTransform};
  transition: ${getTransition};
  bottom: ${getBottom};
  height: ${getHeight};
  left: ${getLeft};
  position: ${(p: T) => p.theme.position.absolute};
  background-color: ${(p: T) => p.theme.color.primary};
  width: ${(p: T) => p.theme.dimension.d100};
`;

export default InputLineStyled;
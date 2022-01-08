import styled from "styled-components";
import {px} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    left: number,
    width: number
}

function getTransform(p: T) {
    return `translateX(${p.left}%)`;
}

function getWidth(p: T) {
    return `${p.width}%`;
}

function getTransition(p: T) {
    return `transform 1s`;
}

const TabActiveStyled = styled.div<T>`
  height: ${(p: T) => px(p.theme.spacing.s2)};
  background-color: ${(p: T) => p.theme.color.secondary};
  position: ${(p: T) => p.theme.position.absolute};
  bottom: ${(p: T) => px(p.theme.spacing.s0)};
  width: ${getWidth};
  transform: ${getTransform};
  transition: ${getTransition};
`;

export default TabActiveStyled;
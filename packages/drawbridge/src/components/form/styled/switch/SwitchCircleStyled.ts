import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    active?: boolean
}

function getTransform(p: T) {
    return `translateX(${p.active ? "calc(100% + 2px)" : "-2px"})`;
}

function getTransition(p: T) {
    return "transform .3s"
}

const SwitchCircleStyled = styled.div<T>`
  width: ${(p: T) => p.theme.spacing.s6};
  height: ${(p: T) => p.theme.spacing.s6};
  background: ${(p: T) => p.theme.color.primary};
  position: ${(p: T) => p.theme.position.absolute};
  border-radius: ${(p: T) => p.theme.borderRadius.circle};
  transform: ${getTransform};
  transition: ${getTransition};
  top: -${(p: T) => p.theme.spacing.s1};
`;

export default SwitchCircleStyled;
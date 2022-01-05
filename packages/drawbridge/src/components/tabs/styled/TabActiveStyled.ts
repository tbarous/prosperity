import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { speed?: number, left?: number, width?: number };

const TabActiveStyled = styled.div<T>`
  height: ${(p: T) => p.theme.spacing.s2};
  background-color: ${(p: T) => p.theme.color.secondary};
  position: ${(p: T) => p.theme.position.absolute};
  bottom: ${(p: T) => p.theme.spacing.s0};
  width: ${(p: T) => `${p.width}%`};
  transform: ${(p: T) => `translateX(${p.left}%)`};
  transition: ${(p: T) => `transform ${p.speed}s`};
`;

export default TabActiveStyled;
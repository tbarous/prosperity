import styled, {keyframes} from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";

type T = { fixed?: boolean, light?: boolean, dark?: boolean, transparent?: boolean} & StyledProps & useMountChildStyledProps;

const slideIn = keyframes`
  from {
    max-width: 0;
  }

  to {
    max-width: 300px;
  }
`;

const slideOut = keyframes`
  from {
    max-width: 300px;
  }

  to {
    max-width: 0;
  }
`;

const DrawerStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  width: ${(p: T) => "300px"};
  max-width: ${(p: T) => p.mount ? "300px" : 0};
  height: ${(p: T) => p.theme.dimension.d100};
  background-color: ${(p: T) => p.transparent ? "transparent" : (p.light ? p.theme.color.white : p.theme.color.dark)};
  position: ${(p: T) => p.fixed ? p.theme.position.fixed : p.theme.position.relative};
  box-shadow: ${(p: T) => p.theme.shadow.strong};
  overflow: ${(p: T) => p.theme.overflow.hidden};
  
  //animation: ${ p=> p.mount ? slideIn : slideOut} .5s forwards;
  animation: ${slideIn} .5s;
  transition: ${(p: T) => `max-width ${p.exitDelay / 1000}s`};
  
  z-index: 9999;
`;

export default DrawerStyled;
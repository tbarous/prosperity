import styled, {css, keyframes} from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import MediaUtils from "@utils/MediaUtils";

type T = StyledProps & useMountChildStyledProps;

const slideIn = keyframes`
  from {
    transform: translateY(-130%);
  }

  to {
    transform: translateY(0);
  }
`;

const ModalContentStyled = styled.div<T>`
  background-color: ${(p: T) => p.theme.color.white};
  border-radius: ${(p: T) => p.theme.borderRadius.medium};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d80};
  transform: ${(p: T) => p.mount ? `translateY(0)` : `translateY(-130%)`};
  
  animation: ${slideIn} .5s;
  transition: ${(p: T) => `transform ${p.exitDelay / 1000}s`};

  ${(p: T) => MediaUtils.up(p.theme.breakpoint.md, css`
    width: 500px;
  `)};
`;

export default ModalContentStyled;
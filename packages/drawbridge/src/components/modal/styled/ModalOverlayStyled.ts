import styled, {keyframes} from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

type T = StyledProps;

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.8;
  }
`;


const ModalOverlayStyled = styled.div`
  background-color: ${(p: T) => p.theme.color.dark};
  display: ${(p: T) => p.theme.display.flex};
  position: ${(p: T) => p.theme.position.fixed};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  align-items: ${(p: T) => p.theme.alignItems.center};
  left: ${(p: T) => px(p.theme.spacing.s0)};
  top: ${(p: T) => px(p.theme.spacing.s0)};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
  opacity: ${(p: T) => p.mount ? 0.8 : 0};

  animation: ${fade} .5s;
  transition: ${(p: T) => `opacity ${p.exitDelay / 1000}s`};
`;

export default ModalOverlayStyled;
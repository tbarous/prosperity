import styled, {css, keyframes} from "styled-components";
import {StyledProps} from "@typings";
import {hexToRgb} from "@utils/ColorUtils";
import exp from "constants";

type T = StyledProps & { variation?: string };

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }

  50% {
    transform: scale(.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const ripple2 = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;


export enum RippleVariation {
    BASIC = "basic",
    STRONG = "strong"
}

function getBackground(p: T) {
    const {r, g, b} = hexToRgb(p.theme.color.primary);

    let colorOpacity = 0.1;

    if (p.variation && p.variation === RippleVariation.STRONG) {
        colorOpacity = 0.5;
    }

    return `rgba(${r}, ${g}, ${b}, ${colorOpacity})`;
}

function getAnimation(p: T) {
    if (p.variation && p.variation === RippleVariation.STRONG) {
        return css`${ripple} .4s linear forwards`;
    }

    return css`${ripple2} .4s linear forwards`;
}

function getSize(p: T) {
    if (p.variation && p.variation === RippleVariation.STRONG) {
        return `60px`;
    }

    return `40px`;
}

const RippleStyled = styled.div<T>`
  display: block;
  background-color: ${getBackground};
  z-index: -1;
  width: ${getSize};
  height: ${getSize};
  border-radius: 50%;
  position: absolute;
  animation: ${getAnimation};
`;

export default RippleStyled;
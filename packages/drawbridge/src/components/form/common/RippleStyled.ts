import styled, {css, keyframes} from "styled-components";
import {hexToRgb} from "@utils/ColorUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    variation?: string
}

export enum RippleVariations {
    BASIC = "basic",
    STRONG = "strong"
}

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

function getBackground(p: T) {
    const {r, g, b} = hexToRgb(p.theme.color.primary);

    let colorOpacity = 0.1;

    if (p.variation && p.variation === RippleVariations.STRONG) {
        colorOpacity = 0.5;
    }

    return `rgba(${r}, ${g}, ${b}, ${colorOpacity})`;
}

function getAnimation(p: T) {
    if (p.variation && p.variation === RippleVariations.STRONG) {
        return css`${ripple} .2s linear forwards`;
    }

    return css`${ripple2} .2s linear forwards`;
}

function getSize(p: T) {
    if (p.variation && p.variation === RippleVariations.STRONG) {
        return `60px`;
    }

    return `40px`;
}

const RippleStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.block};
  background-color: ${getBackground};
  z-index: -1;
  width: ${getSize};
  height: ${getSize};
  border-radius: ${(p: T) => p.theme.borderRadius.circle};
  position: ${(p: T) => p.theme.position.absolute};
  animation: ${getAnimation};
`;

export default RippleStyled;
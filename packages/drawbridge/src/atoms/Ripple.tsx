import styled, {css, keyframes} from "styled-components";
import {hexToRgb} from "@utils/ColorUtils";
import {StyledProps} from "@typings";

interface Props extends StyledProps {
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

function getBackground(p: Props) {
    const {r, g, b} = hexToRgb(p.theme.color.primary);

    let colorOpacity = 0.1;

    if (p.variation && p.variation === RippleVariations.STRONG) {
        colorOpacity = 0.5;
    }

    return `rgba(${r}, ${g}, ${b}, ${colorOpacity})`;
}

function getAnimation(p: Props) {
    if (p.variation && p.variation === RippleVariations.STRONG) {
        return css`${ripple} .2s linear forwards`;
    }

    return css`${ripple2} .2s linear forwards`;
}

function getSize(p: Props) {
    if (p.variation && p.variation === RippleVariations.STRONG) {
        return `60px`;
    }

    return `40px`;
}

const Ripple = styled.div<Props>`
  width: ${getSize};
  height: ${getSize};
  background-color: ${getBackground};
  animation: ${getAnimation};
  display: ${p => p.theme.display.block};
  border-radius: ${p => p.theme.borderRadius.circle};
  position: ${p => p.theme.position.absolute};
  z-index: -1;
`;

export default Ripple;
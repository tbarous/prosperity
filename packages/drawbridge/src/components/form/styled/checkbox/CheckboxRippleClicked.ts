import styled, {keyframes} from "styled-components";
import {StyledProps} from "@typings";
import {hexToRgb} from "@utils/ColorUtils";

type T = StyledProps & { clicked?: boolean };

const rotate = keyframes`
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0.3;
  }
`;

const CheckboxRippleClicked = styled.div<T>`
  display: block;
  background: rgba(${p=> `${hexToRgb(p.theme.color.primary)?.r}, ${hexToRgb(p.theme.color.primary)?.g}, ${hexToRgb(p.theme.color.primary)?.b}, 0.1`});
  z-index: -1;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  animation: ${rotate} 1s ease-in-out forwards;
`;

export default CheckboxRippleClicked;
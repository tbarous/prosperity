import styled from "styled-components";
import {StyledProps} from "@typings";
import {hexToRgb} from "@utils/ColorUtils";

type T = StyledProps & { ripple?: boolean };

const CheckboxRipple = styled.div<T>`
  display: block;
  background: rgba(${p=> `${hexToRgb(p.theme.color.primary)?.r}, ${hexToRgb(p.theme.color.primary)?.g}, ${hexToRgb(p.theme.color.primary)?.b}, 0.2`});
  z-index: -1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  transform: ${p => p.ripple ? "scale(1)" : "scale(0.0001)"};
  transition: transform .2s ease-in-out;
`;

export default CheckboxRipple;
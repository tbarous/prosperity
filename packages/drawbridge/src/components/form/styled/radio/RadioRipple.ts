import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps & { ripple?: boolean };

const CheckboxRipple = styled.div<T>`
  display: block;
  background: rgba(0, 0, 0, 0.1);
  z-index: -1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  transform: ${p => p.ripple ? "scale(1)" : "scale(0.1)"};
  transition: transform .2s ease-in-out;
`;

export default CheckboxRipple;
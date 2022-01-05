import styled from "styled-components";
import {StyledProps} from "@typings";

export interface RadioInputStyledProps extends StyledProps {
}

const RadioInputStyled = styled.input<RadioInputStyledProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export default RadioInputStyled;
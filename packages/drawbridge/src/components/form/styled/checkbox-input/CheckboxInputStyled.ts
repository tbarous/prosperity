import styled from "styled-components";
import {StyledProps} from "@typings";

export interface CheckboxInputStyledProps extends StyledProps {
}

const CheckboxInputStyled = styled.input<CheckboxInputStyledProps>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export default CheckboxInputStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";

export interface RadioStyledProps extends StyledProps {
}

const RadioStyled = styled.label<RadioStyledProps>`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export default RadioStyled;
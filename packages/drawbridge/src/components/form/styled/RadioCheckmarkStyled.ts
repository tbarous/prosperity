import styled from "styled-components";
import {StyledProps} from "@typings";

export interface RadioCheckmarkProps extends StyledProps {
    checked?: boolean
}

const RadioCheckmarkStyled = styled.span<RadioCheckmarkProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }

  background-color: ${props => props.checked ? `#2196F3` : "#eee"};

  &:after {
    display: ${props => props.checked ? "block" : ""};
  }
`;

export default RadioCheckmarkStyled;
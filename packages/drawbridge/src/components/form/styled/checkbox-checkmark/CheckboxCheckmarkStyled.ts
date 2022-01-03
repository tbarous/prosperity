import styled from "styled-components";
import {StyledProps} from "@typings";

export interface CheckboxCheckmarkProps extends StyledProps {
    checked?: boolean
}

const CheckboxCheckmarkStyled = styled.span<CheckboxCheckmarkProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;

  &:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  background-color: ${props => props.checked ? `#2196F3` : "#eee"};

  &:after {
    display: ${props => props.checked ? "block" : ""};
  }
`;

export default CheckboxCheckmarkStyled;
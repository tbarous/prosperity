import styled from "styled-components";
import {StyledProps} from "@typings";
import CheckboxStyledGetters from "@components/form/styled/checkbox/CheckboxStyledGetters";

export interface CheckboxStyledProps extends StyledProps {
}

const CheckboxStyled = styled.label<CheckboxStyledProps>`
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

  //&:hover input ~ span {
  //  background-color: #ccc;
  //}
`;

export default CheckboxStyled;
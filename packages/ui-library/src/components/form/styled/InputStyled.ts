import styled from "styled-components";
import {StyledProps} from "@typings";
import InputStyledGetters from "@components/form/styled/InputStyledGetters";

export interface InputStyledProps extends StyledProps {

}

const InputStyled = styled.input<InputStyledProps>`
  border: ${InputStyledGetters.border};
  height: ${InputStyledGetters.height};
  width: ${InputStyledGetters.width};
  padding: ${InputStyledGetters.padding};
  margin: ${InputStyledGetters.margin};
  font-size: ${InputStyledGetters.fontSize};
  outline: none;
  text-indent: 1rem;
`;

export default InputStyled;
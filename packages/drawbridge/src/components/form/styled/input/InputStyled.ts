import styled from "styled-components";
import {StyledProps} from "@typings";
import InputStyledGetters from "@components/form/styled/input/InputStyledGetters";

export interface InputStyledProps extends StyledProps {}

const InputStyled = styled.input<InputStyledProps>`
  border: ${InputStyledGetters.Border};
  height: ${InputStyledGetters.Height};
  width: ${InputStyledGetters.Width};
  padding: ${InputStyledGetters.Padding};
  margin: ${InputStyledGetters.Margin};
  font-size: ${InputStyledGetters.FontSize};
  border-radius: ${InputStyledGetters.BorderRadius};
  font-family: ${InputStyledGetters.FontFamily};
  outline: ${InputStyledGetters.Outline};
`;

export default InputStyled;
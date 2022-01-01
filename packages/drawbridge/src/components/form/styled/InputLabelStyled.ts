import styled from "styled-components";
import {StyledProps} from "@typings";
import InputLabelStyledGetters from "@components/form/styled/InputLabelStyledGetters";

export interface InputLabelStyledProps extends StyledProps {
    focused?: boolean,
    hasValue?: boolean
}

const InputStyledLabel = styled.label<InputLabelStyledProps>`
  position: ${InputLabelStyledGetters.Position};
  font-size: ${InputLabelStyledGetters.FontSize};
  color: ${InputLabelStyledGetters.Color};
  font-weight: ${InputLabelStyledGetters.FontWeight};
  pointer-events: none;
  transform: ${(props: InputLabelStyledProps) => props.focused || props.hasValue ? "translateY(-20px)" : ""};
  transition: transform .2s linear;
`;

export default InputStyledLabel;
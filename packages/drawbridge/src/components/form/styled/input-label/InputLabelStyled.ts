import styled from "styled-components";
import {StyledProps} from "@typings";
import InputLabelStyledGetters from "@components/form/styled/input-label/InputLabelStyledGetters";

export interface InputLabelStyledProps extends StyledProps {
    focused?: boolean,
    hasValue?: boolean
}

const InputStyledLabel = styled.label<InputLabelStyledProps>`
  position: ${InputLabelStyledGetters.Position};
  font-size: ${InputLabelStyledGetters.FontSize};
  color: ${InputLabelStyledGetters.Color};
  font-weight: ${InputLabelStyledGetters.FontWeight};
  pointer-events: ${InputLabelStyledGetters.PointerEvents};
  transform: ${InputLabelStyledGetters.Transform};
  transition: ${InputLabelStyledGetters.Transition};
`;

export default InputStyledLabel;
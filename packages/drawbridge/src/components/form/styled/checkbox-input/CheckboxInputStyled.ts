import styled from "styled-components";
import {StyledProps} from "@typings";
import CheckboxInputStyledGetters from "@components/form/styled/checkbox-input/CheckboxInputStyledGetters";

export interface CheckboxInputStyledProps extends StyledProps {
}

const CheckboxInputStyled = styled.input<CheckboxInputStyledProps>`
  position: ${CheckboxInputStyledGetters.Position};
  opacity: ${CheckboxInputStyledGetters.Opacity};
  cursor: ${CheckboxInputStyledGetters.Cursor};
  height: ${CheckboxInputStyledGetters.Height};
  width: ${CheckboxInputStyledGetters.Width};
`;

export default CheckboxInputStyled;
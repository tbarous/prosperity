import styled from "styled-components";
import {StyledProps} from "@typings";
import CheckboxStyledGetters from "@components/form/styled/checkbox/CheckboxStyledGetters";

export interface CheckboxStyledProps extends StyledProps {
}

const CheckboxStyled = styled.label<CheckboxStyledProps>`
  display: ${CheckboxStyledGetters.Display};
  position: ${CheckboxStyledGetters.Position};
  padding-left: ${CheckboxStyledGetters.PaddingLeft};
  margin-bottom: ${CheckboxStyledGetters.MarginBottom};
  cursor: ${CheckboxStyledGetters.Cursor};
  font-size: ${CheckboxStyledGetters.FontSize};
  user-select: ${CheckboxStyledGetters.UserSelect};
  border-radius: ${CheckboxStyledGetters.BorderRadius};
`;

export default CheckboxStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import CheckboxCheckmarkStyledGetters from "@components/form/styled/checkbox-checkmark/CheckboxCheckmarkStyledGetters";

export interface CheckboxCheckmarkStyledProps extends StyledProps {
    checked?: boolean
}

const CheckboxCheckmarkStyled = styled.span<CheckboxCheckmarkStyledProps>`
  background-color: ${CheckboxCheckmarkStyledGetters.BackgroundColor};
  position: ${CheckboxCheckmarkStyledGetters.Position};
  top: ${CheckboxCheckmarkStyledGetters.Top};
  left: ${CheckboxCheckmarkStyledGetters.Left};
  height: ${CheckboxCheckmarkStyledGetters.Height};
  width: ${CheckboxCheckmarkStyledGetters.Width};
  border-radius: ${CheckboxCheckmarkStyledGetters.BorderRadius};
  box-sizing: content-box;
  box-shadow: ${props => props.theme.shadow.light};

  &:after {
    content: "";
    position: ${CheckboxCheckmarkStyledGetters.After.Position};
    left: ${CheckboxCheckmarkStyledGetters.After.Left};
    top: ${CheckboxCheckmarkStyledGetters.After.Top};
    width: ${CheckboxCheckmarkStyledGetters.After.Width};
    height: ${CheckboxCheckmarkStyledGetters.After.Height};
    border: ${CheckboxCheckmarkStyledGetters.After.Border};
    border-width: ${CheckboxCheckmarkStyledGetters.After.BorderWidth};
    transform: ${CheckboxCheckmarkStyledGetters.After.Transform};
    display: ${CheckboxCheckmarkStyledGetters.After.Display};
  }
`;

export default CheckboxCheckmarkStyled;
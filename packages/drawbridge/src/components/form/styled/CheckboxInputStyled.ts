import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface CheckboxInputStyledProps extends StyledProps {
}

const CheckboxInputStyled = styled.input<CheckboxInputStyledProps>`
  position: ${rules.position.absolute};
  opacity: 0;
  cursor: ${rules.cursor.pointer};
  height: ${(props: CheckboxInputStyledProps) => props.theme.dimension.d0};
  width: ${(props: CheckboxInputStyledProps) => props.theme.dimension.d0};
`;

export default CheckboxInputStyled;
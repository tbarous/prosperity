import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface CheckboxStyledProps extends StyledProps {
}

const CheckboxStyled = styled.label<CheckboxStyledProps>`
  display: ${rules.display.block};
  position: ${rules.position.relative};
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: ${rules.cursor.pointer};
  font-size: 22px;
  user-select: none;
  border-radius: 8px;
`;

export default CheckboxStyled;
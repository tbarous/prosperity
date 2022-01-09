import styled from "styled-components";
import {StyledProps} from "@typings";

interface CheckboxRadioStyledProps extends StyledProps {}

type T = CheckboxRadioStyledProps;

const CheckboxRadioStyled = styled.label<T>`
  display: ${(p: T) => p.theme.display.block};
  position: ${(p: T) => p.theme.position.relative};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  font-size: ${(p: T) => p.theme.fontSize.lg};
  border-radius: ${(p: T) => p.theme.borderRadius.large};
  user-select: none;
`;

export default CheckboxRadioStyled;
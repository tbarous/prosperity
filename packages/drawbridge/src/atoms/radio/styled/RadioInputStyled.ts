import styled from "styled-components";
import {StyledProps} from "@typings";

interface CheckboxRadioInputStyledProps extends StyledProps {}

type T = CheckboxRadioInputStyledProps;

const CheckboxRadioInputStyled = styled.input<T>`
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  opacity: ${(p: T) => p.theme.opacity.hidden};
  height: ${(p: T) => p.theme.dimension.d0};
  width: ${(p: T) => p.theme.dimension.d0};
`;

export default CheckboxRadioInputStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";

interface CheckboxRadioWrapperStyledProps extends StyledProps {}

type T = CheckboxRadioWrapperStyledProps;

const CheckboxRadioWrapperStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
`

export default CheckboxRadioWrapperStyled;
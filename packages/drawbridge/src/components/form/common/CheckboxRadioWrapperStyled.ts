import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
}

const CheckboxRadioWrapperStyled = styled.div<T>`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
`

export default CheckboxRadioWrapperStyled;
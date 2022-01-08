import styled from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface
}

const SnackbarContentStyled = styled.div<T>`
  text-align: ${(p: T) => p.theme.textAlign.center};
  margin: ${(p: T) => p.theme.spacing.auto};
`;

export default SnackbarContentStyled;
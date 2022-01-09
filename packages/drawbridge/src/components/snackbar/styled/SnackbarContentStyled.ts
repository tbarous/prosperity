import styled from "styled-components";
import {StyledProps} from "@typings";

export interface SnackbarContentStyledProps extends StyledProps {}

type T = SnackbarContentStyledProps;

const SnackbarContentStyled = styled.div<T>`
  text-align: ${(p: T) => p.theme.textAlign.center};
  margin: ${(p: T) => p.theme.spacing.auto};
`;

export default SnackbarContentStyled;
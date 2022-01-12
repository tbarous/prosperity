import styled from "styled-components";
import {StyledProps} from "@typings";

export interface ButtonContentProps extends StyledProps {}

type T = ButtonContentProps;

const ButtonContentStyled = styled.div`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
`;

export default ButtonContentStyled;
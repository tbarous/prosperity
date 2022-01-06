import styled from "styled-components";
import {StyledProps} from "@typings";

type T = StyledProps;

const ButtonWrapperStyled = styled.div`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};
`;

export default ButtonWrapperStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";

export interface IconStyledProps extends StyledProps {}

type T = IconStyledProps;

const IconStyled = styled.div<T>`
  color: ${(p: T) => p.theme.color.dark};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  justify-content: ${(p: T) => p.theme.justifyContent.center};

  svg {
    width: ${(p: T) => p.theme.dimension.d100};
    height: ${(p: T) => p.theme.dimension.d100};
  }
`;

export default IconStyled;
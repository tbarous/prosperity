import styled from "styled-components";
import {StyledProps} from "@typings";
import LinkStyledGetters from "@components/link/styled/LInkStyledGetters";

export interface LinkStyledProps extends StyledProps {
}

const LinkStyled = styled.a<LinkStyledProps>`
  display: ${LinkStyledGetters.Display};
  text-decoration: ${LinkStyledGetters.TextDecoration};
  color: ${LinkStyledGetters.Color};
  font-weight: ${LinkStyledGetters.FontWeight};
  font-size: ${LinkStyledGetters.FontSize};

  &:hover {
    color: ${LinkStyledGetters.Color};
  }
`;

export default LinkStyled;
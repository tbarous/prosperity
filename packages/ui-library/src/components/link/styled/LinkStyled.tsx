import styled from "styled-components";
import {StyledProps} from "@typings";
import {
    LinkColor,
    LinkDisplay,
    LinkFontSize,
    LinkFontWeight,
    LinkHoveredColor,
    LinkTextDecoration
} from "@components/link/styled/LInkStyledGetters";

export interface LinkStyledProps extends StyledProps {
}

const LinkStyled = styled.a<LinkStyledProps>`
  display: ${LinkDisplay};
  text-decoration: ${LinkTextDecoration};
  color: ${LinkColor};
  font-weight: ${LinkFontWeight};
  font-size: ${LinkFontSize};

  &:hover {
    color: ${LinkHoveredColor};
  }
`;

export default LinkStyled;
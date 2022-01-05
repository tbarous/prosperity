import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface LinkStyledProps extends StyledProps {
}

const LinkStyled = styled.a<LinkStyledProps>`
  display: ${rules.display.block};
  text-decoration: ${rules.textDecoration.none};
  color: ${(props: LinkStyledProps) => props.theme.color.dark};
  font-weight: ${(props: LinkStyledProps) => props.theme.fontWeight.bold};
  font-size: ${(props: LinkStyledProps) => props.theme.fontSize.md};
  font-family: ${(props: LinkStyledProps) => props.theme.fontFamily.primary};

  &:hover {
    color: ${(props: LinkStyledProps) => props.theme.color.secondary};
  }
`;

export default LinkStyled;
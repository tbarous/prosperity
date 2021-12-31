import styled from "styled-components";
import {StyledProps} from "@typings";

interface Props extends StyledProps {

}

const LinkStyled = styled.a`
  display: block;
  text-decoration: none;
  color: ${(props: Props) => props.theme.color.primary};
  font-weight: ${(props: Props) => props.theme.font.weight.bold};
  font-size: ${(props: Props) => props.theme.font.size.md};

  &:hover {
    color: ${(props: Props) => props.theme.color.secondary};
  }
`;

export default LinkStyled;
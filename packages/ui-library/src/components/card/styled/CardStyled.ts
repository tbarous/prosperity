import styled from "styled-components";
import Theme from "@theme/interfaces";
import {StyledProps} from "@typings";

interface Props extends StyledProps {

}

const CardStyled = styled.div<StyledProps>`
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  background: ${(props: Props) => props.theme.color.white};
  border-radius: ${(props: Props) => props.theme.border.radius.primary};
  width: 100%;
  box-sizing: border-box;
`;


export default CardStyled;
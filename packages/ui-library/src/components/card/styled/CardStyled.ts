import styled from "styled-components";
import {StyledProps} from "@typings";

const CardStyled = styled.div<StyledProps>`
  box-shadow: ${(props: StyledProps) => props.theme.shadow.primary};
  background: ${(props: StyledProps) => props.theme.color.white};
  border-radius: ${(props: StyledProps) => props.theme.border.radius.primary};
  width: 100%;
  box-sizing: border-box;
`;


export default CardStyled;
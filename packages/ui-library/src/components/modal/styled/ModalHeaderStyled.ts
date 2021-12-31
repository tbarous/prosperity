import styled from "styled-components";
import {StyledProps} from "@typings";

interface Props extends StyledProps {
}

const ModalHeaderStyled = styled.div`
  border-top-left-radius: ${(props: Props) => props.theme.border.radius.primary};
  border-top-right-radius: ${(props: Props) => props.theme.border.radius.primary};
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  font-size: ${(props: Props) => props.theme.font.size.lg};
  width: ${(props: Props) => props.theme.dimension.d100};
  font-family: ${(props: Props) => props.theme.font.family.secondary};
  height: 10%;
  box-sizing: border-box;
`;

export default ModalHeaderStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";

interface Props extends StyledProps {

}

const ModalBodyStyled = styled.div<Props>`
  font-size: ${(props: Props) => props.theme.font.size.md};
  width: ${(props: Props) => props.theme.dimension.d100};
  overflow-y: auto;
  height: 70%;
  box-sizing: border-box;
`;

export default ModalBodyStyled;
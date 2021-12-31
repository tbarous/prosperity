import styled from "styled-components";
import {StyledProps} from "@typings";

interface Props extends StyledProps {
}

const ModalFooterStyled = styled.div`
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  border-bottom-left-radius: ${(props: Props) => props.theme.border.radius.primary};
  border-bottom-right-radius: ${(props: Props) => props.theme.border.radius.primary};
  font-size: ${(props: Props) => props.theme.font.size.md};
  padding: ${(props: Props) => props.theme.spacing.s3} ${(props: Props) => props.theme.spacing.s5};
  width: ${(props: Props) => props.theme.dimension.d100};
  position: absolute;
  bottom: 0;
  height: 20%;
  overflow-y: auto;
  box-sizing: border-box;
`;

export default ModalFooterStyled;
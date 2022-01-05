import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ModalBodyStyledProps extends StyledProps {
}

const ModalBodyStyled = styled.div<ModalBodyStyledProps>`
  font-size: ${(props: ModalBodyStyledProps) => props.theme.fontSize.md};
  width: ${(props: ModalBodyStyledProps) => props.theme.dimension.d100};
  height: ${(props: ModalBodyStyledProps) => props.theme.dimension.d70};
  box-sizing: ${rules.boxSizing.borderBox};
  overflow-y: ${rules.overflow.auto};
`;

export default ModalBodyStyled;
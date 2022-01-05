import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ModalFooterStyledProps extends StyledProps {
}

const ModalFooterStyled = styled.div`
  overflow-y: ${rules.overflow.auto};
  position: ${rules.position.absolute};
  box-sizing: ${rules.boxSizing.borderBox};
  box-shadow: ${(props: ModalFooterStyledProps) => props.theme.shadow.medium};
  border-bottom-left-radius: ${(props: ModalFooterStyledProps) => props.theme.borderRadius.medium};
  border-bottom-right-radius: ${(props: ModalFooterStyledProps) => props.theme.borderRadius.medium};
  font-size: ${(props: ModalFooterStyledProps) => props.theme.fontSize.md};
  padding: ${(props: ModalFooterStyledProps) => `${props.theme.spacing.s3} ${props.theme.spacing.s5}`};
  width: ${(props: ModalFooterStyledProps) => props.theme.dimension.d100};
  height: ${(props: ModalFooterStyledProps) => props.theme.dimension.d20};
  bottom: ${(props: ModalFooterStyledProps) => props.theme.spacing.s0};
  background-color: white;
`;

export default ModalFooterStyled;
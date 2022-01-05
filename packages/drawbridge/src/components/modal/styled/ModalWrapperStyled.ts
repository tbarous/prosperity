import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ModalWrapperStyledProps extends StyledProps {
}

const ModalWrapperStyled = styled.div<ModalWrapperStyledProps>`
  display: ${rules.display.flex};
  align-items: ${rules.alignItems.center};
  justify-content: ${rules.justifyContent.center};
  width: ${(props: ModalWrapperStyledProps) => props.theme.dimension.d100};
  height: ${(props: ModalWrapperStyledProps) => props.theme.dimension.d100};
  position: ${rules.position.fixed};
  top: ${(props: ModalWrapperStyledProps) => props.theme.spacing.s0};
  left: ${(props: ModalWrapperStyledProps) => props.theme.spacing.s0};
`;

export default ModalWrapperStyled;
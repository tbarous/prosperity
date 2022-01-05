import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ModalCloseStyledProps extends StyledProps {
}

const ModalCloseStyled = styled(Icon)<ModalCloseStyledProps>`
  align-items: ${rules.alignItems.center};
  top: ${(props: ModalCloseStyledProps) => props.theme.spacing.s2};
  right: ${(props: ModalCloseStyledProps) => props.theme.spacing.s2};
  position: ${rules.position.fixed};
  cursor: ${rules.cursor.pointer};
  border-radius: ${(props: ModalCloseStyledProps) => props.theme.borderRadius.circle};
  color: ${(props: ModalCloseStyledProps) => props.theme.color.dark};
  padding: ${(props: ModalCloseStyledProps) => props.theme.spacing.s2};
  display: ${rules.display.flex};
  background-color: ${(props: ModalCloseStyledProps) => props.theme.color.white};
  border: 2px solid;
`;

export default ModalCloseStyled;
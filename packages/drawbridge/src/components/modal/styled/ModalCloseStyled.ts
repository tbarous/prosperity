import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {StyledProps} from "@typings";

type T = StyledProps;

const ModalCloseStyled = styled(Icon)<T>`
  align-items: ${(p: T) => p.theme.alignItems.center};
  top: ${(p: T) => p.theme.spacing.s2};
  right: ${(p: T) => p.theme.spacing.s2};
  position: ${(p: T) => p.theme.position.fixed};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  border-radius: ${(p: T) => p.theme.borderRadius.circle};
  color: ${(p: T) => p.theme.color.dark};
  padding: ${(p: T) => p.theme.spacing.s2};
  display: ${(p: T) => p.theme.display.flex};
  background-color: ${(p: T) => p.theme.color.white};
  border: ${(p: T) => p.theme.border.medium};
`;

export default ModalCloseStyled;
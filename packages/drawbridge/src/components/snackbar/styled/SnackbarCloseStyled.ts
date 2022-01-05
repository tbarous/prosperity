import styled from "styled-components";
import {StyledProps} from "@typings";
import Icon from "@components/icon/Icon";
import rules from "@rules";

export interface SnackbarCloseStyledProps extends StyledProps {
}

const SnackbarCloseStyled = styled(Icon)<SnackbarCloseStyledProps>`
  position: ${rules.position.absolute};
  cursor: ${rules.cursor.pointer};
  right: ${(props: SnackbarCloseStyledProps) => props.theme.spacing.s5};
  top: ${(props: SnackbarCloseStyledProps) => props.theme.spacing.s5};
`;

export default SnackbarCloseStyled;
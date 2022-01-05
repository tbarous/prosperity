import styled from "styled-components";
import {StyledProps} from "@typings";
import Icon from "@components/icon/Icon";
import rules from "@rules";

export interface DrawerCloseStyledProps extends StyledProps {
    unmounting?: boolean
}

const DrawerCloseStyled = styled(Icon)<DrawerCloseStyledProps>`
  position: ${rules.position.absolute};
  cursor: ${rules.cursor.pointer};
  top: ${(props: DrawerCloseStyledProps) => props.theme.spacing.s6};
  right: ${(props: DrawerCloseStyledProps) => props.theme.spacing.s6};
`;

export default DrawerCloseStyled;
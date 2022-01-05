import styled from "styled-components";
import {StyledProps} from "@typings";
import Icon from "@components/icon/Icon";

export interface DrawerCloseStyledProps extends StyledProps {
    unmounting?: boolean
}

const DrawerCloseStyled = styled(Icon)<DrawerCloseStyledProps>`
  position: absolute;
  top: .5rem;
  right: .5rem;
  cursor: pointer;
`;

export default DrawerCloseStyled;
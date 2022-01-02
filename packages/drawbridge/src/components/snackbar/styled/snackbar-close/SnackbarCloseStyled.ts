import styled from "styled-components";
import {StyledProps} from "@typings";
import SnackbarCloseStyledGetters from "@components/snackbar/styled/snackbar-close/SnackbarCloseStyledGetters";
import Icon from "@components/icon/Icon";

export interface SnackbarCloseStyledProps extends StyledProps {
}

const SnackbarCloseStyled = styled(Icon)<SnackbarCloseStyledProps>`
  position: absolute;
  right: .5rem;
  top: .5rem;
  cursor: pointer;
`;

export default SnackbarCloseStyled;
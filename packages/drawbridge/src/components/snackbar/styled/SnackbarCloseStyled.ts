import styled from "styled-components";
import Icon from "@components/icon/Icon";
import {px} from "@utils/ThemeUtils";
import {StyledProps} from "@typings";
import {SnackbarUIProps} from "@components/snackbar/Snackbar";

export interface SnackbarCloseStyledProps extends SnackbarUIProps, StyledProps {}

type T = SnackbarCloseStyledProps;

function getColor(p: T) {
    if (p.danger) {
        return p.theme.color.surface;
    }

    if (p.success) {
        return p.theme.color.surface;
    }

    if (p.warning) {
        return p.theme.color.dark;
    }
}

const SnackbarCloseStyled = styled(Icon)<T>`
  position: ${(p: T) => p.theme.position.absolute};
  cursor: ${(p: T) => p.theme.cursor.pointer};
  right: ${(p: T) => px(p.theme.spacing.s5)};
  top: ${(p: T) => px(p.theme.spacing.s5)};
  color: ${getColor};
`;

export default SnackbarCloseStyled;
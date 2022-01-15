import React from "react";
import styled from "styled-components";
import {StyledProps} from "@typings";
import Alert from "@atoms/Alert";
import Icon from "@atoms/Icon";
import {px} from "@utils/ThemeUtils";

export interface SnackbarStyledProps extends StyledProps {
    position?: SnackbarPositionVariations
}

export enum SnackbarPositionVariations {
    TOP = "top",
    BOTTOM = "bottom"
}

const Snackbar = styled(Alert)<SnackbarStyledProps>`
  top: ${p => p.position === SnackbarPositionVariations.TOP ? p.theme.spacing.s0 : p.theme.spacing.auto};
  bottom: ${p => !p.position || p.position === SnackbarPositionVariations.BOTTOM ? p.theme.spacing.s0 : p.theme.spacing.auto};
`;

export const SnackbarClose = styled(Icon)<StyledProps>`
  position: ${p => p.theme.position.absolute};
  cursor: ${p => p.theme.cursor.pointer};
  right: ${p => px(p.theme.spacing.s5)};
  top: ${p => px(p.theme.spacing.s5)};
  color: ${p => p.theme.color.danger};
`;

export default Snackbar;
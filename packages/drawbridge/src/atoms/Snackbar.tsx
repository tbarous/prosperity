import React from "react";
import styled from "styled-components";
import {StyledProps} from "@typings";
import Alert from "@atoms/Alert";

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

export default Snackbar;
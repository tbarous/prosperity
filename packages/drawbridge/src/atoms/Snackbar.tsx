import React from "react";
import styled from "styled-components";
import {StyledProps} from "@typings";
import {px} from "@utils/ThemeUtils";

export interface SnackbarStyledProps extends StyledProps {
    position?: SnackbarPositionVariations
}

export enum SnackbarPositionVariations {
    TOP = "top",
    BOTTOM = "bottom"
}

const Snackbar = styled.div<SnackbarStyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  font-family: ${p => p.theme.fontFamily.primary};
  position: ${p => p.theme.position.fixed};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  top: ${p => p.position === SnackbarPositionVariations.TOP ? p.theme.spacing.s0 : p.theme.spacing.auto};
  bottom: ${p => !p.position || p.position === SnackbarPositionVariations.BOTTOM ? p.theme.spacing.s0 : p.theme.spacing.auto};
  left: ${p => p.theme.spacing.s0};
  width: ${p => p.theme.dimension.d100};
  font-weight: ${p => p.theme.fontWeight.bold};
  box-shadow: ${p => p.theme.shadow.medium};
  padding: ${p => `${p.theme.spacing.s0} ${px(p.theme.spacing.s6)}`};
  height: ${p => px(p.theme.dimension.snackbar.height)};
  color: ${p => p.theme.color.surface};
  background-color: ${p => p.theme.color.success};
`;

export default Snackbar;
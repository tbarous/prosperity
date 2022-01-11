import styled from "styled-components";
import {px, transformY, transition} from "@utils/ThemeUtils";
import {SnackbarUIProps} from "@components/snackbar/Snackbar";
import {StyledProps} from "@typings";

export interface SnackbarStyledProps extends SnackbarUIProps, StyledProps {
    transition: boolean,
}

type T = SnackbarStyledProps;

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

function getBackgroundColor(p: T) {
    if (p.danger) {
        return p.theme.color.danger;
    }

    if (p.warning) {
        return p.theme.color.warning;
    }

    if (p.success) {
        return p.theme.color.success;
    }
}

function getTransform(p: T) {
    return transformY(p.transition, p.theme.dimension.snackbar.height);
}

function getTransition(p: T) {
    return transition({ms: p.theme.animation.snackbar});
}

function getPadding(p: T) {
    const y = px(p.theme.spacing.s0);
    const x = px(p.theme.spacing.s6);

    return `${y} ${x}`;
}

function getHeight(p: T) {
    return px(p.theme.dimension.snackbar.height);
}

const SnackbarStyled = styled.div`
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  position: ${(p: T) => p.theme.position.fixed};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  bottom: ${(p: T) => px(p.theme.spacing.s0)};
  left: ${(p: T) => px(p.theme.spacing.s0)};
  width: ${(p: T) => p.theme.dimension.d100};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
  padding: ${getPadding};
  height: ${getHeight};
  color: ${getColor};
  background-color: ${getBackgroundColor};
  transform: ${getTransform};
  transition: ${getTransition};
`;

export default SnackbarStyled;
import styled from "styled-components";
import {px, transformY, transition} from "@utils/ThemeUtils";
import ThemeInterface from "@theme/interfaces/ThemeInterface";

interface T {
    theme: ThemeInterface,
    danger?: boolean,
    warning?: boolean,
    success?: boolean,
    unmount: boolean
}

function getColor(p: T) {
    return p.danger ? p.theme.color.white : (p.warning ? p.theme.color.dark : (p.success ? p.theme.color.white : p.theme.color.white));
}

function getBackgroundColor(p: T) {
    return p.danger ? p.theme.color.danger : (p.warning ? p.theme.color.warning : (p.success ? p.theme.color.success : p.theme.color.danger));
}

function getTransform(p: T) {
    return transformY(p.unmount, p.theme.dimension.snackbar.height);
}

function getTransition(p: T) {
    return transition({ms: p.theme.animation.snackbar});
}

function getPadding(p: T) {
    return `${px(p.theme.spacing.s0)} ${px(p.theme.spacing.s6)}`;
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
import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import {SnackbarMapping} from "@components/snackbar/Snackbar";
import {px} from "@utils/ThemeUtils";

type T = StyledProps & useMountChildStyledProps & SnackbarMapping;

const SnackbarStyled = styled.div`
  height: ${(p: T) => p.theme.dimension.d10};
  display: ${(p: T) => p.theme.display.flex};
  align-items: ${(p: T) => p.theme.alignItems.center};
  font-family: ${(p: T) => p.theme.fontFamily.primary};
  position: ${(p: T) => p.theme.position.fixed};
  box-sizing: ${(p: T) => p.theme.boxSizing.borderBox};
  bottom: ${(p: T) => px(p.theme.spacing.s0)};
  left: ${(p: T) => px(p.theme.spacing.s0)};
  width: ${(p: T) => p.theme.dimension.d100};
  padding: ${(p: T) => `${px(p.theme.spacing.s0)} ${px(p.theme.spacing.s6)}`};
  font-weight: ${(p: T) => p.theme.fontWeight.bold};
  box-shadow: ${(p: T) => p.theme.shadow.medium};
  color: ${(p: T) => (p: T) => p.danger ? p.theme.color.white : (p.warning ? p.theme.color.dark : (p.success ? p.theme.color.white : p.theme.color.white))};
  background-color: ${(p: T) => p.danger ? p.theme.color.danger : (p.warning ? p.theme.color.warning : (p.success ? p.theme.color.success : p.theme.color.danger))};
  transform: ${(p: T) => p.mount ? `translateX(0)` : `translateY(150%)`};
  transition: ${(p: T) => p.mount ? `transform ${p.entryDelay / 1000}s` : `transform ${p.exitDelay / 1000}s`};
`;

export default SnackbarStyled;
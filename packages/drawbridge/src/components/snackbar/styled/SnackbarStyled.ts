import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import {SnackbarMapping} from "@components/snackbar/Snackbar";

type T = StyledProps & useMountChildStyledProps & SnackbarMapping;

const SnackbarStyled = styled.div`
  height: ${(p: T) => p.theme.dimension.d10};
  display: ${(props: T) => props.theme.display.flex};
  align-items: ${(props: T) => props.theme.alignItems.center};
  font-family: ${(props: T) => props.theme.fontFamily.primary};
  position: ${(props: T) => props.theme.position.fixed};
  box-sizing: ${(props: T) => props.theme.boxSizing.borderBox};
  bottom: ${(props: T) => props.theme.spacing.s0};
  left: ${(props: T) => props.theme.spacing.s0};
  width: ${(props: T) => props.theme.dimension.d100};
  padding: ${(props: T) => `${props.theme.spacing.s0} ${props.theme.spacing.s6}`};
  font-weight: ${(props: T) => props.theme.fontWeight.bold};
  box-shadow: ${(props: T) => props.theme.shadow.medium};
  color: ${(props: T) => (p: T) => p.danger ? p.theme.color.white : (p.warning ? p.theme.color.dark : (p.success ? p.theme.color.white : p.theme.color.white))};
  background-color: ${(p: T) => p.danger ? p.theme.color.danger : (p.warning ? p.theme.color.warning : (p.success ? p.theme.color.success : p.theme.color.danger))};
  transform: ${(props: T) => props.mount ? `translateX(0)` : `translateY(150%)`};
  transition: ${(props: T) => props.mount ? `transform ${props.entryDelay / 1000}s` : `transform ${props.exitDelay / 1000}s`};
`;

export default SnackbarStyled;
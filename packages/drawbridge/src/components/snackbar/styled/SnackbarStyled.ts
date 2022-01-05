import styled from "styled-components";
import {StyledProps, useMountChildStyledProps} from "@typings";
import rules from "@rules";
import {SnackbarMapping} from "@components/snackbar/Snackbar";

export interface SnackbarStyledProps extends StyledProps, useMountChildStyledProps, SnackbarMapping {
}

const backgroundColor = (props: SnackbarStyledProps) => {
    if (props.danger) return props.theme.color.danger;
    if (props.warning) return props.theme.color.warning;
    if (props.success) return props.theme.color.success;

    return props.theme.color.success;
}

const color = (props: SnackbarStyledProps) => {
    if (props.danger) return props.theme.color.white;
    if (props.warning) return props.theme.color.dark;
    if (props.success) return props.theme.color.white;

    return props.theme.color.white;
}

const transform = (props: SnackbarStyledProps) => props.mount ? `translateX(0)` : `translateY(150%)`;
const transition = (props: SnackbarStyledProps) => props.mount ? `transform ${props.entryDelay / 1000}s` : `transform ${props.exitDelay / 1000}s`;

const SnackbarStyled = styled.div`
  height: 60px;
  display: ${rules.display.flex};
  align-items: ${rules.alignItems.center};
  position: ${rules.position.fixed};
  box-sizing: ${rules.boxSizing.borderBox};
  bottom: ${(props: SnackbarStyledProps) => props.theme.spacing.s0};
  left: ${(props: SnackbarStyledProps) => props.theme.spacing.s0};
  width: ${(props: SnackbarStyledProps) => props.theme.dimension.d100};
  padding: ${(props: SnackbarStyledProps) => `${props.theme.spacing.s0} ${props.theme.spacing.s6}`};
  font-weight: ${(props: SnackbarStyledProps) => props.theme.fontWeight.bold};
  box-shadow: ${(props: SnackbarStyledProps) => props.theme.shadow.medium};
  color: ${color};
  background-color: ${backgroundColor};
  transform: ${transform};
  transition: ${transition};
`;

export default SnackbarStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import SnackbarStyledGetters from "@components/snackbar/styled/snackbar/SnackbarStyledGetters";

export interface SnackbarStyledProps extends StyledProps {
    variation: SnackbarVariationEnum,
    unmounting?: boolean
}

const SnackbarStyled = styled.div`
  background-color: ${SnackbarStyledGetters.BackgroundColor};
  position: ${SnackbarStyledGetters.Position};
  bottom: ${SnackbarStyledGetters.Bottom};
  left: ${SnackbarStyledGetters.Left};
  width: ${SnackbarStyledGetters.Width};
  height: ${SnackbarStyledGetters.Height};
  display: ${SnackbarStyledGetters.Display};
  align-items: ${SnackbarStyledGetters.AlignItems};
  animation: ${SnackbarStyledGetters.Animation};
  animation-timing-function: ${SnackbarStyledGetters.AnimationTimingFunction};
  animation-fill-mode: ${SnackbarStyledGetters.AnimationFillMode};
  color: ${SnackbarStyledGetters.Color};
  padding: ${SnackbarStyledGetters.Padding};
  font-weight: ${SnackbarStyledGetters.FontWeight};
  box-sizing: ${SnackbarStyledGetters.BoxSizing};
  box-shadow: ${SnackbarStyledGetters.BoxShadow};
`;

export default SnackbarStyled;
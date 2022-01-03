import styled from "styled-components";
import {StyledProps} from "@typings";
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import SnackbarStyledGetters from "@components/snackbar/styled/snackbar/SnackbarStyledGetters";

export interface SnackbarStyledProps extends StyledProps {
    variation: SnackbarVariationEnum,
    mount?: boolean,
    delay?: number
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
  color: ${SnackbarStyledGetters.Color};
  padding: ${SnackbarStyledGetters.Padding};
  font-weight: ${SnackbarStyledGetters.FontWeight};
  box-sizing: ${SnackbarStyledGetters.BoxSizing};
  box-shadow: ${SnackbarStyledGetters.BoxShadow};
  transform: ${SnackbarStyledGetters.Transform};
  transition: ${SnackbarStyledGetters.Transition};
`;

export default SnackbarStyled;
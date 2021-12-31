import styled from "styled-components";
import {StyledProps} from "@typings";
import {Variation} from "@components/snackbar/Snackbar";
import {SnackbarBackgroundColor} from "@components/snackbar/styled/SnackbarStyledGetters";

export interface SnackbarStyledProps extends StyledProps {
    variation: Variation
}

const SnackbarStyled = styled.div`
  background-color: ${SnackbarBackgroundColor};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export default SnackbarStyled;
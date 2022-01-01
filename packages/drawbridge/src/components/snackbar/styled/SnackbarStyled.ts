import styled, {keyframes} from "styled-components";
import {StyledProps} from "@typings";
import {Variation} from "@components/snackbar/Snackbar";
import {SnackbarBackgroundColor, SnackbarColor} from "@components/snackbar/styled/SnackbarStyledGetters";

const show = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export interface SnackbarStyledProps extends StyledProps {
    variation: Variation
}

const SnackbarStyled = styled.div`
  background-color: ${SnackbarBackgroundColor};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  animation: ${show} .5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  color: ${SnackbarColor};
  padding: 0 1rem;
`;

export default SnackbarStyled;
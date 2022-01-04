import styled from "styled-components";
import {StyledProps} from "@typings";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import ButtonSizeEnum from "@components/button/enums/ButtonSizeEnum";
import ButtonStyledGetters from "@components/button/styled/ButtonStyledGetters";
import {HTMLAttributes} from "react";

export interface ButtonStyledProps extends StyledProps {
    variation?: ButtonVariationEnum,
    size?: ButtonSizeEnum,
    type?: HTMLAttributes<string>
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: ${ButtonStyledGetters.Padding};
  background-color: ${ButtonStyledGetters.BackgroundColor};
  color: ${ButtonStyledGetters.Color};
  border: ${ButtonStyledGetters.Border};
  border-radius: ${ButtonStyledGetters.BorderRadius};
  font-family: ${ButtonStyledGetters.FontFamily};
  box-shadow: ${ButtonStyledGetters.BoxShadow};
  font-size: ${ButtonStyledGetters.FontSize};
  font-weight: ${ButtonStyledGetters.FontWeight};
  width: ${ButtonStyledGetters.Width};
  height: ${ButtonStyledGetters.Height};
  letter-spacing: ${ButtonStyledGetters.LetterSpacing};
  cursor: ${ButtonStyledGetters.Cursor};
  transition: ${ButtonStyledGetters.Transition};

  &:hover {
    box-shadow: ${ButtonStyledGetters.HoveredShadow};
  }

  &:focus {
    filter: ${ButtonStyledGetters.FocusedFocusFilter};
  }

  &:active {
    filter: ${ButtonStyledGetters.ActiveFocusFilter};
  }

  &:visited {
    filter: ${ButtonStyledGetters.VisitedFocusFilter};
  }
`;

export default ButtonStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import VariationEnum from "@components/button/enums/VariationEnum";
import SizeEnum from "@components/button/enums/SizeEnum";
import {
    ButtonBackgroundColor,
    ButtonPadding,
    ButtonColor,
    ButtonBorder,
    ButtonBorderRadius,
    ButtonFontFamily,
    ButtonBoxShadow,
    ButtonFontSize,
    ButtonFontWeight,
    ButtonWidth,
    ButtonHeight,
    ButtonLetterSpacing,
    ButtonCursor,
    ButtonHoveredShadow,
    ButtonFocusedFocusFilter,
    ButtonActiveFocusFilter,
    ButtonVisitedFocusFilter
} from "@components/button/styled/ButtonStyledGetters";

export interface ButtonStyledProps extends StyledProps {
    variation?: VariationEnum,
    size?: SizeEnum
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: ${ButtonPadding};
  background-color: ${ButtonBackgroundColor};
  color: ${ButtonColor};
  border: ${ButtonBorder};
  border-radius: ${ButtonBorderRadius};
  font-family: ${ButtonFontFamily};
  box-shadow: ${ButtonBoxShadow};
  font-size: ${ButtonFontSize};
  font-weight: ${ButtonFontWeight};
  width: ${ButtonWidth};
  height: ${ButtonHeight};
  letter-spacing: ${ButtonLetterSpacing};
  cursor: ${ButtonCursor};

  &:hover {
    box-shadow: ${ButtonHoveredShadow};
  }

  &:focus {
    filter: ${ButtonFocusedFocusFilter};
  }

  &:active {
    filter: ${ButtonActiveFocusFilter};
  }

  &:visited {
    filter: ${ButtonVisitedFocusFilter};
  }
`;

export default ButtonStyled;
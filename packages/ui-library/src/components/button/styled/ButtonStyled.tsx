import styled from "styled-components";
import VariationEnum from "@components/button/enums/VariationEnum";
import SizeEnum from "@components/button/enums/SizeEnum";
import {ButtonBackgroundColor, ButtonPadding, ButtonColor} from "@components/button/styled/ButtonStyledUtils";
import {StyledProps} from "@typings";

export interface ButtonStyledProps extends StyledProps {
    variation?: VariationEnum,
    size?: SizeEnum
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  padding: ${ButtonPadding};
  background-color: ${ButtonBackgroundColor};
  color: ${ButtonColor};
  border-radius: ${(props: ButtonStyledProps) => props.theme.border.radius.primary};
  font-family: ${(props: ButtonStyledProps) => props.theme.font.family.primary};
  box-shadow: ${(props: ButtonStyledProps) => props.theme.shadow.primary};
  font-size: ${(props: ButtonStyledProps) => props.theme.font.size.md};
  font-weight: ${(props: ButtonStyledProps) => props.theme.font.weight.bold};
  width: ${(props: ButtonStyledProps) => props.theme.dimension.d100};
  height: ${(props: ButtonStyledProps) => props.theme.dimension.d100};
  letter-spacing: ${(props: ButtonStyledProps) => props.theme.font.letterSpacing.small};
  cursor: pointer;
  border: none;

  &:hover {
    box-shadow: ${(props: ButtonStyledProps) => props.theme.shadow.secondary};
  }

  &:focus {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(85%);
  }

  &:visited {
    filter: brightness(110%);
  }
`;

export default ButtonStyled;
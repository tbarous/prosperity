import styled from "styled-components";
import Theme from "@theme/interfaces";
import VariationEnum from "@components/button/enums/VariationEnum";
import SizeEnum from "@components/button/enums/SizeEnum";
import {applySize} from "@components/button/utils/SizeUtils";
import {applyVariation} from "@components/button/utils/VariationUtils";

interface Props {
    theme: Theme,
    variation: VariationEnum,
    size: SizeEnum
}

const ButtonStyled = styled.button<Props>`
  ${(props: Props) => applySize(props.size, props.theme)}
  ${(props: Props) => applyVariation(props.variation, props.theme)}
  border-radius: ${(props: Props) => props.theme.border.radius.primary};
  font-family: ${(props: Props) => props.theme.font.family.primary};
  box-shadow: ${(props: Props) => props.theme.shadow.primary};
  
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  color: white;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    box-shadow: ${(props: Props) => props.theme.shadow.secondary};
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
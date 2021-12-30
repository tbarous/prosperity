import styled from "styled-components";
import Theme from "@theme/interfaces";
import Variation from "@components/button/enums/Variation";
import Size from "@components/button/enums/Size";
import {sizeMapping} from "@components/button/utils/Size";
import {variationMapping} from "@components/button/utils/Variation";

interface Props {
    theme: Theme,
    variation: Variation,
    size: Size
}

const ButtonWrapper = styled.button<Props>`
  ${(props: Props) => sizeMapping(props.size, props.theme)}
  ${(props: Props) => variationMapping(props.variation, props.theme)}

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

export default ButtonWrapper;
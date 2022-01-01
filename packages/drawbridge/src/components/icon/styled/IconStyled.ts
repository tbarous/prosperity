import styled from "styled-components";
import {StyledProps} from "@typings";
import {IconHeight, IconSvgHeight, IconSvgWidth, IconWidth} from "@components/icon/styled/IconStyledGetters";

export interface IconStyledProps extends StyledProps {
    width: number,
    height: number
}

const IconStyled = styled.div<IconStyledProps>`
  width: ${IconWidth};
  height: ${IconHeight};

  svg {
    width: ${IconSvgWidth};
    height: ${IconSvgHeight};
  }
`;

export default IconStyled;
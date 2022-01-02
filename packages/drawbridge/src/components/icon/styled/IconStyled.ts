import styled from "styled-components";
import {StyledProps} from "@typings";
import IconStyledGetters from "@components/icon/styled/IconStyledGetters";

export interface IconStyledProps extends StyledProps {
    width: number,
    height: number,
    color?: string
}

const IconStyled = styled.div<IconStyledProps>`
  width: ${IconStyledGetters.Width};
  height: ${IconStyledGetters.Height};
  color: ${IconStyledGetters.Color};

  svg {
    width: ${IconStyledGetters.SvgWidth};
    height: ${IconStyledGetters.SvgHeight};
  }
`;

export default IconStyled;
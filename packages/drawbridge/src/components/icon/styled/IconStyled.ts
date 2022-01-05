import styled from "styled-components";
import {StyledProps} from "@typings";

export interface IconStyledProps extends StyledProps {
    width: number,
    height: number,
    color?: string
}

const IconStyled = styled.div<IconStyledProps>`
  width: ${(props: IconStyledProps) => `${props.width}px`};
  height: ${(props: IconStyledProps) => `${props.height}px`};
  color: ${(props: IconStyledProps) => props.color || props.theme.color.dark};

  svg {
    width: ${(props: IconStyledProps) => props.theme.dimension.d100};
    height: ${(props: IconStyledProps) => props.theme.dimension.d100};
  }
`;

export default IconStyled;
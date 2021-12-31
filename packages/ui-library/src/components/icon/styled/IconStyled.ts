import styled from "styled-components";
import {StyledProps} from "@typings";

interface Props extends StyledProps {
    width: number,
    height: number
}

const IconStyled = styled.div<Props>`
  width: ${(props: Props) => `${props.width}px`};
  height: ${(props: Props) => `${props.height}px`};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default IconStyled;
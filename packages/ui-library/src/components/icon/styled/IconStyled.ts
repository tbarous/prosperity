import styled from "styled-components";
import Theme from "@theme/interfaces";

interface Props {
    theme: Theme,
    width: number,
    height: number
}

const IconStyled = styled.div`
  width: ${(props: Props) => `${props.width}px`};
  height: ${(props: Props) => `${props.height}px`};

  svg {
    width: 100%;
    height: 100%;
  }
`;

export default IconStyled;
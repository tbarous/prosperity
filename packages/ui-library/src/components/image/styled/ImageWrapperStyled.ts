import styled from "styled-components";

interface Props {
    width?: number,
    height?: number
}

const ImageWrapperStyled = styled.div<Props>`
  width: ${(props: Props) => props.width ? `${props.width}px` : `100%`};
  height: ${(props: Props) => props.height ? `${props.height}px` : `100%`};
`;

export default ImageWrapperStyled;
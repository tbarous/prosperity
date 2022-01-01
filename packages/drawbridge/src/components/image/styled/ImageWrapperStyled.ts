import styled from "styled-components";
import {StyledProps} from "@typings";
import {ImageWrapperHeight, ImageWrapperWidth} from "@components/image/styled/ImageWrapperStyledGetters";

export interface ImageWrapperStyledProps extends StyledProps {
    width?: number,
    height?: number
}

const ImageWrapperStyled = styled.div<ImageWrapperStyledProps>`
  width: ${ImageWrapperWidth};
  height: ${ImageWrapperHeight};
`;

export default ImageWrapperStyled;
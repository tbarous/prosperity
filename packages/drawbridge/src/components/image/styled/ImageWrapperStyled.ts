import styled from "styled-components";
import {StyledProps} from "@typings";
import ImageWrapperStyledGetters from "@components/image/styled/ImageWrapperStyledGetters";

export interface ImageWrapperStyledProps extends StyledProps {
    width?: number,
    height?: number
}

const ImageWrapperStyled = styled.div<ImageWrapperStyledProps>`
  width: ${ImageWrapperStyledGetters.Width};
  height: ${ImageWrapperStyledGetters.Height};
  display: ${ImageWrapperStyledGetters.Display};
`;

export default ImageWrapperStyled;
import styled from "styled-components";
import {StyledProps} from "@typings";
import {ImageHeight, ImageObjectFit, ImageWidth} from "@components/image/styled/ImageStyledGetters";

export interface ImageStyledProps extends StyledProps {

}

const ImageStyled = styled.img<ImageStyledProps>`
  width: ${ImageWidth};
  height: ${ImageHeight};
  object-fit: ${ImageObjectFit};
`;

export default ImageStyled;
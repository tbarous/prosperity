import styled from "styled-components";
import {StyledProps} from "@typings";
import ImageStyledGetters from "@components/image/styled/image/ImageStyledGetters";

export interface ImageStyledProps extends StyledProps {
    rounded?: boolean,
    roundedTop?: boolean,
    roundedBottom?: boolean
}

const ImageStyled = styled.img<ImageStyledProps>`
  width: ${ImageStyledGetters.Width};
  height: ${ImageStyledGetters.Height};
  object-fit: ${ImageStyledGetters.ObjectFit};
  border-top-left-radius: ${ImageStyledGetters.BorderRadiusTopLeft};
  border-top-right-radius: ${ImageStyledGetters.BorderRadiusTopRight};
  border-bottom-left-radius: ${ImageStyledGetters.BorderRadiusBottomLeft};
  border-bottom-right-radius: ${ImageStyledGetters.BorderRadiusBottomRight};
`;

export default ImageStyled;
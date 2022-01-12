import styled from "styled-components";
import {StyledProps} from "@typings";
import {ImageUIProps} from "@atoms/image/Image";

interface ImageStyledProps extends StyledProps, ImageUIProps {}

type T = ImageStyledProps;

function getBorderRadiusTop(p: T) {
    if(p.circle){
        return p.theme.borderRadius.circle;
    }

    return p.roundedTop || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none;
}

function getBorderRadiusBottom(p: T) {
    if(p.circle){
        return p.theme.borderRadius.circle;
    }

    return p.roundedBottom || p.rounded ? p.theme.borderRadius.medium : p.theme.borderRadius.none;
}

const ImageStyled = styled.img<T>`
  object-fit: ${(p: T) => p.theme.objectFit.cover};
  width: ${(p: T) => p.theme.dimension.d100};
  height: ${(p: T) => p.theme.dimension.d100};
  border-top-left-radius: ${getBorderRadiusTop};
  border-top-right-radius: ${getBorderRadiusTop};
  border-bottom-left-radius: ${getBorderRadiusBottom};
  border-bottom-right-radius: ${getBorderRadiusBottom};
`;

export default ImageStyled;
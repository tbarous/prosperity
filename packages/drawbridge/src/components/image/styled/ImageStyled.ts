import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ImageStyledProps extends StyledProps {
    rounded?: boolean,
    roundedTop?: boolean,
    roundedBottom?: boolean
}

const ImageStyled = styled.img<ImageStyledProps>`
  object-fit: ${rules.objectFit.cover};
  width: ${(props: ImageStyledProps) => props.theme.dimension.d100};
  height: ${(props: ImageStyledProps) => props.theme.dimension.d100};
  border-top-left-radius: ${(props: ImageStyledProps) => props.roundedTop || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none};
  border-top-right-radius: ${(props: ImageStyledProps) => props.roundedTop || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none};
  border-bottom-left-radius: ${(props: ImageStyledProps) => props.roundedBottom || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none};
  border-bottom-right-radius: ${(props: ImageStyledProps) => props.roundedBottom || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none};
`;

export default ImageStyled;
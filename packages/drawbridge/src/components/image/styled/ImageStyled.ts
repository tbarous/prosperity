import styled from "styled-components";
import {StyledProps} from "@typings";
import rules from "@rules";

export interface ImageStyledProps extends StyledProps {
    rounded?: boolean,
    roundedTop?: boolean,
    roundedBottom?: boolean
}

const borderTop = (props: ImageStyledProps) => props.roundedTop || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none
const borderBottom = (props: ImageStyledProps) => props.roundedBottom || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none;

const ImageStyled = styled.img<ImageStyledProps>`
  object-fit: ${rules.objectFit.cover};
  width: ${(props: ImageStyledProps) => props.theme.dimension.d100};
  height: ${(props: ImageStyledProps) => props.theme.dimension.d100};
  border-top-left-radius: ${borderTop};
  border-top-right-radius: ${borderTop};
  border-bottom-left-radius: ${borderBottom};
  border-bottom-right-radius: ${borderBottom};
`;

export default ImageStyled;
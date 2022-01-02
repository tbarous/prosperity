import {ImageStyledProps} from "@components/image/styled/image/ImageStyled";

const ImageStyledGetters = {
    Width: (props: ImageStyledProps) => props.theme.dimension.d100,
    Height: (props: ImageStyledProps) => props.theme.dimension.d100,
    ObjectFit: (props: ImageStyledProps) => props.theme.objectFit.cover,
    BorderRadiusTopLeft: (props: ImageStyledProps) => props.roundedTop || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none,
    BorderRadiusTopRight: (props: ImageStyledProps) => props.roundedTop || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none,
    BorderRadiusBottomLeft: (props: ImageStyledProps) => props.roundedBottom || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none,
    BorderRadiusBottomRight: (props: ImageStyledProps) => props.roundedBottom || props.rounded ? props.theme.borderRadius.medium : props.theme.borderRadius.none,
}

export default ImageStyledGetters;
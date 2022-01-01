import {ImageStyledProps} from "@components/image/styled/ImageStyled";

export const ImageWidth = (props: ImageStyledProps) => props.theme.dimension.d100;
export const ImageHeight = (props: ImageStyledProps) => props.theme.dimension.d100;
export const ImageObjectFit = (props: ImageStyledProps) => props.theme.objectFit.contain;
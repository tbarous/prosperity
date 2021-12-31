import {ImageWrapperStyledProps} from "@components/image/styled/ImageWrapperStyled";

export const ImageWrapperWidth = (props: ImageWrapperStyledProps) => props.width ? `${props.width}px` : `100%`;
export const ImageWrapperHeight = (props: ImageWrapperStyledProps) => props.height ? `${props.height}px` : `100%`;
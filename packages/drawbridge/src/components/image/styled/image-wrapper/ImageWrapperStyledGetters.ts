import {ImageWrapperStyledProps} from "@components/image/styled/image-wrapper/ImageWrapperStyled";

const ImageWrapperStyledGetters = {
    Width: (props: ImageWrapperStyledProps) => props.width ? `${props.width}px` : `100%`,
    Height: (props: ImageWrapperStyledProps) => props.height ? `${props.height}px` : `100%`,
    Display: (props: ImageWrapperStyledProps) => props.theme.display.flex
}

export default ImageWrapperStyledGetters;
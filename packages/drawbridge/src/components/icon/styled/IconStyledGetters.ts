import {IconStyledProps} from "@components/icon/styled/IconStyled";

const IconStyledGetters = {
    Width: (props: IconStyledProps) => `${props.width}px`,
    Height: (props: IconStyledProps) => `${props.height}px`,
    SvgWidth: (props: IconStyledProps) => props.theme.dimension.d100,
    SvgHeight: (props: IconStyledProps) => props.theme.dimension.d100,
    Color: (props: IconStyledProps) => props.color || props.theme.color.dark,
}

export default IconStyledGetters;
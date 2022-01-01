import {InputStyledProps} from "@components/form/styled/InputStyled";

const InputStyledGetters = {
    Border: (props: InputStyledProps) => props.theme.border.none,
    Height: (props: InputStyledProps) => props.theme.dimension.d100,
    Width: (props: InputStyledProps) => props.theme.dimension.d100,
    Padding: (props: InputStyledProps) => props.theme.spacing.s0,
    Margin: (props: InputStyledProps) => props.theme.spacing.s0,
    FontSize: (props: InputStyledProps) => props.theme.fontSize.md,
    BorderRadius: (props: InputStyledProps) => props.theme.borderRadius.medium,
    FontFamily: (props: InputStyledProps) => props.theme.fontFamily.primary
}

export default InputStyledGetters;
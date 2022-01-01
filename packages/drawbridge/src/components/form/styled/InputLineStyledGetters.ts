import {InputLineStyledProps} from "@components/form/styled/InputLineStyled";

const InputLineStyledGetters = {
    Position: (props: InputLineStyledProps) => props.theme.position.absolute,
    BackgroundColor: (props: InputLineStyledProps) => props.theme.color.primary,
    Bottom: (props: InputLineStyledProps) => "-1px",
    Left: (props: InputLineStyledProps) => props.theme.spacing.s0,
    Width: (props: InputLineStyledProps) => props.theme.dimension.d100,
    Height: (props: InputLineStyledProps) => "2px",

    Transform: (props: InputLineStyledProps) => props.focused ? "scale(1)" : "scale(0)"
}

export default InputLineStyledGetters;
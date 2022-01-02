import {InputLineStyledProps} from "@components/form/styled/input-line/InputLineStyled";

const InputLineStyledGetters = {
    Position: (props: InputLineStyledProps) => props.theme.position.absolute,
    BackgroundColor: (props: InputLineStyledProps) => props.theme.color.primary,
    Left: (props: InputLineStyledProps) => props.theme.spacing.s0,
    Width: (props: InputLineStyledProps) => props.theme.dimension.d100,
    Transform: (props: InputLineStyledProps) => props.focused ? "scale(1)" : "scale(0)",
    Height: (props: InputLineStyledProps) => "2px",
    Bottom: (props: InputLineStyledProps) => "-1px",
    Transition: (props: InputLineStyledProps) => "transform .5s;"
}

export default InputLineStyledGetters;
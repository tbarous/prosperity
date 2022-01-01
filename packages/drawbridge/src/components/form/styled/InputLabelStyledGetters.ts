import {InputLabelStyledProps} from "@components/form/styled/InputLabelStyled";

const InputLabelStyledGetters = {
    Position: (props: InputLabelStyledProps) => props.theme.position.absolute,
    FontSize: (props: InputLabelStyledProps) => props.focused || props.hasValue ? props.theme.fontSize.xs : props.theme.fontSize.md,
    Color: (props: InputLabelStyledProps) => props.focused ? props.theme.color.primary : props.theme.color.light,
    FontWeight: (props: InputLabelStyledProps) => props.theme.fontWeight.bold,
    PointerEvents:(props: InputLabelStyledProps) => "none",
    Transform: (props: InputLabelStyledProps) => props.focused || props.hasValue ? "translateY(-20px)" : "",
    Transition: (props: InputLabelStyledProps) => "transform .2s linear",
}

export default InputLabelStyledGetters;
import {InputLabelStyledProps} from "@components/form/styled/InputLabelStyled";

const InputLabelStyledGetters = {
    Position: (props: InputLabelStyledProps) => props.theme.position.absolute,
    FontSize: (props: InputLabelStyledProps) => props.focused || props.hasValue ? props.theme.fontSize.xs : props.theme.fontSize.md,
    Color: (props: InputLabelStyledProps) => props.focused ? props.theme.color.primary : props.theme.color.light,
    FontWeight: (props: InputLabelStyledProps) => props.theme.fontWeight.bold,
}

export default InputLabelStyledGetters;
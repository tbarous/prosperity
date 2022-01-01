import {InputStyledProps} from "@components/form/styled/InputStyled";

const InputStyledGetters = {
    border: (props: InputStyledProps) => props.theme.border.none,
    height: (props: InputStyledProps) => props.theme.dimension.d100,
    width: (props: InputStyledProps) => props.theme.dimension.d100,
    padding: (props: InputStyledProps) => props.theme.spacing.s0,
    margin: (props: InputStyledProps) => props.theme.spacing.s0,
    fontSize: (props: InputStyledProps) => props.theme.fontSize.md,
}

export default InputStyledGetters;
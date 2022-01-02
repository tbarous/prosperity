import {InputWrapperStyledProps} from "@components/form/styled/input-wrapper/InputWrapperStyled";

const InputWrapperStyledGetters = {
    Height: (props: InputWrapperStyledProps) => props.theme.spacing.s10,
    Display: (props: InputWrapperStyledProps) => props.theme.display.flex,
    AlignItems: (props: InputWrapperStyledProps) => props.theme.alignItems.center,
    Position: (props: InputWrapperStyledProps) => props.theme.position.relative,
    BorderBottom: (props: InputWrapperStyledProps) => props.theme.border.light,
    BorderColor: (props: InputWrapperStyledProps) => props.theme.color.light,
}

export default InputWrapperStyledGetters;
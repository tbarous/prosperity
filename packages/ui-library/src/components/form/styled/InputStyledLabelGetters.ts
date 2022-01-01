import {InputStyledLabelProps} from "@components/form/styled/InputStyledLabel";

const InputStyledLabelGetters = {
    position: (props: InputStyledLabelProps) => props.theme.position.absolute,
    left: (props: InputStyledLabelProps) => props.theme.spacing.s6,
    fontSize: (props: InputStyledLabelProps) => props.theme.fontSize.sm,
    color: (props: InputStyledLabelProps) => props.theme.color.primary,
    fontWeight: (props: InputStyledLabelProps) => props.theme.fontWeight.bold,
}

export default InputStyledLabelGetters;
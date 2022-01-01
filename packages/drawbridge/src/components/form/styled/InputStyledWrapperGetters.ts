import {InputStyledWrapperProps} from "@components/form/styled/InputStyledWrapper";

const InputStyledWrapperGetters = {
    border: (props: InputStyledWrapperProps) => props.theme.border.light,
    height: (props: InputStyledWrapperProps) => props.theme.dimension.inputHeight,
    display: (props: InputStyledWrapperProps) => props.theme.display.flex,
    alignItems: (props: InputStyledWrapperProps) => props.theme.alignItems.center,
    position: (props: InputStyledWrapperProps) => props.theme.position.relative
}

export default InputStyledWrapperGetters;
import {CheckboxInputStyledProps} from "@components/form/styled/checkbox-input/CheckboxInputStyled";

const CheckboxInputStyledGetters = {
    Position: (props: CheckboxInputStyledProps) => props.theme.position.absolute,
    Opacity: (props: CheckboxInputStyledProps) => "0",
    Cursor: (props: CheckboxInputStyledProps) => props.theme.cursor.pointer,
    Height: (props: CheckboxInputStyledProps) => props.theme.dimension.d0,
    Width: (props: CheckboxInputStyledProps) => props.theme.dimension.d0,
}

export default CheckboxInputStyledGetters;
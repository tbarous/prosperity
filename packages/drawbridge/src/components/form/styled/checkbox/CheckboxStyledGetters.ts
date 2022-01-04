import {CheckboxStyledProps} from "@components/form/styled/checkbox/CheckboxStyled";

const CheckboxStyledGetters = {
    Display: (props: CheckboxStyledProps) => props.theme.display.block,
    Position: (props: CheckboxStyledProps) => props.theme.position.relative,
    PaddingLeft: (props: CheckboxStyledProps) => "35px",
    MarginBottom: (props: CheckboxStyledProps) => "12px",
    Cursor: (props: CheckboxStyledProps) => props.theme.cursor.pointer,
    FontSize: (props: CheckboxStyledProps) => "22px",
    UserSelect: (props: CheckboxStyledProps) => "none",
    BorderRadius: (props: CheckboxStyledProps) => "8px",
}

export default CheckboxStyledGetters;
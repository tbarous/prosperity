import {CheckboxCheckmarkStyledProps} from "@components/form/styled/checkbox-checkmark/CheckboxCheckmarkStyled";

const CheckboxCheckmarkStyledGetters = {
    Position: (props: CheckboxCheckmarkStyledProps) => props.theme.position.absolute,
    Top: (props: CheckboxCheckmarkStyledProps) => props.theme.spacing.s0,
    Left: (props: CheckboxCheckmarkStyledProps) => props.theme.spacing.s0,
    Height: (props: CheckboxCheckmarkStyledProps) => "25px",
    Width: (props: CheckboxCheckmarkStyledProps) => "25px",
    BorderRadius: (props: CheckboxCheckmarkStyledProps) => props.theme.borderRadius.medium,
    BackgroundColor: (props: CheckboxCheckmarkStyledProps) => props.checked ? props.theme.color.primary : "none",

    After: {
        Content: (props: CheckboxCheckmarkStyledProps) => "",
        Position: (props: CheckboxCheckmarkStyledProps) => props.theme.position.absolute,
        Left: (props: CheckboxCheckmarkStyledProps) => "9px",
        Top: (props: CheckboxCheckmarkStyledProps) => "5px",
        Width: (props: CheckboxCheckmarkStyledProps) => "5px",
        Height: (props: CheckboxCheckmarkStyledProps) => "10px",
        Border: (props: CheckboxCheckmarkStyledProps) => "solid white",
        BorderWidth: (props: CheckboxCheckmarkStyledProps) => "0 3px 3px 0",
        Transform: (props: CheckboxCheckmarkStyledProps) => "rotate(45deg)",
        Display: (props: CheckboxCheckmarkStyledProps) => props.checked ? "block" : "none",
    }
}

export default CheckboxCheckmarkStyledGetters;
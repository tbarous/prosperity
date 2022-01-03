import {RowStyledProps} from "@components/grid/styled/row/RowStyled";

const RowStyledGetters = {
    MarginLeft: (props: RowStyledProps) => `-${!props.gutter ? 15 : (props.gutter * .5) + 15}px`,
    MarginRight: (props: RowStyledProps) => `-${!props.gutter ? 15 : (props.gutter * .5) + 15}px`,
    Height: (props: RowStyledProps) => "auto",
    BoxSizing: (props: RowStyledProps) => props.theme.boxSizing.borderBox,
    Display: (props: RowStyledProps) => props.theme.display.flex,
    FlexWrap: (props: RowStyledProps) => props.theme.flexWrap.wrap,
}

export default RowStyledGetters;
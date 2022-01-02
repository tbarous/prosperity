import {ColStyledProps} from "@components/grid/styled/col/ColStyled";

const ColStyledGetters = {
    Width: (columns?: number) => columns ? `${(100 / 12) * columns}%` : "",
    MaxWidth: (columns?: number) => columns ? `${(100 / 12) * columns}%` : "",
    Display: (props: ColStyledProps) => props.theme.display.block,
    BoxSizing: (props: ColStyledProps) => props.theme.boxSizing.borderBox,
    PaddingLeft: (props: ColStyledProps) => props.gutter ? `${props.gutter / 2}px` : "",
    PaddingRight: (props: ColStyledProps) => props.gutter ? `${props.gutter / 2}px` : "",
    Position: (props: ColStyledProps) => props.theme.position.relative,
    FlexGrow: (props: ColStyledProps) => props.theme.flexGrow.fg1,
}

export default ColStyledGetters;
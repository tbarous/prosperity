import {RowStyledProps} from "@components/grid/styled/RowStyled";

export const RowMarginLeft = (props: RowStyledProps) => `-${!props.gutter ? 15 : (props.gutter * .5) + 15}px`;
export const RowMarginRight = (props: RowStyledProps) => `-${!props.gutter ? 15 : (props.gutter * .5) + 15}px`;
export const RowHeight = (props: RowStyledProps) => props.theme.dimension.d100;
export const RowBoxSizing = (props: RowStyledProps) => props.theme.boxSizing.borderBox;
export const RowDisplay = (props: RowStyledProps) => props.theme.display.flex;
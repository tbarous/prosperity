import {ColStyledProps} from "@components/grid/styled/ColStyled";

export const GetWidth = (columns?: number) => columns ? `${(100 / 12) * columns}%` : "";

export const ColDisplay = (props: ColStyledProps) => props.theme.display.block;
export const ColBoxSizing = (props: ColStyledProps) => props.theme.boxSizing.borderBox;
export const ColPaddingLeft = (props: ColStyledProps) => props.gutter ? `${props.gutter / 2}px` : "";
export const ColPaddingRight = (props: ColStyledProps) => props.gutter ? `${props.gutter / 2}px` : "";
export const ColPosition = (props: ColStyledProps) => props.theme.position.relative;



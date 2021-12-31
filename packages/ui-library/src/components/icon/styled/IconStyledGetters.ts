import {IconStyledProps} from "@components/icon/styled/IconStyled";

export const IconWidth = (props: IconStyledProps) => `${props.width}px`;
export const IconHeight = (props: IconStyledProps) => `${props.height}px`;
export const IconSvgWidth = (props: IconStyledProps) => props.theme.dimension.d100;
export const IconSvgHeight = (props: IconStyledProps) => props.theme.dimension.d100;
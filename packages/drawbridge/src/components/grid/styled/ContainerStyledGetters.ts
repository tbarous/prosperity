import {ContainerStyledProps} from "@components/grid/styled/ContainerStyled";

// Helpers
export const GetMaxWidth = (props: ContainerStyledProps, width: string) => !props.fluid ? width : "";
export const GetMargin = (props: ContainerStyledProps) => !props.fluid ? props.theme.spacing.auto : "";

// Styles
export const ContainerWidth = (props: ContainerStyledProps) => props.theme.dimension.d100;
export const ContainerHeight = (props: ContainerStyledProps) => props.theme.dimension.d100;
export const ContainerBoxSizing = (props: ContainerStyledProps) => props.theme.boxSizing.borderBox;
export const ContainerPaddingLeft = (props: ContainerStyledProps) => "15px";
export const ContainerPaddingRight = (props: ContainerStyledProps) => "15px";
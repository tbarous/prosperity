import {ContainerStyledProps} from "@components/grid/styled/ContainerStyled";

export const GetMaxWidth = (props: ContainerStyledProps, width: string) => !props.fluid ? width : "";
export const GetMargin = (props: ContainerStyledProps) => !props.fluid ? props.theme.spacing.auto : "";

export const ContainerWidth = (props: ContainerStyledProps) => props.theme.dimension.d100;
export const ContainerHeight = (props: ContainerStyledProps) => props.theme.dimension.d100;
export const ContainerBoxSizing = (props: ContainerStyledProps) => props.theme.boxSizing.borderBox;

// const calculateContainerPadding = (gutter?: number) => {
//     if (!gutter) return `
//         padding-left: 15px;
//         padding-right: 15px;
//     `;
//     const calc = gutter * .75;
//     return `
//         padding-left: ${calc}px;
//         padding-right: ${calc}px;
//     `;
// }
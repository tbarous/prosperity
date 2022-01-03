import {ContainerStyledProps} from "@components/grid/styled/container/ContainerStyled";

const ContainerStyledGetters = {
    MaxWidth: (props: ContainerStyledProps, width: string) => !props.fluid ? width : "",
    Margin: (props: ContainerStyledProps) => !props.fluid ? props.theme.spacing.auto : "",
    Width: (props: ContainerStyledProps) => props.theme.dimension.d100,
    Height: (props: ContainerStyledProps) => "auto",
    BoxSizing: (props: ContainerStyledProps) => props.theme.boxSizing.borderBox,
    PaddingLeft: (props: ContainerStyledProps) => "15px",
    PaddingRight: (props: ContainerStyledProps) => "15px",
}

export default ContainerStyledGetters;
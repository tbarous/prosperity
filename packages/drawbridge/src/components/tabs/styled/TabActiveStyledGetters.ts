import {TabActiveStyledProps} from "@components/tabs/styled/TabActiveStyled";

const TabActiveStyledGetters = {
    Height: (props: TabActiveStyledProps) => props.theme.dimension.d10,
    BackgroundColor: (props: TabActiveStyledProps) => props.theme.color.secondary,
    Position: (props: TabActiveStyledProps) => props.theme.position.absolute,
    Bottom: (props: TabActiveStyledProps) => props.theme.spacing.s0,
    Left: (props: TabActiveStyledProps) => props.theme.spacing.s0,
    Width: (props: TabActiveStyledProps) => props.theme.dimension.d100,
}

export default TabActiveStyledGetters;
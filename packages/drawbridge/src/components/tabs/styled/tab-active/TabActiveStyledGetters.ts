import {TabActiveStyledProps} from "@components/tabs/styled/tab-active/TabActiveStyled";

const TabActiveStyledGetters = {
    Height: (props: TabActiveStyledProps) => props.theme.dimension.d10,
    BackgroundColor: (props: TabActiveStyledProps) => props.theme.color.secondary,
    Position: (props: TabActiveStyledProps) => props.theme.position.absolute,
    Bottom: (props: TabActiveStyledProps) => props.theme.spacing.s0,
    Width: (props: TabActiveStyledProps) => `${props.width}%`,
    Transform: (props: TabActiveStyledProps) => `translateX(${props.left}%)`,
    Transition: (props: TabActiveStyledProps) => `transform .8s`
}

export default TabActiveStyledGetters;
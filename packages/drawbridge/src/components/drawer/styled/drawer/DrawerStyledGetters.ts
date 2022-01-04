import {DrawerStyledProps} from "@components/drawer/styled/drawer/DrawerStyled";

const DrawerStyledGetters = {
    Position: (props: DrawerStyledProps) => props.overlay ? props.theme.position.fixed : props.theme.position.relative,
    Height: (props: DrawerStyledProps) => props.theme.dimension.d100,
    BackgroundColor: (props: DrawerStyledProps) => props.theme.color.dark,
    Width: (props: DrawerStyledProps) => "15%",
    Display: (props: DrawerStyledProps) => props.theme.display.flex,
    Transform: (props: DrawerStyledProps) => props.mount ? `translateX(0)` : `translateX(-120%)`,
    Transition: (props: DrawerStyledProps) => props.mount ? `transform ${props.entryDelay / 1000}s` : `transform ${props.exitDelay / 1000}s`,
}

export default DrawerStyledGetters;
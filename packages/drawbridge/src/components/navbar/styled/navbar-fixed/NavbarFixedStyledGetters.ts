import {NavbarFixedStyledProps} from "@components/navbar/styled/navbar-fixed/NavbarFixedStyled";

const NavbarFixedStyledGetters = {
    Width: (props: NavbarFixedStyledProps) => props.theme.dimension.d100,
    BackgroundColor: (props: NavbarFixedStyledProps) => props.theme.color.white,
    Display: (props: NavbarFixedStyledProps) => props.theme.display.flex,
    BoxShadow: (props: NavbarFixedStyledProps) => props.theme.shadow.light,
    AlignItems: (props: NavbarFixedStyledProps) => props.theme.alignItems.center,
    Position: (props: NavbarFixedStyledProps) => props.theme.position.fixed,
    Transform: (props: NavbarFixedStyledProps) => props.mount ? `translateY(0)` : `translateY(-100%)`,
    Transition: (props: NavbarFixedStyledProps) => `transform ${props.mount ? `${props.entryDelay / 1000}s` : `${props.exitDelay / 1000}s`}`,
    Top: (props: NavbarFixedStyledProps) => "0",
    Height: (props: NavbarFixedStyledProps) => "60px",
    ZIndex: (props: NavbarFixedStyledProps) => "11",
}

export default NavbarFixedStyledGetters;
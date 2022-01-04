import {NavbarStaticStyledProps} from "@components/navbar/styled/navbar-static/NavbarStaticStyled";

const NavbarStaticStyledGetters = {
    Width: (props: NavbarStaticStyledProps) => props.theme.dimension.d100,
    BackgroundColor: (props: NavbarStaticStyledProps) => props.theme.color.white,
    Display: (props: NavbarStaticStyledProps) => props.theme.display.flex,
    BoxShadow: (props: NavbarStaticStyledProps) => props.theme.shadow.primary,
    AlignItems: (props: NavbarStaticStyledProps) => props.theme.alignItems.center,
    Position: (props: NavbarStaticStyledProps) => props.theme.position.relative,
    Height: (props: NavbarStaticStyledProps) => "60px",
    ZIndex: (props: NavbarStaticStyledProps) => "11",
}

export default NavbarStaticStyledGetters;
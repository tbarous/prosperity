import {NavbarStyledProps} from "@components/navbar/styled/NavbarStyled";

const NavbarStyledGetters = {
    Width: (props: NavbarStyledProps) => props.theme.dimension.d100,
    BackgroundColor: (props: NavbarStyledProps) => props.theme.color.white,
    Display: (props: NavbarStyledProps) => props.theme.display.flex,
    BoxShadow: (props: NavbarStyledProps) => props.theme.shadow.primary,
    AlignItems: (props: NavbarStyledProps) => props.theme.alignItems.center,
    Height: (props: NavbarStyledProps) => "60px",
    ZIndex: (props: NavbarStyledProps) => "11",
}

export default NavbarStyledGetters;
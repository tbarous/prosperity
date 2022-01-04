import {NavbarFixedStyledProps} from "@components/navbar/styled/navbar-fixed/NavbarFixedStyled";

const NavbarFixedStyledGetters = {
    Width: (props: NavbarFixedStyledProps) => props.theme.dimension.d100,
    BackgroundColor: (props: NavbarFixedStyledProps) => props.theme.color.white,
    Display: (props: NavbarFixedStyledProps) => props.theme.display.flex,
    BoxShadow: (props: NavbarFixedStyledProps) => props.theme.shadow.primary,
    AlignItems: (props: NavbarFixedStyledProps) => props.theme.alignItems.center,
    Position: (props: NavbarFixedStyledProps) => props.theme.position.fixed,
    Height: (props: NavbarFixedStyledProps) => "60px",
    ZIndex: (props: NavbarFixedStyledProps) => "11",
}

export default NavbarFixedStyledGetters;
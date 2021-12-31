import {NavbarStyledProps} from "@components/navbar/styled/NavbarStyled";

export const NavbarWidth = (props: NavbarStyledProps) => props.theme.dimension.d100;
export const NavbarBackgroundColor = (props: NavbarStyledProps) => props.theme.color.white;
export const NavbarDisplay = (props: NavbarStyledProps) => props.theme.display.flex;
export const NavbarBoxShadow = (props: NavbarStyledProps) => props.theme.shadow.primary;
import {LinkStyledProps} from "@components/link/styled/LinkStyled";

const LinkStyledGetters = {
    Display: (props: LinkStyledProps) => props.theme.display.block,
    Color: (props: LinkStyledProps) => props.theme.color.dark,
    FontWeight: (props: LinkStyledProps) => props.theme.fontWeight.bold,
    FontSize: (props: LinkStyledProps) => props.theme.fontSize.md,
    HoveredColor: (props: LinkStyledProps) => props.theme.color.secondary,
    TextDecoration: (props: LinkStyledProps) => props.theme.textDecoration.none,
}

export default LinkStyledGetters;
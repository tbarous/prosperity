import {LinkStyledProps} from "@components/link/styled/LinkStyled";

export const LinkDisplay = (props: LinkStyledProps) => props.theme.display.block;
export const LinkColor = (props: LinkStyledProps) => props.theme.color.primary;
export const LinkFontWeight = (props: LinkStyledProps) => props.theme.fontWeight.bold;
export const LinkFontSize = (props: LinkStyledProps) => props.theme.fontSize.md;
export const LinkHoveredColor = (props: LinkStyledProps) => props.theme.color.secondary;
export const LinkTextDecoration = (props: LinkStyledProps) => props.theme.textDecoration.none;
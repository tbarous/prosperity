import {BadgeStyledProps} from "@components/badge/styled/BadgeStyled";

const BadgeStyledGetters = {
    display: (props: BadgeStyledProps) => props.theme.display.flex,
    width: (props: BadgeStyledProps) => props.theme.dimension.d100,
    alignItems: (props: BadgeStyledProps) => props.theme.alignItems.center,
    backgroundColor: (props: BadgeStyledProps) => props.theme.color.success,
    color: (props: BadgeStyledProps) => props.theme.color.white,
}

export default BadgeStyledGetters;

import {BadgeStyledProps} from "@components/badge/styled/BadgeStyled";

const BadgeStyledGetters = {
    Display: (props: BadgeStyledProps) => props.theme.display.inlineFlex,
    Width: (props: BadgeStyledProps) => props.theme.dimension.d100,
    AlignItems: (props: BadgeStyledProps) => props.theme.alignItems.center,
    BackgroundColor: (props: BadgeStyledProps) => props.theme.color.success,
    Color: (props: BadgeStyledProps) => props.theme.color.white,
    Position: (props: BadgeStyledProps) => props.theme.position.absolute,
    FontSize: (props: BadgeStyledProps) => props.theme.fontSize.sm,
    BorderRadius: (props: BadgeStyledProps) => props.theme.borderRadius.large,
    Padding: (props: BadgeStyledProps) => `${props.theme.spacing.s2} ${props.theme.spacing.s4}`,
    JustifyContent: (props: BadgeStyledProps) => props.theme.justifyContent.center
}

export default BadgeStyledGetters;


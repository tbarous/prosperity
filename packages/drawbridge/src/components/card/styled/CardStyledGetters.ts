import {CardStyledProps} from "@components/card/styled/CardStyled";

const CardStyledGetters = {
    BoxShadow: (props: CardStyledProps) => props.theme.shadow.light,
    BackgroundColor: (props: CardStyledProps) => props.theme.color.white,
    Width: (props: CardStyledProps) => props.theme.dimension.d100,
    BoxSizing: (props: CardStyledProps) => props.theme.boxSizing.borderBox,
    BorderRadius: (props: CardStyledProps) => props.rounded ? props.theme.borderRadius.medium : "initial",
    BoxShadowHovered: (props: CardStyledProps) => props.theme.shadow.elevate,
    Transition: (props: CardStyledProps) => props.theme.transition.elevation
}

export default CardStyledGetters;
import {CardStyledProps} from "@components/card/styled/CardStyled";

const CardStyledGetters = {
    BoxShadow: (props: CardStyledProps) => props.theme.shadow.primary,
    BackgroundColor: (props: CardStyledProps) => props.theme.color.white,
    BorderRadius: (props: CardStyledProps) => props.rounded ? props.theme.borderRadius.medium : "initial",
    Width: (props: CardStyledProps) => props.theme.dimension.d100,
    BoxSizing: (props: CardStyledProps) => props.theme.boxSizing.borderBox,
}

export default CardStyledGetters;
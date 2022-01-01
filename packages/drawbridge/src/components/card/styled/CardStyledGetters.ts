import {CardStyledProps} from "@components/card/styled/CardStyled";

export const CardBoxShadow = (props: CardStyledProps) => props.theme.shadow.primary;
export const CardBackgroundColor = (props: CardStyledProps) => props.theme.color.white;
export const CardBorderRadius = (props: CardStyledProps) => props.rounded ? props.theme.borderRadius.medium : "";
export const CardWidth = (props: CardStyledProps) => props.theme.dimension.d100;
export const CardBoxSizing = (props: CardStyledProps) => props.theme.boxSizing.borderBox;
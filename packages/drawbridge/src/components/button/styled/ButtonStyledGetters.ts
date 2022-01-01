import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";
import {ButtonStyledProps} from "@components/button/styled/ButtonStyled";
import ButtonSizeEnum from "@components/button/enums/ButtonSizeEnum";

// Helpers
export function ButtonBackgroundColor(props: ButtonStyledProps) {
    const color = props.theme.color;
    const variation = props.variation;

    const mapping = {
        [ButtonVariationEnum.PRIMARY]: color.primary,
        [ButtonVariationEnum.SECONDARY]: color.secondary
    }

    if (!variation || !mapping[variation]) return color.primary;

    return mapping[variation];
}

export function ButtonColor(props: ButtonStyledProps) {
    const color = props.theme.color;
    const variation = props.variation;

    const mapping = {
        [ButtonVariationEnum.PRIMARY]: color.white,
        [ButtonVariationEnum.SECONDARY]: color.dark
    }

    if (!variation || !mapping[variation]) return color.white;

    return mapping[variation];
}

export function ButtonPadding(props: ButtonStyledProps) {
    const spacing = props.theme.spacing;
    const size = props.size;

    const mapping = {
        [ButtonSizeEnum.SMALL]: spacing.s4,
        [ButtonSizeEnum.MEDIUM]: spacing.s5,
        [ButtonSizeEnum.LARGE]: spacing.s6,
    }

    if (!size || !mapping[size]) return spacing.s4;

    return mapping[size];
}

const ButtonStyledGetters = {
    Padding: ButtonPadding,
    BackgroundColor: ButtonBackgroundColor,
    Color: ButtonColor,
    LetterSpacing : (props: ButtonStyledProps) => props.theme.fontLetterSpacing.small,
    Height : (props: ButtonStyledProps) => props.theme.dimension.d100,
    Width : (props: ButtonStyledProps) => props.theme.dimension.d100,
    FontWeight : (props: ButtonStyledProps) => props.theme.fontWeight.bold,
    FontSize : (props: ButtonStyledProps) => props.theme.fontSize.md,
    BoxShadow : (props: ButtonStyledProps) => props.theme.shadow.primary,
    FontFamily : (props: ButtonStyledProps) => props.theme.fontFamily.primary,
    BorderRadius : (props: ButtonStyledProps) => props.theme.borderRadius.medium,
    Border : (props: ButtonStyledProps) => props.theme.border.none,
    Cursor : (props: ButtonStyledProps) => props.theme.cursor.pointer,
    HoveredShadow : (props: ButtonStyledProps) => props.theme.shadow.secondary,
    FocusedFocusFilter : (props: ButtonStyledProps) => "brightness(110%)",
    ActiveFocusFilter : (props: ButtonStyledProps) => "brightness(110%)",
    VisitedFocusFilter : (props: ButtonStyledProps) => "brightness(110%)",
}

export default ButtonStyledGetters;
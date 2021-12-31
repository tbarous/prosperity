import VariationEnum from "@components/button/enums/VariationEnum";
import {ButtonStyledProps} from "@components/button/styled/ButtonStyled";
import SizeEnum from "@components/button/enums/SizeEnum";

// Helpers
export function ButtonBackgroundColor(props: ButtonStyledProps) {
    const color = props.theme.color;
    const variation = props.variation;

    const mapping = {
        [VariationEnum.PRIMARY]: color.primary,
        [VariationEnum.SECONDARY]: color.secondary
    }

    if (!variation || !mapping[variation]) return color.primary;

    return mapping[variation];
}

export function ButtonColor(props: ButtonStyledProps) {
    const color = props.theme.color;
    const variation = props.variation;

    const mapping = {
        [VariationEnum.PRIMARY]: color.white,
        [VariationEnum.SECONDARY]: color.dark
    }

    if (!variation || !mapping[variation]) return color.white;

    return mapping[variation];
}

export function ButtonPadding(props: ButtonStyledProps) {
    const spacing = props.theme.spacing;
    const size = props.size;

    const mapping = {
        [SizeEnum.SMALL]: spacing.s4,
        [SizeEnum.MEDIUM]: spacing.s6,
        [SizeEnum.LARGE]: spacing.s8,
    }

    if (!size || !mapping[size]) return spacing.s4;

    return mapping[size];
}

// Styles
export const ButtonLetterSpacing = (props: ButtonStyledProps) => props.theme.fontLetterSpacing.small;
export const ButtonHeight = (props: ButtonStyledProps) => props.theme.dimension.d100;
export const ButtonWidth = (props: ButtonStyledProps) => props.theme.dimension.d100;
export const ButtonFontWeight = (props: ButtonStyledProps) => props.theme.fontWeight.bold;
export const ButtonFontSize = (props: ButtonStyledProps) => props.theme.fontSize.md;
export const ButtonBoxShadow = (props: ButtonStyledProps) => props.theme.shadow.primary;
export const ButtonFontFamily = (props: ButtonStyledProps) => props.theme.fontFamily.primary;
export const ButtonBorderRadius = (props: ButtonStyledProps) => props.theme.borderRadius.medium;
export const ButtonBorder = (props: ButtonStyledProps) => props.theme.border.none;
export const ButtonCursor = (props: ButtonStyledProps) => props.theme.cursor.pointer;
export const ButtonHoveredShadow = (props: ButtonStyledProps) => props.theme.shadow.secondary;
export const ButtonFocusedFocusFilter = (props: ButtonStyledProps) => "brightness(110%)";
export const ButtonActiveFocusFilter = (props: ButtonStyledProps) => "brightness(110%)";
export const ButtonVisitedFocusFilter = (props: ButtonStyledProps) => "brightness(110%)";
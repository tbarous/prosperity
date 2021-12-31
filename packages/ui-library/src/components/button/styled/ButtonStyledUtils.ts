import VariationEnum from "@components/button/enums/VariationEnum";
import {ButtonStyledProps} from "@components/button/styled/ButtonStyled";
import SizeEnum from "@components/button/enums/SizeEnum";

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
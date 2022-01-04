import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";
import {css, keyframes} from "styled-components";
import {SnackbarStyledProps} from "@components/snackbar/styled/snackbar/SnackbarStyled";

const SnackbarBackgroundColor = (props: SnackbarStyledProps) => {
    const color = props.theme.color;
    const variation = props.variation;

    const mapping: any = {
        [SnackbarVariationEnum.DANGER]: color.danger,
        [SnackbarVariationEnum.WARNING]: color.warning,
        [SnackbarVariationEnum.SUCCESS]: color.success,
    }

    if (!variation || !mapping[variation]) return color.warning;

    return mapping[variation];
}

const SnackbarColor = (props: SnackbarStyledProps) => {
    const color = props.theme.color;
    const variation = props.variation;

    const mapping: any = {
        [SnackbarVariationEnum.DANGER]: color.white,
        [SnackbarVariationEnum.WARNING]: color.dark,
        [SnackbarVariationEnum.SUCCESS]: color.white,
    }

    if (!variation || !mapping[variation]) return color.white;

    return mapping[variation];
}

const SnackbarStyledGetters = {
    BackgroundColor: SnackbarBackgroundColor,
    Color: SnackbarColor,
    Position: (props: SnackbarStyledProps) => props.theme.position.fixed,
    Bottom: (props: SnackbarStyledProps) => props.theme.spacing.s0,
    Left: (props: SnackbarStyledProps) => props.theme.spacing.s0,
    Width: (props: SnackbarStyledProps) => props.theme.dimension.d100,
    Height: (props: SnackbarStyledProps) => "60px",
    Display: (props: SnackbarStyledProps) => props.theme.display.flex,
    AlignItems: (props: SnackbarStyledProps) => props.theme.alignItems.center,
    Padding: (props: SnackbarStyledProps) => `${props.theme.spacing.s0} ${props.theme.spacing.s6}`,
    FontWeight: (props: SnackbarStyledProps) => props.theme.fontWeight.bold,
    BoxSizing: (props: SnackbarStyledProps) => props.theme.boxSizing.borderBox,
    BoxShadow: (props: SnackbarStyledProps) => props.theme.shadow.secondary,
    Transform: (props: SnackbarStyledProps) => props.mount ? `translateX(0)` : `translateY(150%)`,
    Transition: (props: SnackbarStyledProps) => props.mount ? `transform ${(props.entryDelay || 1000) / 1000}s` : `transform ${(props.exitDelay || 1000) / 1000}s`,
}

export default SnackbarStyledGetters;
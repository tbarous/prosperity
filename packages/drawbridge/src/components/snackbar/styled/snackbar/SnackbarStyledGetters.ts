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
        [SnackbarVariationEnum.WARNING]: color.white,
        [SnackbarVariationEnum.WARNING]: color.white,
    }

    if (!variation || !mapping[variation]) return color.white;

    return mapping[variation];
}

const show = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


const hide = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(100px);
    opacity: 0;
  }
`;

const SnackbarStyledGetters = {
    BackgroundColor: SnackbarBackgroundColor,
    Position: (props: SnackbarStyledProps) => props.theme.position.fixed,
    Bottom: (props: SnackbarStyledProps) => props.theme.spacing.s0,
    Left: (props: SnackbarStyledProps) => props.theme.spacing.s0,
    Width: (props: SnackbarStyledProps) => props.theme.dimension.d100,
    Height: (props: SnackbarStyledProps) => "60px",
    Display: (props: SnackbarStyledProps) => props.theme.display.flex,
    AlignItems: (props: SnackbarStyledProps) => props.theme.alignItems.center,
    Animation: (props: SnackbarStyledProps) => props.unmounting ? css`${hide} .5s` : css`${show} .5s`,
    AnimationTimingFunction: (props: SnackbarStyledProps) => "ease-in-out",
    AnimationFillMode: (props: SnackbarStyledProps) => "forwards",
    Color: SnackbarColor,
    Padding: (props: SnackbarStyledProps) => `${props.theme.spacing.s0} ${props.theme.spacing.s6}`,
}

export default SnackbarStyledGetters;
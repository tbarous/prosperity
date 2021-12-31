import {SnackbarStyledProps} from "@components/snackbar/styled/SnackbarStyled";
import {Variation} from "@components/snackbar/Snackbar";

export const SnackbarBackgroundColor = (props: SnackbarStyledProps) => {
    if (props.variation === Variation.Danger) {
        return props.theme.color.danger;
    }

    if (props.variation === Variation.Warning) {
        return props.theme.color.warning;
    }

    if (props.variation === Variation.Success) {
        return props.theme.color.success;
    }
}
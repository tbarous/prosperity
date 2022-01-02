import Snackbar from "@components/snackbar/Snackbar";
import DefaultSnackbar from '@stories/snackbar/DefaultSnackbar.story';
import SnackbarVariationEnum from "@components/snackbar/enums/SnackbarVariationEnum";

export default {
    title: 'Snackbar',
    component: Snackbar,
    argTypes: {
        variation: {
            options: [
                SnackbarVariationEnum.DANGER,
                SnackbarVariationEnum.WARNING,
                SnackbarVariationEnum.SUCCESS
            ],
            control: {type: 'radio'},
        },
        dismissible: {
            control: {type: "boolean"}
        },
        closeOnDelay: {
            control: {type: "number"}
        }
    },
};

export {
    DefaultSnackbar
}
import Snackbar, {SnackbarVariationEnum} from "@components/snackbar/Snackbar";
import DefaultSnackbar from '@stories/snackbar/DefaultSnackbar.story';

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
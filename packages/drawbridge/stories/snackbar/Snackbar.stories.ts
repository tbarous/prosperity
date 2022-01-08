import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import DefaultSnackbar from '@stories/snackbar/DefaultSnackbar.story';

export default {
    title: 'Snackbar',
    component: Snackbar,
    argTypes: {
        variation: {
            options: [
                SnackbarVariations.DANGER,
                SnackbarVariations.WARNING,
                SnackbarVariations.SUCCESS
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
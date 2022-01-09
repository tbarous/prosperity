import Snackbar, {SnackbarVariations} from "@components/snackbar/Snackbar";
import DefaultSnackbar from '@stories/snackbar/Snackbar.story';

export default {
    title: 'Snackbar',
    component: () => {},
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
import React from "react";
import SnackbarComponent, {SnackbarPositionVariations} from "@atoms/Snackbar";

export default {
    title: 'Design System/Atoms/Snackbar',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem`
        },
        position: {
            options: [SnackbarPositionVariations.TOP, SnackbarPositionVariations.BOTTOM],
            control: {type: 'radio'},
            defaultValue: SnackbarPositionVariations.BOTTOM
        },
    },
    parameters: {
        layout: 'padded',
    },
};

const Snackbar = (args: { text: string, position: SnackbarPositionVariations }) => (
    <SnackbarComponent position={args.position}>{args.text}</SnackbarComponent>
)

export {
    Snackbar
}
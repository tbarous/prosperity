import React from "react";
import AlertComponent from "@atoms/Alert";

export default {
    title: 'Design System/Atoms/Alert',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem`
        },
    },
    parameters: {
        layout: 'padded',
    },
};

const Alert = (args: { text: string }) => <AlertComponent>{args.text}</AlertComponent>

export {
    Alert
}
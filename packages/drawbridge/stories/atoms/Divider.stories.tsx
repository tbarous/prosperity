import React from "react";
import DividerComponent from "@atoms/Divider";

export default {
    title: 'Design System/Atoms/Divider',
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

const Divider = (args: { text: string }) => <DividerComponent/>

export {
    Divider
}
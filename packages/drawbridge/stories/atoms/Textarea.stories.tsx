import React from "react";
import TextareaComponent from "@atoms/Textarea";

export default {
    title: 'Design System/Atoms/Textarea',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string };

const Textarea = (args: T) => <TextareaComponent/>;

export {
    Textarea,
}
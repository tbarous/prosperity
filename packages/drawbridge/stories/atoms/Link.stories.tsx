import React, {ChangeEvent, FormEvent, useState} from "react";
import LinkComponent from "@atoms/Link";

export default {
    title: 'Design System/Atoms/Link',
    component: () => {},
    argTypes: {
        label: {
            options: [],
            control: {type: 'text'},
            defaultValue: "Label"
        },
        value: {
            options: [],
            control: {type: 'text'},
            defaultValue: ""
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { label: string, value: string };

const Link = (args: T) => {
    return <LinkComponent href="">Link</LinkComponent>
}

export {
    Link,
}
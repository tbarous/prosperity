import React from "react";
import Badge from "@atoms/badge/Badge";

export default {
    title: 'Design System/Atoms/Badge',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem ipsum`
        },
    },
    parameters: {
        layout: 'padded',
    },
};

const Primary = (args: { text: string }) => <Badge>{args.text}</Badge>

export {
    Primary
}
import React from "react";
import BadgeComponent from "@atoms/Badge";

export default {
    title: 'Design System/Atoms/Badge',
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

const Badge = (args: { text: string }) => <BadgeComponent>{args.text}</BadgeComponent>

export {
    Badge
}
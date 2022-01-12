import React from "react";
import SubheaderStyled, {SubheaderBoldness} from "@atoms/Subheader";

export default {
    title: 'Design System/Atoms/Subheader',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
        },
        boldness: {
            options: [SubheaderBoldness.LIGHT, SubheaderBoldness.NORMAL, SubheaderBoldness.BOLD],
            control: {type: 'radio'},
            defaultValue: SubheaderBoldness.NORMAL
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string, boldness: SubheaderBoldness };

const Subheader = (args: T) => <SubheaderStyled boldness={args.boldness}>{args.text}</SubheaderStyled>;

export {
    Subheader,
}
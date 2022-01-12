import React from "react";
import SubsubheaderStyled, {SubsubheaderBoldness} from "@atoms/Subsubheader";

export default {
    title: 'Design System/Atoms/Subsubheader',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
        },
        boldness: {
            options: [SubsubheaderBoldness.LIGHT, SubsubheaderBoldness.NORMAL, SubsubheaderBoldness.BOLD],
            control: {type: 'radio'},
            defaultValue: SubsubheaderBoldness.NORMAL
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string, boldness: SubsubheaderBoldness };

const Subsubheader = (args: T) => <SubsubheaderStyled boldness={args.boldness}>{args.text}</SubsubheaderStyled>;

export {
    Subsubheader,
}
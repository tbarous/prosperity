import React from "react";
import SubsubsubheaderStyled, {SubsubsubheaderBoldness} from "@atoms/Subsubsubheader";

export default {
    title: 'Design System/Atoms/Subsubsubheader',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
        },
        boldness: {
            options: [SubsubsubheaderBoldness.LIGHT, SubsubsubheaderBoldness.NORMAL, SubsubsubheaderBoldness.BOLD],
            control: {type: 'radio'},
            defaultValue: SubsubsubheaderBoldness.NORMAL
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string, boldness: SubsubsubheaderBoldness };

const Subsubsubheader = (args: T) => <SubsubsubheaderStyled boldness={args.boldness}>{args.text}</SubsubsubheaderStyled>;

export {
    Subsubsubheader,
}
import React from "react";
import TextStyled, {TextBoldness} from "@atoms/Text";

export default {
    title: 'Design System/Atoms/Text',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
        },
        boldness: {
            options: [TextBoldness.LIGHT, TextBoldness.NORMAL, TextBoldness.BOLD],
            control: {type: 'radio'},
            defaultValue: TextBoldness.NORMAL
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string, boldness: TextBoldness };

const Text = (args: T) => <TextStyled boldness={args.boldness}>{args.text}</TextStyled>;

export {
    Text,
}
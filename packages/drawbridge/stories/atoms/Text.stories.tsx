import React from "react";
import TextComponent, {TextBoldness} from "@atoms/Text";

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

const Text = (args: T) => <TextComponent boldness={args.boldness}>{args.text}</TextComponent>;

export {
    Text,
}
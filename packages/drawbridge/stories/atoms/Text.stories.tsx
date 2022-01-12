import React from "react";
import Text from "@atoms/text/Text";
import TextMuted from "@atoms/text/TextMuted";
import TextEmphasized from "@atoms/text/TextEmphasized";

export default {
    title: 'Design System/Atoms/Text',
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

const Normal = (args: T) => <Text>{args.text}</Text>;
const Muted = (args: T) => <TextMuted>{args.text}</TextMuted>;
const Emphasized = (args: T) => <TextEmphasized>{args.text}</TextEmphasized>;

export {
    Normal,
    Muted,
    Emphasized
}
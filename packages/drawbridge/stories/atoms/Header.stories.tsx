import React from "react";
import HeaderComponent, {Boldness, Variations} from "@atoms/Header";

export default {
    title: 'Design System/Atoms/Header',
    component: () => {},
    argTypes: {
        text: {
            options: [],
            control: {type: 'text'},
            defaultValue: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`
        },
        boldness: {
            options: [Boldness.LIGHT, Boldness.NORMAL, Boldness.BOLD],
            control: {type: 'radio'},
            defaultValue: Boldness.NORMAL
        },
        variation: {
            options: [Variations.H1, Variations.H2, Variations.H3, Variations.H4, Variations.H5],
            control: {type: 'radio'},
            defaultValue: Variations.H1
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string, boldness: Boldness, variation: Variations };

const Header = (args: T) => (
    <HeaderComponent
        variation={args.variation}
        boldness={args.boldness}
    >
        {args.text}
    </HeaderComponent>
);

export {
    Header,
}
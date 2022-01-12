import React from "react";
import SubheaderStyled, {Boldness, Variations} from "@atoms/Subheader";

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
            options: [Boldness.LIGHT, Boldness.NORMAL, Boldness.BOLD],
            control: {type: 'radio'},
            defaultValue: Boldness.NORMAL
        },
        variation: {
            options: [Variations.H2, Variations.H3, Variations.H4, Variations.H5],
            control: {type: 'radio'},
            defaultValue: Variations.H2
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string, boldness: Boldness, variation: Variations };

const Subheader = (args: T) => <SubheaderStyled variation={args.variation} boldness={args.boldness}>{args.text}</SubheaderStyled>;

export {
    Subheader,
}
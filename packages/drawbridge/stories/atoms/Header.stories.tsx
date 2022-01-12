import React from "react";
import HeaderStyled, {HeaderBoldness} from "@atoms/Header";

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
            options: [HeaderBoldness.LIGHT, HeaderBoldness.NORMAL, HeaderBoldness.BOLD],
            control: {type: 'radio'},
            defaultValue: HeaderBoldness.NORMAL
        },
    },
    parameters: {
        layout: 'padded',
    },
};

type T = { text: string, boldness: HeaderBoldness };

const Header = (args: T) => <HeaderStyled boldness={args.boldness}>{args.text}</HeaderStyled>;

export {
    Header,
}
import React from "react";
import ButtonComponent, {ButtonSizes, ButtonVariations} from "@atoms/Button";

export default {
    title: 'Design System/Atoms/Button',
    component: () => {},
    argTypes: {
        variation: {
            options: [ButtonVariations.PRIMARY, ButtonVariations.SECONDARY],
            control: {type: 'radio'},
        },
        size: {
            options: [ButtonSizes.SMALL, ButtonSizes.MEDIUM, ButtonSizes.LARGE],
            control: {type: 'radio'},
        },
        text: {
            control: {type: 'text'},
            defaultValue: "Button"
        },
    },
    parameters: {
        layout: 'padded',
    },
};

const Button = (args: { text: string, variation: ButtonVariations, size: ButtonSizes }) => (
    <ButtonComponent variation={args.variation} size={args.size}>{args.text}</ButtonComponent>
);

export {
    Button
}
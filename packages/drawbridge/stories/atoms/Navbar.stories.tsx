import React from "react";
import NavbarComponent, {NavbarVariations} from '@atoms/Navbar';

export default {
    title: 'Design System/Atoms/Navbar',
    component: () => [],
    argTypes: {
        variation: {
            options: [NavbarVariations.DARK, NavbarVariations.LIGHT, NavbarVariations.TRANSPARENT],
            control: {type: 'radio'},
            defaultValue: NavbarVariations.LIGHT
        },
    },
};

const Navbar = (args: { variation: NavbarVariations }) => {
    return (
        <NavbarComponent variation={args.variation}>List Item</NavbarComponent>
    );
}

Navbar.args = {};

export {
    Navbar
}
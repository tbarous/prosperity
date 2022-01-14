import React from "react";
import NavbarComponent, {NavbarColorVariations, NavbarPositionVariations} from '@atoms/Navbar';

export default {
    title: 'Design System/Atoms/Navbar',
    component: () => [],
    argTypes: {
        variation: {
            options: [NavbarColorVariations.DARK, NavbarColorVariations.LIGHT, NavbarColorVariations.TRANSPARENT],
            control: {type: 'radio'},
            defaultValue: NavbarColorVariations.LIGHT
        },
        position: {
            options: [NavbarPositionVariations.FIXED, NavbarPositionVariations.STATIC],
            control: {type: 'radio'},
            defaultValue: NavbarPositionVariations.STATIC
        },
    },
};

const Navbar = (args: { variation: NavbarColorVariations, position: NavbarPositionVariations }) => {
    return (
        <NavbarComponent variation={args.variation} position={args.position}>List Item</NavbarComponent>
    );
}

Navbar.args = {};

export {
    Navbar
}
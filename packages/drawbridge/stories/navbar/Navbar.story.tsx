import React from 'react';
import {BasicComponentProps} from "@typings";
import NavbarStatic from "@components/navbar/NavbarStatic";
import NavbarFixed from "@components/navbar/NavbarFixed";
import useOnScroll from "@hooks/UseOnScroll";

const DefaultNavbar = (args: BasicComponentProps) => {
    const scrollFromTop = useOnScroll();

    return (
        <>
            <NavbarStatic transparent>Navbar</NavbarStatic>

            <NavbarFixed>Navbar</NavbarFixed>

            <div style={{height: "3000px"}}/>
        </>
    );
}

DefaultNavbar.args = {};

export default DefaultNavbar;
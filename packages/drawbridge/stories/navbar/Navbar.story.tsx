import React, {useState} from 'react';
import {BasicComponentProps} from "@typings";
import NavbarStatic from "@components/navbar/NavbarStatic";
import NavbarFixed from "@components/navbar/NavbarFixed";

const DefaultNavbar = (args: BasicComponentProps) => {
    const [display, setDisplay] = useState<boolean>(true);

    return (
        <>
            <NavbarStatic transparent>Navbar</NavbarStatic>

            <NavbarFixed
                display={display}
                onStartDisplay={() => setDisplay(true)}
                onStopDisplay={() => setDisplay(false)}
            >
                Navbar
            </NavbarFixed>

            <div style={{height: "3000px"}}/>
        </>
    );
}

DefaultNavbar.args = {};

export default DefaultNavbar;
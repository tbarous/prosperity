import React from "react";
import {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import NavbarStaticStyled from "./styled/navbar-static/NavbarStaticStyled";

interface NavbarProps extends BasicComponentProps {
}

const NavbarStatic: FunctionComponent<NavbarProps> = (props: NavbarProps): ReactElementOrNull => {
    const {
        children,
        className
    } = props;

    return (
        <NavbarStaticStyled
            className={className}
        >
            {children}
        </NavbarStaticStyled>
    )
}

export default NavbarStatic;
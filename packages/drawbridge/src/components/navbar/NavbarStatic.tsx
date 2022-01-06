import React from "react";
import {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import NavbarStaticStyled from "@components/navbar/styled/NavbarStaticStyled";

interface NavbarProps extends BasicComponentProps {
    transparent?: boolean
}

const NavbarStatic: FunctionComponent<NavbarProps> = (props: NavbarProps): ReactElementOrNull => {
    const {
        children,
        className,
        transparent
    } = props;

    return (
        <NavbarStaticStyled
            className={className}
            transparent={transparent}
        >
            {children}
        </NavbarStaticStyled>
    )
}

export default NavbarStatic;
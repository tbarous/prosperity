import React from "react";
import {FunctionComponent} from "react";
import {BasicComponentProps, ReactElementOrNull} from "@typings";
import NavbarStyled from "./styled/NavbarStyled";

const Navbar: FunctionComponent<BasicComponentProps> = (props: BasicComponentProps): ReactElementOrNull => {
    const {
        children,
        className
    } = props;

    return (
        <NavbarStyled className={className}>
            {children}
        </NavbarStyled>
    )
}

export default Navbar;
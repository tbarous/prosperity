import React, {ReactElement, ReactNode} from "react";
import {FunctionComponent} from "react";
import NavbarStaticStyled from "@components/navbar/styled/NavbarStaticStyled";

interface T {
    children: ReactNode,
    className?: string,
    transparent?: boolean
}

const NavbarStatic: FunctionComponent<T> = (props: T): ReactElement => {
    const {children, className, transparent} = props;

    return (
        <NavbarStaticStyled className={className} transparent={transparent}>
            {children}
        </NavbarStaticStyled>
    )
}

export default NavbarStatic;
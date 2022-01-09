import React, {ReactElement, ReactNode} from "react";
import {FunctionComponent} from "react";
import NavbarStaticStyled from "@components/navbar/styled/NavbarStaticStyled";
import {BasicComponentProps} from "@typings";

export interface NavbarStaticProps extends BasicComponentProps {
    transparent?: boolean
}

const NavbarStatic: FunctionComponent<NavbarStaticProps> = (props: NavbarStaticProps): ReactElement => {
    const {children, className, transparent} = props;

    return (
        <NavbarStaticStyled className={className} transparent={transparent}>
            {children}
        </NavbarStaticStyled>
    )
}

export default NavbarStatic;